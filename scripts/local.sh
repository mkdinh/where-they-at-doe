if [ "$(docker ps -q -f name=nsa.local.me)" ]; then
  docker kill nsa.local.me
fi

docker run \
    --rm \
    -d \
    -p 3000:80 \
    -e NODE_ENV=prod \
    --name nsa.local.me \
    nsa/web