FROM node:16.14.0
WORKDIR /app
COPY package.json .


ARG NODE_ENV
RUN if [ "$NODE_ENV" = "production" ]; \
    then npm install --only=production; \
    else npm install; \
    fi

COPY . ./
ENV PORT 3000
EXPOSE $PORT
CMD [ "node", "index.js" ]