FROM node:20 

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD ["npm", "run", "dev", "--", "--host"]

# docker build -t todo-frontend-dev-image -f .\dev.Dockerfile .
