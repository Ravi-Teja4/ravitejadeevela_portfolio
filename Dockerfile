# Stage 1: Build React app
FROM node:18.18.1-alpine3.22 AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --audit=false

# Copy source and build
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx (minimal and secure)
FROM nginx:stable-alpine

# Update Alpine packages
RUN apk update && apk upgrade --no-cache && rm -rf /var/cache/apk/*

# Copy React build
COPY --from=build /app/dist /usr/share/nginx/html

# React routing fix
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
