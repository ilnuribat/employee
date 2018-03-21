FROM node

WORKDIR /app

RUN npm install -g nodemon

COPY package*.json ./

RUN npm install

COPY .env .

CMD ["nodemon",  "src/index.js"]

EXPOSE "${HTTP_PORT_DAYS}"