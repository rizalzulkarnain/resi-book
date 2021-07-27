FROM node:14.16.0-alpine3.13

RUN addgroup app && adduser -S -G app app
RUN mkdir /app && chown app:app /app
USER app

WORKDIR /app
COPY package*.json ./
COPY .env ./
COPY ./prisma ./prisma
RUN npm install
COPY . . 

EXPOSE 5000

CMD ["npm", "start"]

