FROM node:22

WORKDIR /app

COPY . .

RUN npm install @reduxjs/toolkit@2.2.7 @types/node@20.14.11 @types/react-dom@18.3.0 \
@types/react@18.3.3 autoprefixer@10.4.19 eslint-config-next@14.2.5 eslint@8.57.0 \
lucide-react@0.416.0 next@14.2.6 postcss@8.4.40 react-dom@18.3.1 react-redux@9.1.2 \
react@18.3.1 tailwindcss@3.4.6 typescript@5.5.3

EXPOSE 8080

CMD ["npm", "run", "start"]