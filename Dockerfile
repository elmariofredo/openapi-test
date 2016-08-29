FROM node

EXPOSE 8080

WORKDIR /app/src

ADD . /app/src

RUN npm i

RUN ln -s /app/src/node_modules /app

ENV NODE_ENV /app/node_modules
ENV PATH $PATH:/app/node_modules/.bin

CMD [ "npm", "start" ]
 