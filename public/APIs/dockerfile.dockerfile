FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
RUN yarn install mongoose
RUN yarn install express
RUN yarn install nodemon
CMD ["node", "search.js"]
EXPOSE 3000