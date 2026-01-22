# ECO - 尼日利亚换汇系统（USDT ↔ NGN）

这是一个面向尼日利亚换汇场景的最小可运行骨架（MVP），包含：
- Node.js + Express + TypeScript 后端 API
- Prisma 数据模型（Postgres）
- docker-compose（Postgres + Redis）
- 示例环境变量与基础接口

## 功能概览
- 兑汇行情接口（手动/默认汇率）
- 创建订单（内存示例）
- 订单列表（内存示例）

> 提示：数据库与资金流程逻辑尚未接入，仅为开发起点。你可以逐步替换为真实的 KYC、钱包监听、对账流程等。

## 快速开始

### 1. 启动数据库
需要 Docker：
```bash
docker-compose up -d
```

### 2. 安装依赖
```bash
cd backend
npm install
```

### 3. 配置环境变量
```bash
cp .env.example .env
```

### 4. 启动开发服务器
```bash
npm run dev
```

访问 http://localhost:3000/health 应看到健康检查信息。

## API 示例

### 获取汇率
`GET /rates`

### 创建订单
`POST /orders`
```json
{
  "side": "BUY_USDT",
  "amountUsdt": 100,
  "rateNgn": 1200
}
```

### 订单列表
`GET /orders`

## 数据模型（Prisma）
见 `backend/prisma/schema.prisma`。

## 后续可扩展方向
- KYC 审核与风控策略
- 钱包/银行入金监听（USDT/NGN）
- 自动对账与异步任务队列
- 管理后台与审计日志

## 安全提醒
- 提交前检查是否包含敏感文件（.env、私钥等）。
- 若误提交敏感信息，请立即清理 Git 历史并旋转密钥。
