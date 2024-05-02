From node:latest
workdir /usr/src/app
copy package*.json ./
run start npm
copy . .
expose 3000
cmd ["node","server.js"]

