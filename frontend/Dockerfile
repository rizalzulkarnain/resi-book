FROM node:14.16.0-alpine3.13

RUN addgroup app && adduser -S -G app app
RUN mkdir /app && chown app:app /app

USER app
WORKDIR /app
RUN mkdir data
COPY package*.json ./
COPY .env ./
RUN npm install
COPY . .

EXPOSE 3000
CMD ["npm", "start"]
