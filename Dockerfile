# Production Multi-Stage Optimized Dockerfile for Express App
# Course: DevOps with Docker (Fall 2026) - University of Helsinki
# Author: Sergio Andrés Ipuz Saavedra (@Sais-gallego)

FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Install dependencies separately to leverage Docker layer caching
COPY package*.json ./

RUN npm ci --only=production || npm install --only=production

# Copy application source code
COPY . .

# Security: Run as non-root user built into node alpine image
USER node

# Expose container application port
EXPOSE 8080

# Define start command
CMD ["node", "index.js"]
