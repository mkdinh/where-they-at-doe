sh ./build.sh

docker tag nsa/web registry.heroku.com/ip-tracker/web

docker push registry.heroku.com/ip-track/web

heroku container:release web