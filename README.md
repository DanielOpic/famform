# FamForm Frontend

## Opis aplikacji

FamForm to aplikacja do zarządzania formularzami rodzinnymi. Umożliwia tworzenie, edytowanie i przeglądanie formularzy, które mogą być używane do różnych celów rodzinnych.

## Technologie użyte

## Front

- **Angular**

## Backend

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

4. Utwórz plik src/assets/config.json i dodaj tam klucz szyfrujący:

```bash
{
  "encryptionKey": "super_tajny_klucz"
}
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

2. Przejdź do katalogu projektu:

```bash
cd famform/backend
```
