FROM node:20-alpine

WORKDIR /app

EXPOSE 3000

COPY package*.json ./

RUN npm install --silent
COPY . .

RUN npm run build

CMD [ "npm", "run", "dev" ]