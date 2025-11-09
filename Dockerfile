# ============================
# Stage 1: Build React app
# ============================
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy only dependency files first (for better caching)
COPY package*.json ./

# Install dependencies (no audit to speed up, no cache)
RUN npm ci --omit=dev --audit=false

# Copy source code
COPY . .

# Build the production-ready React app
RUN npm run build

# ============================
# Stage 2: Serve with Nginx
# ============================
FROM nginx:1.27-alpine

# Update and patch system packages securely
RUN apk upgrade --no-cache && \
    apk add --no-cache libxml2 && \
    rm -rf /var/cache/apk/*

# Copy built app from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy Nginx config (make sure this file exists in same directory)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Set non-root user for better security
USER nginx

# Expose port 80
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
