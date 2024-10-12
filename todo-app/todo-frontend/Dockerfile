FROM node:20 AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV VITE_BACKEND_URL=http://localhost:3000
RUN npm run build

FROM nginx:1.27-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

# build this as an image:
# docker build -t todo-frontend-image .

# run this image:
# docker run -p 5001:80 --name todo-frontend-container todo-frontend-image