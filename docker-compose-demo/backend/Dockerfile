FROM node:20

WORKDIR /app

COPY server.js .

RUN npm install express

EXPOSE 4000

CMD ["node", "server.js"]