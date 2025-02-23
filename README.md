# FamForm Frontend

## Opis aplikacji

FamForm to aplikacja do zarządzania formularzami rodzinnymi. Umożliwia tworzenie, edytowanie i przeglądanie formularzy, które mogą być używane do różnych celów rodzinnych.

## Technologie użyte

## Front

- **Angular**
- **RxJS**
- **Angular Material**

## Backend

- **Docker**
- **NEST**
- **TypeORM**

## Jak uruchomić aplikację

1. Sklonuj repozytorium:

```bash
git clone https://github.com/DanielOpic/famform
```

## Front

2. Przejdź do katalogu projektu:

```bash
cd famform/frontend
```

3. Zainstaluj zależności:

```bash
npm install
```

4. Ustaw dane zgodnie z opisem w pliku w

```bash
\frontend\src\environments\environment.ts
```

5. Uruchom aplikację:

```bash
ng serve
```

Aplikacja będzie dostępna pod adresem

```bash
http://localhost:4200
```

**UWAGA**
Przed wypuszczeniem na produkcję - najpierw zerknij na \frontend\src\environments\environment.prod.ts i postępuj zgodnie z opisem w pliku

## Back

# Uruchamianie aplikacji z Dockerem

2. **Zainstaluj Docker**:

   - Pobierz i zainstaluj [Docker Desktop](https://www.docker.com/products/docker-desktop).
   - Po zakończeniu instalacji, uruchom Docker Desktop.

3. **Uruchom kontenery**:

   - Przejdź do katalogu głównego projektu (gdzie znajduje się plik `docker-compose.yml`).
   - Otwórz terminal i uruchom polecenie:
     ```bash
     docker-compose up --build
     ```
   - To polecenie pobierze obrazy, zbuduje aplikację i uruchomi kontenery w trybie tła. Trochę to potrwa. Trochę więcej niż trochę - idź na kawę.

4. **Sprawdź aplikację**:

   - Otwórz przeglądarkę i przejdź na adres:
     ```
     http://localhost:3000
     ```

5. **Przy kolejnych uruchomieniach**:
   - Jeśli chcesz uruchomić projekt ponownie, bez konieczności ponownego budowania kontenerów, użyj:
     ```bash
     docker-compose up
     ```
     Kontenery budujemy ponownie tylko jak zmieniamy docker-compose.yml albo backend/Docker - dobrze jest wcześniej usunać stare możesz to zrobić z poziomu GUI wDocker Desktop (famformdb i famformdb_backend)

Gotowe! Aplikacja powinna działać lokalnie.

**UWAGA**

- Hasło i połaczenia do bazy ustawiasz w \famform\docker-compose.yml oraz w \famform\backend\src\app.module.ts - byle te same i bezpieczniejsze niz przykłądowe
