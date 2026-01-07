FROM node:18
WORKDIR /usr/src/app
COPY ./code/package*.json ./
RUN npm install
COPY ./code .
EXPOSE 3014
CMD ["npm", "run", "dev"]