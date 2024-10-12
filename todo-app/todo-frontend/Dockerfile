########## build stage ##########
FROM node:20 AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

# Not really sure how necessary this is, as I set an environment variable in the npm script itself...
ENV VITE_BACKEND_URL=http://localhost:3000
RUN npm run build

########## test stage ##########
FROM node:20 AS test-stage

WORKDIR /usr/src/app

COPY --from=build-stage /usr/src/app /usr/src/app/

RUN npm run test

########## image stage ##########
FROM nginx:1.27-alpine

# NB: can't copy from build-stage, since then the test stage would be skipped
COPY --from=test-stage /usr/src/app/dist /usr/share/nginx/html

# build this as an image:
# docker build -t todo-frontend-image .

# run this image:
# docker run -p 5001:80 --name todo-frontend-container todo-frontend-image