![Banner Loro](https://www.loroinsurance.com/assets/icons/logo-light-green.svg)

## Es un reposito de muestra como se puede trabajar con Cypress.

1º Clonar Repositorio
```
git clone https://github.com/CarlitosElCharly/charlyLoro.git
```
2º Instalar dependencias:
```
npm ci
```
3º Configurar y Ejecutar Cypress
```
npm test
```

## Para generar reportes usaremos Mochawesome Report

Para esto debemos correr el test en modo headless
```
npm run file <testPath>
```
Este reporte aparecerá en la carpeta ./reports/ podrá verlo
en el archivo index.html