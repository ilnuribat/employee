FROM node

WORKDIR /app

RUN npm install -g nodemon

COPY package*.json ./

RUN npm install

COPY .env .

CMD [ "bash", "-c", "cd src/employees && npx knex migrate:latest && nodemon index.js"]

EXPOSE "${HTTP_PORT_DAYS}"