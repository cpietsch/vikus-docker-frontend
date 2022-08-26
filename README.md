# vikus-docker-frontend
VIKUS Docker instance builder FRONTEND

This is a simple frontend for the vikus-docker. It is used to create a VIKUS Viewer instance using the REST Api of vikus-docker.

## How to use the frontend
1. Input a IIIF collection V3 URL in the input field
2. Click the "Create" button
3. Now you can change the settings of the VIKUS Viewer instance or just use the default settings by clicking the "Generate Instance" button

## vikus-docker backend
https://github.com/cpietsch/vikus-docker


## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

## Deploy to gh-pages branch

To create a production version of your app and push it to gh-pages branch (which is used by vikus-docker):

```bash
npm run deploy
```
