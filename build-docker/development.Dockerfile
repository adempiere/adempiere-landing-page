FROM nginx:1.23.3

LABEL	maintainer="EdwinBetanc0urt@outlook.com; ElsioSanchez15@outlook.com; ySenih@erpya.com;" \
	description="A community page VuePress with Hope theme"


COPY build-docker/start.sh .
COPY dist/ /usr/share/nginx/html/


RUN chmod +x *.sh


ENTRYPOINT ["sh" , "start.sh"]
