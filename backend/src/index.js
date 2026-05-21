import Fastify from 'fastify';
import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';
import { createClient } from '@supabase/supabase-js';

const {
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
  ALLOWED_ORIGIN = 'https://thynoria.com',
  PORT = 3000,
} = process.env;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const app = Fastify({ logger: true, trustProxy: true });

await app.register(cors, {
  origin: ALLOWED_ORIGIN.split(',').map((s) => s.trim()),
  methods: ['POST', 'GET', 'OPTIONS'],
});

await app.register(rateLimit, {
  max: 10,
  timeWindow: '1 minute',
});

app.get('/api/health', async () => ({ ok: true }));

// 提交线索
app.post('/api/leads', async (req, reply) => {
  const body = req.body || {};
  const email = String(body.email || '').trim().toLowerCase();
  const entity_location = String(body.entity_location || '').trim();
  const monthly_spend = String(body.monthly_spend || '').trim();
  const scenario = body.scenario ? String(body.scenario).slice(0, 1000) : null;
  const source = body.source ? String(body.source).slice(0, 100) : 'landing';

  // 基本校验
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return reply.code(400).send({ error: 'invalid email' });
  }
  const allowedEntity = ['HK', 'SG', 'US', 'CN', 'OTHER'];
  if (!allowedEntity.includes(entity_location)) {
    return reply.code(400).send({ error: 'invalid entity_location' });
  }
  const allowedSpend = ['<1k', '1k-10k', '10k-100k', '>100k'];
  if (!allowedSpend.includes(monthly_spend)) {
    return reply.code(400).send({ error: 'invalid monthly_spend' });
  }

  // 蜜罐反爬
  if (body.website) {
    return reply.code(200).send({ ok: true });
  }

  const ip = req.headers['cf-connecting-ip'] || req.ip;
  const user_agent = req.headers['user-agent']?.slice(0, 500) || null;

  const { error } = await supabase.from('leads').insert({
    email,
    entity_location,
    monthly_spend,
    scenario,
    source,
    ip,
    user_agent,
  });

  if (error) {
    req.log.error(error);
    return reply.code(500).send({ error: 'db error' });
  }

  return { ok: true };
});

app.listen({ port: Number(PORT), host: '0.0.0.0' }).catch((err) => {
  app.log.error(err);
  process.exit(1);
});
