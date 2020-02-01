FROM node:10

WORKDIR /frontend

COPY package*.json ./

ARG PORT

ENV PORT ${PORT}

RUN npm install

COPY . .

EXPOSE ${PORT}
CMD ./node_modules/http-server/bin/http-server --port=${PORT} --cors