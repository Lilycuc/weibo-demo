# Weibo Lite MCPX

一个轻量级“类微博”前端演示项目，目标不是堆功能，而是**能跑、能演示、能截图、能讲故事**。在 MVP 的基础上引入了 **MCP/Skill 能力入口**（mock），展示可扩展架构思路。

## 项目亮点
- 假登录 → 首页 feed → 发帖 → 点赞/评论闭环
- 本地 mock 数据渲染，交互逻辑清晰
- MCP 能力卡片：热搜 / 情感分析 / 推荐 / 内容审核（mock 演示）
- Skill 能力卡片：标题生成 / 热点摘要 / 运营文案 / 共情文案（mock 演示）
- 资源已本地化，适合 GitHub Pages 稳定部署

## 技术栈
- HTML5 / CSS3
- 原生 JavaScript（无框架）
- Font Awesome（已本地化）

## 目录结构
- `index.html`：项目入口
- `js/data.js`：mock 数据（帖子 / MCP / Skill）
- `js/ui.js`：渲染与安全输出
- `js/app.js`：状态与交互逻辑
- `assets/`：本地图片资源
- `vendor/`：本地化第三方资源（Font Awesome）

## 部署到 GitHub Pages

### 1) 本地检查
- 确保入口文件为 `index.html`
- 资源路径使用相对路径（本项目已处理）

### 2) 初始化仓库
```bash
git init
git add .
git commit -m "init weibo lite"
```

### 3) 推送到 GitHub
```bash
git remote add origin <你的仓库地址>
git branch -M main
git push -u origin main
```

### 4) 开启 GitHub Pages
- 进入 GitHub 仓库 → Settings → Pages
- Source 选择 `main` 分支，路径选择 `/ (root)`
- 保存后等待部署完成

### 5) 访问链接
- 页面会生成类似：`https://<用户名>.github.io/<仓库名>/`

## 说明
- `静态1.0.html` 为早期静态版本（可选保留，不作为主入口）
- 目前 MCP/Skill 为 mock 演示，后续可替换为真实接口

## 在线演示
https://lilycuc.github.io/weibo-demo/
