# 1. Build source files
FROM node:dubnium-alpine3.11 as builder

WORKDIR /mnt/app

COPY package.json /mnt/app
COPY yarn.lock /mnt/app

RUN yarn

COPY ./ /mnt/app

RUN yarn build

# 2. Nginx
FROM yugisu/nginx-certbot

COPY --from=builder /mnt/app/dist /var/www/html

EXPOSE 80 443
