# 1. Wybierz obraz bazowy z Node.js
FROM node:20-alpine

# 2. Ustaw katalog roboczy w kontenerze
WORKDIR /app

# 3. Skopiuj package.json i package-lock.json (lub yarn.lock) do kontenera
COPY package*.json ./

# 4. Zainstaluj zależności
RUN npm install

# 5. Skopiuj wszystkie pliki aplikacji do kontenera
COPY . .

# 6. Zainstaluj Angular CLI
RUN npm install -g @angular/cli

# 7. Otwórz port 4200 (domyślny port Angulara)
EXPOSE 4200

# 8. Uruchom aplikację w trybie deweloperskim
CMD ["ng", "serve", "--host", "0.0.0.0"]
