FROM node:latest

RUN mkdir /app

COPY bin /app/bin
COPY public /app/public
COPY routes /app/routes
COPY views /app/views
COPY app.js /app/
COPY package.json /app/

WORKDIR /app

RUN npm install --registry=https://registry.npm.taobao.org

EXPOSE 3000

ENTRYPOINT ["node"]
CMD ["/app/bin/www"]

# docker build -t index.tenxcloud.com/theodore/node_web:0.1.0 .
