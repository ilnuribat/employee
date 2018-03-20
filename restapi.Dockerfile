FROM node

WORKDIR /app

RUN npm install -g nodemon

COPY package*.json .env ./

RUN npm install

# COPY src/days/ ./src

CMD ["nodemon",  "src/index.js"]

EXPOSE "${HTTP_PORT_RESTAPI}"