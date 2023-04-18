# Stage 1: build
FROM node:16 AS development

WORKDIR /app

COPY package*.json ./

RUN npm install -g @angular/cli@15.2.0 && \
    npm install

COPY . .

RUN ng build

EXPOSE 4200
