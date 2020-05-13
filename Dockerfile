FROM mhart/alpine-node:10 AS builder

WORKDIR /client

ENV SKIP_PREFLIGHT_CHECK=true

RUN apk add git

RUN git clone https:$GITHUB_ACCESS_TOKEN//@github.com/mkdinh/nsa-web.git ./

RUN yarn install

RUN yarn build

FROM mhart/alpine-node:10

RUN mkdir /app && mkdir /app/client

COPY --from=builder /client/build ./client

COPY . .

RUN yarn install

EXPOSE 80

CMD ["yarn", "start"]