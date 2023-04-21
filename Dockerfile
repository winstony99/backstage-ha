FROM node:15.11-alpine

WORKDIR /usr/src/app
COPY . . 
RUN npm install

EXPOSE 8080
CMD [ "node", "index.js" ]
