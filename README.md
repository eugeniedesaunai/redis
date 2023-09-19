# Express Boilerplate

---

### Boileplate redis et express

Point de départ d'un app express avec redis et express, contient quelques tests

### Installation et démarrage

-   `npm run docker:build:up`
-   Dans un autre terminal : `npm run docker:test` si c'est vert, c'est bon, si c'est rouge, faites une PR :-D

-   Si les conteneurs on déjà été buildé : `npm run docker:up`

L'application sur le port 3001, `redisinsight` sur le port 8001, se connecter à `redisinsight` avec :

```bash
host: redisserver
port: 6379
name: default # ce qu'on veut en fait
```

---

```bash
.
├── app
│   ├── controllers
│   │   └── appController.js
│   ├── database
│   │   └── connexion
│   │       └── index.js
│   ├── models
│   │   └── index.js
│   └── routers
│       └── index.js
├── app.js
├── docker-compose.yml
├── docker-conf
│   ├── adminer
│   │   ├── adminer.css
│   │   └── adminer.dockerfile
│   └── postgresql
│       └── schema.sql
├── handlers
│   └── errorHandlers.js
├── index.js
├── package.json
├── package-lock.json
├── README.md
├── redisData
└── tests
    ├── 01-start.test.js
    └── 02-database.test.js
```
