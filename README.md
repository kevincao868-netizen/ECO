```markdown
# ECO - 外汇 / USDT ↔ NGN 平台（仓库初始化）

此仓库为外汇换汇项目的初始化骨架（MVP 起点）。包含：
- 最小后端（Node + Express + TypeScript）
- Prisma 数据模型（Postgres）
- docker-compose：Postgres（演示用）与 Redis（可选）
- 基本 README、.gitignore、LICENSE

快速开始（本地开发）
1. 克隆或在本地初始化项目目录，然后将以下文件放入仓库根目录（或根据路径组织）。
2. 启动数据库（需要 Docker）：
   docker-compose up -d

3. 进入后端并安装依赖：
   cd backend
   npm install

4. 本地开发启动（TypeScript + ts-node-dev）：
   npm run dev

5. 在浏览器打开 http://localhost:3000 应看到欢迎信息。

把本地代码推送到 GitHub（已创建空仓库 https://github.com/kevincao868-netizen/ECO）：
# 在项目根目录执行
git init
git add .
git commit -m "Initial commit"
git branch -M main
# 使用 SSH:
git remote add origin git@github.com:kevincao868-netizen/ECO.git
git push -u origin main

或者使用 HTTPS:
git remote add origin https://github.com/kevincao868-netizen/ECO.git
git push -u origin main

安全提醒（请务必执行）
- 在提交前检查是否包含敏感文件（.env、私钥等）；如果有请先移除并加入 .gitignore。
- 若误提交敏感信息，使用 BFG 或 git filter-repo 清理历史并立刻旋转密钥。

后续建议
- 我可以基于这个骨架继续添加：KYC stub、TRC20 钱包监听 stub、自动对账 worker、管理端页面等。告诉我你希望我先补哪一部分，我会把对应代码生成给你。
```
