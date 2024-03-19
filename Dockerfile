FROM node:20-alpine as builder

WORKDIR /app

COPY package.json yarn.lock tsconfig.json tsconfig.node.json ./
RUN yarn

COPY . .
RUN yarn build

FROM nginx:alpine as production

WORKDIR /app
EXPOSE 80

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
