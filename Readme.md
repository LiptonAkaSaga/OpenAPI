# Aplikacja Czatu z Backendem FastAPI i Frontendem React

## Konfiguracja Backendu

### Instalacja Zależności

Aby zainstalować zależności backendu, wykonaj poniższe polecenie:

```
pip install -r requirements.txt
```

### Konfiguracja Klucza API

Przed uruchomieniem aplikacji, należy skonfigurować klucz API dla OpenAI:

1. Utwórz plik `.env` w głównym katalogu projektu, jeśli jeszcze nie istnieje.
2. Dodaj do pliku `.env` następującą linię, zastępując `twój_klucz_api` swoim rzeczywistym kluczem API OpenAI:

   ```
   OPENAI_API_KEY=twój_klucz_api
   ```

### Uruchamianie Backendu

Aby uruchomić backend, zaleca się użycie następującego polecenia:

```
python app/main.py
```

Ta metoda jest preferowana w stosunku do `uvicorn app.main:app --reload`, ponieważ:

1. Zapewnia, że wszystkie porty są poprawnie skonfigurowane, aby pasowały do oczekiwań frontendu.
2. Zapewnia bardziej spójne środowisko w różnych konfiguracjach.

### Konfiguracja Portów

Domyślnie backend jest skonfigurowany do działania na porcie 8080. Wynika to z faktu, że niektóre systemy mogą mieć procesy blokujące port 8000 (które ja miałem).

Jeśli napotkasz problemy z portem 8000, aplikacja jest wstępnie skonfigurowana do użycia portu 8080. Ta zmiana została uwzględniona zarówno w kodzie backendu, jak i frontendu, aby zapewnić płynną komunikację.

## Uruchamianie Frontendu

Aby uruchomić frontendowy projekt React, wykonaj poniższe kroki:

### Wymagania wstępne

Upewnij się, że masz zainstalowane poniższe narzędzia:

- [Node.js](https://nodejs.org/) (wraz z npm, który jest dołączony do Node.js)

### Krok 1: Zainstaluj zależnośc

Przejdz do folderu frontend

```
 cd .\frontend\
```
W katalogu "frontend" uruchom poniższe polecenie, aby zainstalować wszystkie zależności określone w pliku package.json:

```
 npm install
```

### Krok 2: Uruchom aplikację

Po zainstalowaniu zależności, uruchom aplikację, wykonując poniższe polecenie:

```
 npm start
```

