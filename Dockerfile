FROM node:14.17-alpine
LABEL maintainer 'kdpsc'

WORKDIR /usr/src/app

COPY . ./

RUN npm install --save-dev supertest tape
RUN npm install --save express prom-client morgan

CMD ["npm", "start"]

EXPOSE 3100
