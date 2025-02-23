# FamForm Frontend

## Opis aplikacji

FamForm to aplikacja do zarządzania formularzami rodzinnymi. Umożliwia tworzenie, edytowanie i przeglądanie formularzy, które mogą być używane do różnych celów rodzinnych.

## Technologie użyte

- **Docker**

## Front

- **Angular**
- **RxJS**
- **Angular Material**

## Backend

- **NEST**
- **TypeORM**

## DB

- **Postgre**

## Jak uruchomić aplikację

1. Sklonuj repozytorium:

```bash
git clone https://github.com/DanielOpic/famform
```

2. **Zainstaluj Docker - jak masz to pomiń krok**:

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
     http://localhost:3000 - back
     ```

     oraz

     ```bash
     http://localhost:4200 - front
     ```

5. **Przy kolejnych uruchomieniach**:
   - Jeśli chcesz uruchomić projekt ponownie, bez konieczności ponownego budowania kontenerów, użyj:
     ```bash
     docker-compose up
     ```
     Kontenery budujemy ponownie tylko jak zmieniamy docker-compose.yml albo backend/Docker - dobrze jest wcześniej usunać stare możesz to zrobić z poziomu GUI wDocker Desktop (famformdb i famformdb_backend i famformdb_frontend)

Gotowe! Aplikacja powinna działać lokalnie.

**UWAGA**
Przed wypuszczeniem na produkcję

- najpierw zerknij na

  ```bash
  \frontend\src\environments\environment.prod.ts
  ```

  i postępuj zgodnie z opisem w pliku

- hasło i połaczenia do bazy ustawiasz w
  ```bash
  \famform\backend\src\app.module.ts
  ```

i lokalnie musi się zgadzać z

```bash
\famform\docker-compose.yml
```

byle na produkcji je zmienić na bezpieczne
