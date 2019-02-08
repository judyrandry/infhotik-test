# InfhotikTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:3000/` view the front. And Navigate to `http://localhost:3000/api/`

## Initialize data, run:
 `curl -i -X POST -H "Content-Type: application/json" -d '{ "name":"banane","grocer": "Didin J.","description":"La banane est le fruit ou baie du bananier", "stock": 10 }' localhost:3000/api`
 
 `curl -i -X POST -H "Content-Type: application/json" -d '{ "name":"pomme","grocer": "Didin J.","description":"La pomme est un fruit comestible a pepins", "stock": 15 }' localhost:3000/api`
 
 `curl -i -X POST -H "Content-Type: application/json" -d '{ "name":"fraise","grocer": "Didin J.","description":"Le fraise est un fruit comestible � p�pins", "stock": 15 }' localhost:3000/api`
 
 `curl -i -X POST -H "Content-Type: application/json" -d '{ "name":"poire","grocer": "Didin J.","description":"Le poire est un fruit assez dure", "stock": 65 }' localhost:3000/api`
 
 `curl -i -X POST -H "Content-Type: application/json" -d '{ "name":"orange","grocer": "Didin J.","description":"L orange est un fruit riche en vitamine C", "stock": 65 }' localhost:3000/api`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

