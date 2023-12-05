## Use Node Slim image
FROM node:16

## Copy source code
COPY . .

## Start the application
CMD ["node", "dist/simple-ssr/server/main.js"]
