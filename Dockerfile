FROM node:4-onbuild

COPY package.json /src/package.json

WORKDIR /src

EXPOSE 8000

CMD ["npm", "start"]
