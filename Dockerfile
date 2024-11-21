# stage 1
FROM node:18.19.0 AS build-stage

RUN mkdir /usr/app
COPY . /usr/app
WORKDIR /usr/app

RUN yarn

ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN npm run build

# stage 2
FROM nginx:alpine

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build-stage /usr/app/dist .

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]