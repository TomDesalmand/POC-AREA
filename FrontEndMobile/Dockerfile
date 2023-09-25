FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV METRO_HOST=0.0.0.0

CMD ["npm","start"]
