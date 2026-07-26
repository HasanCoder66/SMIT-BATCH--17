FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install --omit=dev

USER node

CMD [ "npm", "start" ]

EXPOSE 5500