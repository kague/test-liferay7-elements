# AngularTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.2.

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
Regler le problème de vulnérabilite dans le fichier package-lock.json. Supression des anciennes version de "braces" et installation de la dernière version + maj des références de version :
```
npm install --save braces
```

# Utilisation 
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
