FROM node:18-alpine3.17

RUN npm i -g npm@latest pnpm@8.1.0 && \
    apk add git openssh ca-certificates
