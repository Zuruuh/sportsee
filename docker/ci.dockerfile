FROM node:18-alpine3.17

RUN npm i -g npm@latest pnpm@7.29.3 && \
    apk add git openssh ca-certificates
