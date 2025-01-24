# Hugo Svelte Starter

This is a template for integrating Svelte 5 projects—specifically for data visualization with D3.js—into your Hugo website workflow.

## Get started

Clone the git repository to your local system

```
git clone https://github.com/leichen88/hugo-svelte-starter.git
```

Navigate to the svelte folder in new directory

```
cd hugo-svelte-starter/svelte
```

Install the dependencies inside of `hugo-svelte-starter/svelte` folder.
```
npm i
```

## Run on dev server
Back to the root of `hugo-svelte-starter` folder and start the development server
```
cd ..
npm run dev
```
Navigate to [localhost:1313/bar-chart](http://localhost:1313/bar-chart) to view the example from the template.

## Building

Compile Svelte projects and build Hugo site
```
npm run build
```
Compiled files will automatically be placed in Hugo's `static/js/svelte-builds` folder.
You will also find the website files inside `public/` folder.
