ARG NODE_ENV=development

# get dependencies
FROM node:16.13.1-alpine AS base
ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV
WORKDIR /app
COPY frontend/package.json .
COPY frontend/yarn.lock .
RUN yarn

# get code and dependencies
FROM node:16.13.1-alpine AS prebuild
WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY frontend .

# build distribution for production
FROM node:16.13.1-alpine AS build
ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV
WORKDIR /app
COPY --from=prebuild /app .
RUN yarn build

# get all needed parts for production image
FROM node:16.13.1-alpine as production
ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV
WORKDIR /app
COPY --from=prebuild /app/ ./
COPY --from=build /app/build ./build

CMD [ "yarn", "start" ]
