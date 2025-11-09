# Stage 1: Build React app
FROM node:18.18.1-alpine3.22 AS build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --audit=false  # avoid unnecessary audit warnings in build stage

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve with Nginx (minimal, secure)
FROM nginx:1.26.1-alpine3.22

# Update Alpine packages
RUN apk update && apk upgrade && \
    rm -rf /var/cache/apk/*

# Copy built React app
COPY --from=build /app/dist /usr/share/nginx/html

# Optional: React routing fix
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
