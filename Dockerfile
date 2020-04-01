# Build source files
FROM node:dubnium-alpine3.11 as builder

WORKDIR /mnt/app

COPY package.json /mnt/app
COPY yarn.lock /mnt/app

# Get deps
RUN yarn

COPY ./ /mnt/app

RUN yarn build

# Nginx
FROM nginx:1.17.9-alpine

COPY --from=builder /mnt/app/dist /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
