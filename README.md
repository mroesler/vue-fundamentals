# vue-fundamentals

VueJs3 fundamentals

Vite - npm create vite@latest
Install a new Vite project

npm install
Install everything after Vite has been initialized

npm run [dev|build|preview]
Start Vite in [a server|build mode|preview application]

ESLINT
npm install -g eslint
OR
npm install -D eslint (in project folder)
THEN
npm i -D typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin

Create .eslintrc file in the root of your project and paste this code inside:

{
"parser": "@typescript-eslint/parser",
"plugins": ["@typescript-eslint"],
"rules": {
"semi": ["error", "never"],
"quotes": [2, "single"]
}
}
