FROM node:14-alpine

WORKDIR /usr/src/app

# Installing dependencies
COPY package.json package-lock.json ./
RUN npm i

# Copying source files
COPY . .

EXPOSE 80

ENV NODE_ENV=production
# Building app
RUN npm run build

# Running the app
CMD ["node", "./node_modules/.bin/next", "start", "-p", "80", "-H", "0.0.0.0"]
