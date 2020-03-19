FROM node:12-alpine

ADD . /app/service

WORKDIR /app/service

RUN npm install --prod

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]
