<<<<<<< HEAD
FROM node:18-alpine
=======
FROM node:17-alpine
>>>>>>> b68520bea84d1e0465d75a49f8bc25dabfa9f0fb
WORKDIR /app
COPY . .
RUN yarn install --production
RUN yarn install mongoose
RUN yarn install express
RUN yarn install nodemon
CMD ["node", "search.js"]
EXPOSE 3000