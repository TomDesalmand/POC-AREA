FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["METRO_HOST=0.0.0.0", "npm","start"]
