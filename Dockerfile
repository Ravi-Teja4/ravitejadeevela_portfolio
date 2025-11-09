# Stage 1: Build React app
FROM node:18.18.1-alpine3.22 AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci --audit=false

COPY . .
RUN npm run build

# Stage 2: Serve with Nginx (minimal, secure)
FROM nginx:1.26-alpine

RUN apk update && apk upgrade && rm -rf /var/cache/apk/*

COPY --from=build /app/dist /usr/share/nginx/html

# Optional: React routing fix
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
