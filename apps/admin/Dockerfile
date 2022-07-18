FROM node:14-alpine
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
ENV PORT 3000

ENV PGOPTIONS "-c search_path=auth"

WORKDIR /app
COPY ./dist/apps/admin .

RUN npm install --production

HEALTHCHECK --interval=60s --timeout=2s --retries=3 CMD wget localhost:${PORT}/healthz -q -O - > /dev/null 2>&1

EXPOSE $PORT
CMD ["node", "./main.js"]
