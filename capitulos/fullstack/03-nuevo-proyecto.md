## Proyecto JS Vanilla

```bash
mkdir mi-proyecto
cd mi-proyecto
npm init -y
npm install nodemon -D
# crear script en package.json
# "dev": "nodemon index.js"
# crear archivo index.js
npm run dev
```

## Proyecto de Framework Angular

Para las aplicaciones de angular requiero primero instalar angular cli `@angular/cli`
Este paquete en particular utiliza un @ para indicar que es un paquete de la organización angular y no un paquete de terceros.

```bash
npm install -g @angular/cli
npx ng new my-app
```

## Proyecto de Vite

**Vite** es una herramienta de compilación que tiene como objetivo proporcionar una experiencia de desarrollo más rápida y ágil para proyectos web modernos. Ya posee varias plantillas para proyectos de diferentes frameworks y librerías (Vanilla, Vue, React, Preact, Svelte, Lit, Solid, etc)
Para las aplicaciones de svelte, react, vue y vite requiero primero instalar el paquete `vite`

```bash
npm create vite@latest
# seguir los pasos

cd mi-proyecto
npm install
npm run dev
```
