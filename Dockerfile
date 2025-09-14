ARG NODE_VERSION=20
# deps exclusively installs dependencies as a separate layer
# This allows us to cache this layer so it only updates when dependencies change, and not when source code or content does
FROM node:${NODE_VERSION}-alpine AS node
FROM alpine:3 as deps
# Copy node deps from the node layer
COPY --from=node /usr/lib /usr/lib
COPY --from=node /usr/local/lib /usr/local/lib
COPY --from=node /usr/local/include /usr/local/include
COPY --from=node /usr/local/bin /usr/local/bin
# We prefer yarn over npm
RUN npm install -g yarn --force
# Install app dependencies
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
# runner runs the app directly
# https://hub.docker.com/r/klakegg/hugo/
FROM klakegg/hugo:alpine as runner
# Copy node deps from the node layer
COPY --from=node /usr/lib /usr/lib
COPY --from=node /usr/local/lib /usr/local/lib
COPY --from=node /usr/local/include /usr/local/include
COPY --from=node /usr/local/bin /usr/local/bin
# Copy app deps
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
# Copy source deps
COPY archetypes/ archetypes/
COPY content/ content/
COPY data/ data/
COPY layouts/ layouts/
COPY migration/ migration/
COPY resources/ resources/
COPY static/ static/
COPY themes/ themes/

COPY config.toml .
COPY package.json .
COPY postcss.config.js .
COPY tailwind.config.js .
COPY yarn.lock .
# Copy the entrypoint script to the root
COPY scripts/entrypoint.sh entrypoint.sh
# Start the server
# The server runs on 1313 by default
EXPOSE 1313
ENV HUGO_ENVIRONMENT=production
ENTRYPOINT ["./entrypoint.sh"]
