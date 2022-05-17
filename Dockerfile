FROM node:16

#set work directory
WORKDIR /app

# install app dependencies
COPY package.json ./

COPY package-lock.json ./

RUN npm install --silent

# copy app files
COPY . .

EXPOSE 3000

# start app
CMD ["npm", "start"]