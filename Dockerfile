FROM node:alpine
RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN npm i express --registry http://registry.npm.taobao.org
RUN ls

EXPOSE 4000
CMD ["node", "./bin/www"]
