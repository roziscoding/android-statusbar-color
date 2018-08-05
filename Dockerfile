FROM node:10.4-alpine AS deps-express

COPY package-lock.json \
     package.json \
     /tmp/app/
RUN cd /tmp/app \
    && npm install --only prod

################################################################################

FROM node:10.4-alpine AS builder-vue

COPY package-lock.json \
     package.json \
     /tmp/app/
RUN cd /tmp/app \
    && rm -rf node_modules \
    && npm install

COPY .babelrc \
     index.ejs \
     poi.config.js \
     /tmp/app/
COPY ./src/ /tmp/app/src/
RUN cd /tmp/app \
    && npm run build

################################################################################

FROM node:10.4-alpine

ENV NODE_ENV production

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json /usr/src/app/
COPY ./bin/ /usr/src/app/bin/
COPY --from=builder-vue /tmp/app/dist/ /usr/src/app/dist/
COPY --from=deps-express /tmp/app/node_modules/ /usr/src/app/node_modules/

EXPOSE 80

CMD [ "npm", "start" ]
