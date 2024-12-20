# Express Server with Docker Compose

## Setup ENV

```sh
npm i express
npm install --save-dev nodemon
npm install express-async-handler
npm install body-parser
npm install @faker-js/faker --save-dev
npm i express-intercept
npm i bcrypt
npm install dotenv --save
npm i joi
npm i express-rate-limit
npm i jsonwebtoken
npm install mongoose-auto-increment
npm install mongoose-sequence
npm i mongoose
npm i rate-limit-redis
npm i redis
npm i swagger-generator-express
```

```sh
cp .env.example .env
```

## Build Project

```sh
docker compose build
```

## Run Project

```sh
docker compose up -d
```
