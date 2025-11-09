# Stage 1: Build React app
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci --audit=false

COPY . .
RUN npm run build

# Stage 2: Serve with Nginx (minimal, secure)
FROM nginx:stable-alpine

RUN apk update && apk upgrade --no-cache && rm -rf /var/cache/apk/*

COPY --from=build /app/dist /usr/share/nginx/html

# React routing fix
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
