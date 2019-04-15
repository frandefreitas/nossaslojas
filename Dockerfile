FROM node:10
LABEL maintainer="franciscodefreitas90@gmail.com"

COPY certificados/CompassoFW.pem /usr/CompassoFW.pem
ENV NODE_EXTRA_CA_CERTS=/usr/CompassoFW.pem

COPY . /app
WORKDIR /app

EXPOSE 3000
RUN [ "npm","install" ]
ENTRYPOINT [ "npm","start" ]