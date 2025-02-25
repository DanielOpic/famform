# Wybieramy oficjalny obraz Node.js
FROM node:20-alpine

# Tworzymy katalog roboczy w kontenerze
WORKDIR /usr/src/app

# Kopiujemy package.json i package-lock.json (jeśli istnieje)
COPY package*.json ./

# Instalujemy zależności
RUN npm install --production

# Kopiujemy resztę plików aplikacji do kontenera
COPY . .

# Kompilujemy aplikację NestJS
RUN npm run build

# Otwieramy port 3000
EXPOSE 3000

# Komenda do uruchomienia aplikacji
CMD ["npm", "run", "start:dev"]

LABEL maintainer="Daniel Opic <danielopic@gmail.com>"
LABEL version="1.0"
LABEL description="Aplikacja famform - frontend"