FROM node:4.2 as dep
COPY . /src
RUN cd /src && npm install
EXPOSE 4000
CMD ["node", "/src/server.js"]

FROM node:4.2 as base
WORKDIR /src
COPY --from=dep /src/node_modules node_modules
