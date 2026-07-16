# ie8.net

个人浏览器起始页：搜索入口、常用 AI 工具、实用工具（密码生成器 / 二维码生成器均为纯前端实现）、图片生成与翻译服务、常见广告平台，以及作者自建服务导航（IP 出口检测、Headless CMS、图床、短网址）。

技术栈：[Astro](https://astro.build)（静态输出，无运行时框架开销）。

## 本地开发

```sh
npm install
npm run dev       # http://localhost:4321
npm run build      # 产物输出到 ./dist
npm run preview    # 本地预览构建产物
```

## 目录结构

```
src/
├── data/links.ts          # 所有导航链接数据（搜索引擎、AI 工具、广告平台、自有服务…）
├── components/            # SearchBar / LinkSection / ThemeToggle / PasswordGenerator / QRGenerator
├── layouts/Layout.astro   # 页面骨架 + 主题初始化
└── pages/index.astro      # 首页组装
```

新增/调整导航项只需编辑 `src/data/links.ts`。

## 部署到 Cloudflare Pages

1. 将本仓库推送到 GitHub。
2. Cloudflare Dashboard → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**，选择该仓库。
3. 构建设置：
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
4. 部署完成后，在 Pages 项目的 **Custom domains** 中添加 `www.ie8.net`（域名需已在同一 Cloudflare 账号下托管，会自动签发证书并生成 DNS 记录）。
5. 之后每次 push 到默认分支都会触发自动构建部署，PR 会生成预览环境。
