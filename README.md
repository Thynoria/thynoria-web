# Thynoria 官网

最低成本前后端分离单机部署方案。

- **前端**：Next.js 14 静态导出 + Tailwind，由 nginx 托管
- **后端**：Fastify 单文件，POST `/api/leads` 写入 Supabase
- **反代**：Caddy 自动申请 Let's Encrypt 证书
- **数据库**：Supabase（免费档已够）
- **部署**：1 台 VPS + `docker compose up -d`

预估成本：**€4.5/月**（Hetzner CX22）或 **$0**（Oracle Cloud ARM 永久免费）。

---

## 目录结构

```
5.官网/
├── docker-compose.yml
├── Caddyfile
├── .env.example
├── frontend/             # Next.js + Tailwind
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── app/
│   └── components/
├── backend/              # Fastify + Supabase
│   ├── Dockerfile
│   └── src/index.js
└── supabase/
    └── schema.sql        # 在 Supabase 控制台执行一次
```

---

## 一、Supabase 初始化（1 分钟）

1. 登录 Supabase 项目 → SQL Editor
2. 粘贴并执行 `supabase/schema.sql`
3. Settings → API，记下：
   - `Project URL` → `SUPABASE_URL`
   - `service_role` secret → `SUPABASE_SERVICE_ROLE_KEY`（**绝不能泄露给前端**）

---

## 二、本地开发（可选）

```bash
# 后端
cd backend
npm install
SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... npm start
# → http://localhost:3000/api/health

# 前端
cd frontend
npm install
npm run dev
# → http://localhost:3000
```

> 本地调试时前端表单会请求 `/api/leads`，需要通过 Caddy 或 Next.js rewrites 转发到后端；
> 最简单的方式是直接 `docker compose up` 一起跑。

---

## 三、生产部署（VPS · 推荐用 CI 构建好的镜像）

代码 push 到 main 后，GitHub Actions 会自动构建并推送镜像至：

- `ghcr.io/thynoria/thynoria-web-frontend:latest`
- `ghcr.io/thynoria/thynoria-web-backend:latest`

VPS 端只需拉镜像启动，**无需本地构建**：

```bash
cp .env.example .env  # 填 Supabase 凭据
docker compose -f docker-compose.prod.yml pull
docker compose -f docker-compose.prod.yml up -d
```

如需回滚到指定版本：`IMAGE_TAG=sha-1b52895 docker compose -f docker-compose.prod.yml up -d`

> 如果 ghcr 包是 private，先：
> ```
> echo $GHCR_PAT | docker login ghcr.io -u <github-username> --password-stdin
> ```

---

## 四、本地完整构建部署（备选）

### 1. 准备一台 Linux VPS

推荐：
- **Hetzner CX22**（€4.5/月，欧洲，性价比之王）
- **Oracle Cloud Ampere A1**（永久免费，4 核 24G）
- **Vultr / DigitalOcean HK**（$5/月，亚太延迟低）

最小要求：1 vCPU / 1G RAM / 20G 硬盘。

### 2. 安装 Docker

```bash
curl -fsSL https://get.docker.com | sh
```

### 3. Cloudflare DNS 配置

- A 记录：`thynoria.com` → VPS IP
- A 记录：`www.thynoria.com` → VPS IP
- **代理状态先选 "DNS only"（灰云）**，等 Caddy 拿到证书后再切到 "Proxied"（橙云）

### 4. 拉代码 + 配置 env

```bash
git clone <your-repo> thynoria-web
cd thynoria-web/5.官网
cp .env.example .env
vim .env  # 填入 SUPABASE_URL 与 SUPABASE_SERVICE_ROLE_KEY
```

### 5. 启动

```bash
docker compose up -d --build
docker compose logs -f caddy   # 看 Caddy 是否成功签发证书
```

打开 `https://thynoria.com` 即应可访问。表单提交后到 Supabase Table Editor 查看 `leads` 表。

### 6. 切到 Cloudflare Proxied（推荐）

证书拿到后：
- Cloudflare DNS → 把两条 A 记录切到 "Proxied"（橙云）
- SSL/TLS → "Full (strict)" 模式
- 享受 Cloudflare CDN 加速 + DDoS 防护，免费

---

## 四、常用维护命令

```bash
# 查看运行状态
docker compose ps

# 查看日志
docker compose logs -f backend
docker compose logs -f caddy

# 更新代码后重新构建
git pull
docker compose up -d --build

# 备份不需要 —— 所有数据在 Supabase 托管
```

---

## 五、扩展指引（之后再做）

- **加博客**：在 `frontend/app/blog/[slug]/page.tsx` 加 MDX 支持
- **加埋点**：在 `app/layout.tsx` 头部加一段 Plausible / Umami script（免费）
- **加邮件通知**：后端写入 Supabase 成功后，调用 Resend / Postmark 发邮件提醒自己
- **加 i18n**：用 `next-intl`，但**先不要做**，聚焦中文受众

---

## 六、安全提醒

- `SUPABASE_SERVICE_ROLE_KEY` 仅出现在后端容器环境变量中，**永远不要带进前端**
- `.env` 已在 `.gitignore`，不要 commit
- `leads` 表开启了 RLS 且无策略，anon key 无法读写，**只有后端 service_role 能写**
- 后端开启了 rate-limit（10 req/min/ip）+ 蜜罐字段防爬
