FROM node:20
  
WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD ["npm", "run", "dev", "--", "--host"]

# docker build -t todo-backend-dev-image -f .\dev.Dockerfile .

# docker run --name todo-backend-dev -v "$(pwd)/usr/src/app" todo-backend-dev-image