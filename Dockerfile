# Stage 1: Build React app
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files first for caching
COPY package*.json ./

# Install dependencies
RUN npm ci --audit=false

# Copy rest of the source code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve with Nginx (minimal, secure)
FROM nginx:stable-alpine

# Copy built React app
COPY --from=build /app/dist /usr/share/nginx/html

# Optional: React routing fix (uncomment if you have a file)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
