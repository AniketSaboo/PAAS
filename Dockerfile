From node:latest
workdir /usr/src/app
copy package*.json ./

copy . .
run npm start
cmd ["node","server.js"]
expose 3000


  
