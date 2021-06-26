FROM nginx:1.15.8
COPY build /usr/share/nginx/html/zlk
COPY zlk-front.conf /etc/nginx/conf.d