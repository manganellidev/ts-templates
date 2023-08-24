FROM node:lts-alpine as dev
WORKDIR /code
COPY . .
RUN npm pkg delete scripts.prepare
RUN npm install
RUN npm run build

FROM node:lts-alpine as prod
WORKDIR /code
COPY --from=dev /code/dist ./dist
COPY package*.json ./
RUN npm pkg delete scripts.prepare
RUN npm ci --omit=dev

CMD [ "node", "dist/index.js" ]
