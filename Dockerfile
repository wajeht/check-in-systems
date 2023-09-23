FROM nginx:alpine

RUN apk --no-cache add curl

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY ./* ./

COPY nginx.conf /etc/nginx/nginx.conf

HEALTHCHECK CMD curl -f http://localhost/ || exit 1

ENTRYPOINT ["nginx", "-g", "daemon off;"]
