FROM node:16.15-alpine
WORKDIR /social-network-app

COPY package.json .
COPY yarn.lock .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]