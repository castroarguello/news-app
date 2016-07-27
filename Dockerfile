FROM node:4-onbuild

COPY package.json /src/package.json

WORKDIR /src

CMD ["npm", "start"]
