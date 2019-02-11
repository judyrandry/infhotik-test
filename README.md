# InfhotikTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:3000/` view the front. And Navigate to `http://localhost:3000/api/`

## Initialize data, run:
 `curl -i -X POST -H "Content-Type: application/json" -d '{ "name":"banane","grocer": "Didin J.","description":"La banane est le fruit ou baie du bananier", "stock": 10 }' localhost:3000/api`
 
 `curl -i -X POST -H "Content-Type: application/json" -d '{ "name":"pomme","grocer": "Didin J.","description":"La pomme est un fruit assez dur", "stock": 15 }' localhost:3000/api`
 
 `curl -i -X POST -H "Content-Type: application/json" -d '{ "name":"fraise","grocer": "Didin J.","description":"Le fraise est un fruit comestible � p�pins", "stock": 15 }' localhost:3000/api`
 
 `curl -i -X POST -H "Content-Type: application/json" -d '{ "name":"poire","grocer": "Didin J.","description":"Le poire est un fruit assez dure", "stock": 65 }' localhost:3000/api`
 
 `curl -i -X POST -H "Content-Type: application/json" -d '{ "name":"orange","grocer": "Didin J.","description":"L orange est un fruit riche en vitamine C", "stock": 65 }' localhost:3000/api`

## Steps to launch the application locally

Install node from  [Node](https://nodejs.org/en/)
Install angular-cli run `npm install -g @angular/cli`
Install mongoDB from [MongoDB](https://www.mongodb.com/)

Run `git clone https://github.com/judyrandry/infhotik-test.git`

Run `cd infhotik-test`
Run `npm i`
Run `npm start` and open `http://localhost:3000` to navigate with the application or http://localhost:3000/api/ to navigate the API restFull.
