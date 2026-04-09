
# Stage 1 — Build
# We use a full Node image to install dependencies and compile the Next.js app
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
