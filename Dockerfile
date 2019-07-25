FROM node:alpine as builder

WORKDIR '/app'

RUN npm -g update
COPY package.json .
RUN npm install

COPY ./ ./

RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
