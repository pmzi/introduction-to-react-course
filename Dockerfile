FROM node:16-alpine as builder

WORKDIR /src

RUN npm i -g pnpm

COPY ./package.json ./pnpm-lock.yaml ./

RUN pnpm i --frozen-lockfile

COPY . .

RUN pnpm run build

FROM nginx:1-alpine

COPY --from=builder /src/.vitepress/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]