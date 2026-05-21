-- Thynoria · 早期线索表
-- 在 Supabase SQL Editor 中执行一次即可

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  entity_location text not null check (entity_location in ('HK','SG','US','CN','OTHER')),
  monthly_spend text not null check (monthly_spend in ('<1k','1k-10k','10k-100k','>100k')),
  scenario text,
  source text default 'landing',
  ip text,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_email_idx on public.leads (email);

-- 关闭 RLS（后端用 service_role key 直接写入；前端永远不直连）
alter table public.leads enable row level security;

-- 默认无策略 = 匿名/anon key 无法读写。
-- 后端使用 service_role key 可绕过 RLS，前端无法访问。
