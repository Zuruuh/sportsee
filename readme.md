# Sportsee

## Requirements

- Node ^18
- Docker (optionnal but recommended)
- PNPM ^7

## Installation

```bash
pnpm install
cp vite.config.dist.ts vite.config.ts
```

## API Server

If docker is installed on your machine, then you can simply use the `server:start` npm script to start your server

```bash
pnpm run server:start # Server will be running on port 3000
pnpm run server:stop # Will stop & remove the docker container
```

Else, you will need to install & start the api manually, check the repository's README at https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard

## Component Explorer

This project uses [ladle](https://ladle.dev) as a component browser & explorer. To access ther web UI, run the following command, and go to `locahost:61000`

```bash
pnpm run ladle
```
