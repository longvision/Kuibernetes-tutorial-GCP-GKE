FROM node:7
COPY student_info.js /student_info.js
EXPOSE 8080
ENTRYPOINT [ "node", "student_info.js" ]