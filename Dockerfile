FROM node:16.3-alpine  AS base
ENV NODE_ENV=production
RUN yarn global add @quasar/cli
WORKDIR /usr/src/app
EXPOSE 3000

# Install dependencies and build project
FROM base AS build
WORKDIR /build
COPY package.json yarn.lock* ./
RUN yarn
COPY . .
RUN quasar build -m pwa

# Copy dist files to final image
FROM base AS final
COPY --from=build /build/dist/pwa .
ENTRYPOINT ["quasar"]
CMD [ "serve" ]


FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=build /build/dist/pwa .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
