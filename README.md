# cypressPrueba


## Requisitos

Es necesario tener instalado:

* [NodeJS](https://nodejs.org/en/download/)

## IDE

En el caso de Cypress se pueden utilizar otros IDE como “IntelliJ”, pero detectamos que cuenta con algunas limitaciones en su uso, por lo que recomendamos utilizar Visual Studio Code:

* [Descargar Visual Studio Code](https://code.visualstudio.com/download)

## Plugins requeridos para el IDE VSCode

* [Cypress Helper](https://marketplace.visualstudio.com/items?itemName=Shelex.vscode-cy-helper)
* [Run Cypress](https://marketplace.visualstudio.com/items?itemName=coreylight.run-cy)
* [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)

Cypress es un framework impulsado por el motor NPM. Solo se requiere ejecitar el
siguiente comando:

```
$ npm install
```

Ahora, realizados todos los pasos anteriores, podemos ejecutar de la siguiente forma:
```
$ npx cypress {Cypress Option} -e TAGS='{Tags}',configFile={Ambiente} {Browser}
```

## REPORTES

Para generar los reportes es necesario tener instalado cucumber-json-formatter en la carpeta /usr/local/bin

* [cucumber-json-formatter](https://github.com/cucumber/json-formatter)
* [multiple-cucumber-html-reporter](https://www.npmjs.com/package/multiple-cucumber-html-reporter)
* [instrucciones] (https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/json-report.md)

para generar el reporte HTML a partir del reporte Json es necesario ejecutar el sigueionete comando

```
$ node cucumber-html-reports.js
$ node cucumber-html-reports2.js --> Themes: ['bootstrap', 'hierarchy', 'foundation', 'simple']
```