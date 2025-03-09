# 第一阶段：使用Node.js构建应用
FROM node:20-alpine AS builder
WORKDIR /app
COPY ./package.json ./package-lock.json* ./
RUN npm install --registry=https://registry.npmmirror.com

COPY . .
RUN npm run build


# Check files again
RUN ls -a

# 第二阶段：生产环境运行
FROM node:20-alpine
WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# 精简版PM2安装
RUN npm install pm2 -g

EXPOSE 3000

CMD ["pm2-runtime", "server.js"]
