# AngularTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.2.

[![Coverage Status](https://coveralls.io/repos/github/kague/angular-test/badge.svg?branch=master)](https://coveralls.io/github/kague/angular-test?branch=master)
[![Build Status](https://travis-ci.org/kague/angular-test.svg?branch=master)](https://travis-ci.org/kague/angular-test)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9938dca984ed476181573da962240348)](https://www.codacy.com/app/kague/angular-test?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=kague/angular-test&amp;utm_campaign=Badge_Grade)
[![Known Vulnerabilities](https://snyk.io/test/github/kague/angular-test/badge.svg?targetFile=package.json)](https://snyk.io/test/github/kague/angular-test?targetFile=package.json)

Projet Test de la brique Angular du MEAN, avec les outils d'intégrations continue avec deploiement sous GitHub Page via travis CI.


# Installation des outils
## Visual studio code
Installation via le site web. Ajout des extensions :
- Angular essentials

## (option) nvm : Node Version Manager 
Installation
```
sudo apt-get update
sudo apt-get install build-essential
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash

//Visualiser la liste des versions disponibles
nvm ls-remote
//Installation de la dernière version LTS
nvm install 10.15.1
//Verifier la version
nvm current
```

## npm
```
npm -v
6.4.1
```

## nodeJs
Installation via le site web.
version attendue :
```
node -v
v10.15.1
```

## AngularCLI
Installation via npm
```
npm i -g @angular/cli
```
Attendue
```
ng version
7.3.2
```

# Creation du projet
Dans le dossier Parent au projet
```
ng new [nom-application]
```
=> génère le fichier README.md avec toutes les infos pour gerer l'application angular.

fix des problème de version/securite aprs la generation du projet.
```
npm audit fix --force
```
Installation de la dernière version "braces":
```
npm install --save braces
```
Regler le problème de vulnérabilite dans le fichier package-lock.json. 
Supression des anciennes version de "braces" faisant partie de la partie "dependancy" de certains packages.

Installation de angular material 
```
npm i --save @angular/material @angular/cdk hammerjs material-design-icons @angular/flex-layout
```

Ajout de la bibliotheque de test in-memory des appels http
```
npm i --save angular-in-memory-web-api
```


# Utilisation 
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
Creation des composants dans des sous dossier : `ng g c path/component-name`, avec un "path" d'une profondeur étendue.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Outils dependants :

## Travis CI
[![Build Status](https://travis-ci.org/kague/angular-test.svg?branch=master)](https://travis-ci.org/kague/angular-test)

- Travis: https://travis-ci.org/ 
- Angular CI : https://github.com/angular/angular-cli/wiki/stories-continuous-integration

## Couverture de code
[![Coverage Status](https://coveralls.io/repos/github/kague/angular-test/badge.svg?branch=master)](https://coveralls.io/github/kague/angular-test?branch=master)

- Coveralls: https://coveralls.io 

- NPM Coveralls: https://www.npmjs.com/package/coveralls
```
npm install nodeunit jscoverage coveralls --save-dev
```

## Codacy
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9938dca984ed476181573da962240348)](https://www.codacy.com/app/kague/angular-test?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=kague/angular-test&amp;utm_campaign=Badge_Grade)

 Codacy: https://www.codacy.com

## Snyx
[![Known Vulnerabilities](https://snyk.io/test/github/kague/angular-test/badge.svg?targetFile=package.json)](https://snyk.io/test/github/kague/angular-test?targetFile=package.json)

Snyk: https://snyk.io

## Github Page
Page Public du projet.
Voir la page : http://kague.github.io/angular-test

## FireBase
Backend du projet
Site : http://firebase.google.com
```
npm i --save firebase
```

## Plugins Chrome
Augury : Debuggage spécifique Chrome.
