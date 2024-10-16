FROM bitnami/express:latest
  
WORKDIR /usr/src/app

COPY . .

RUN npm ci 

# this image doesn't have a 'node' user
# USER node

CMD npm start

# build this as an image:
# docker build -t todo-backend-image .