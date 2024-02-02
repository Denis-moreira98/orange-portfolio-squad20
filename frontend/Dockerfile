FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run dev build
CMD [ "npm", "run", "preview", "--", "--port", "9090", "--host", "0.0.0.0" ]