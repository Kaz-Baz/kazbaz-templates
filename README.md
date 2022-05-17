# telegraf-template

1) npm init
2) npm i --save-dev typescript jest @types/jest @types/node ts-jest ts-node
3) tsc --init -> "sourceMap": true, "resolveJsonModule": true, "outDir": "./dist"
4) npm i --save-dev eslint
5) npx eslint --init
    5.1) "How would you like to use ESLint?" To check syntax, find problems, and enforce code style
    5.2) "What type of modules does your project use?" JavaScript modules (import/export)
    5.3) "Which framework does your project use?" None of these
    5.4) "Does your project use TypeScript?» No / Yes
    5.5) "Where does your code run?" Node
    5.6) "How would you like to define a style for your project?" Use a popular style guide
    5.7) "Which style guide do you want to follow?" Airbnb
    5.8) "What format do you want your config file to be in?" JSON
    5.9) "Would you like to install them now?" Yes
    5.10) "Which package manager do you want to use" npm
6) Create .eslintignore
7) npm i --save-dev prettier
8) Create .prettierrc
9) npm i --save-dev eslint-plugin-prettier eslint-config-prettier
10) npm i --save-dev eslint-import-resolver-typescript tsconfig-paths