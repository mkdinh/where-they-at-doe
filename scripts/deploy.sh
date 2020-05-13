sh ./build.sh

heroku tag nsa/web registry.heroku.com/ip-tracker/web

docker push registry.heroku.com/ip-track/web

heroku release:web

heroku open