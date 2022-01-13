<h3 align="center">API ES6</h3> 
<p align="center">
  <a href="#">
    <img src="https://nodejs.org/static/images/logo.svg" alt="cat developer" width=350 height=250>
  </a>

  <p align="center">
    This is a dev repo using a typeORM with node.js
    <br>
    <a href="https://github.com/llanesleonardo/wastemgmt/issues">Report bug</a>
    ·
    <a href="https://github.com/llanesleonardo/wastemgmt/pulls">Request feature</a>
    <br>
    Author 
    <br>
    <a href="https://github.com/llanesleonardo">Leonardo LLanes</a>
      <p align="center">
        <a href="https://github.com/llanesleonardo">
          <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />    
        </a>
        <a href="https://gitlab.com/llanesleonardo">
          <img src="https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white" />    
        </a>
        <a href="https://www.linkedin.com/in/leonardo-llanes-86184272/">
          <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />    
        </a>
        <a href="https://llanesleonardo@gmail.com">
          <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />    
        </a>
    </p>
  </p>
</p>

## Table of Contents

1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Dependecies](#dependencies)
5. [Refs](#refs)
6. [Bugs and feature requests](#bugs-and-feature-requests)
7. [Refs](#refs)
8. [Legal](#legal)
9. [Thanks](#thanks)

### General Info

---

### Project Structure :

```text
public/
├── uploads/
├── index.js
src/
├── config/
│   └── env.js
│   └── connTypeORM.js
├── errors/
│   └── errors.js
├── controllers/
│   └── oportunities.controller.js
├── models/
│   └── oportunities.model.js
├── services/
│   └── oportunities.service.js
├── helpers/
│   └── oportunities.helper.js
├── validations/
│   └── oportunities.validations.js
├── middleware/
│   └── oportunities.middleware.js
├── routes/
│   └── oportunities.routes.js
├── tests/
│   └── oportunities.test.js
└── index.js
└── app.js
└── router.js
└── .babelrc
└── .prettierrc
└── Dockerfile.dev
└── ormconfig.json
```

## Technologies

---

A list of technologies used within the project:

 <p align="">  
    <img src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /> 
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white" /> 
    <img src="	https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/> 
    <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"/>
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/> 
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
    <img src="	https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white" /> 
    <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" /> 
    <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" />
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
    <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" />
    <img src="https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white" />
    <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" />
    <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" />
  </p>

## Installation

---

### Create your .env file :

```
MYSQL_HOST=localhost
MYSQL_DB_NAME=dbName
MYSQL_DB_USER=userName
MYSQL_DB_PASSWORD=pass
SECRET=secret
PORT=3005
```

### Run the Application in development mode :

```bash
$ git clonehttps://github.com/llanesleonardo/wastemgmt.git
$ cd ../path/to/the/file
$ npm
$ npm start
```

Run the aplication in debug mode in [Visual Studio Code](https://code.visualstudio.com/) :

### Create your Visual Studio Code config file .vscode/launch.json

```JSON
{
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach",
      "restart": true,
      "port": 9229
    },
    {
      "type": "node",
      "request": "launch",
      "protocol": "inspector",
      "name": "ES6 Debugger",
      "program": "${workspaceFolder}/src/server.js",
      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/babel-node",
      "runtimeArgs": ["--nolazy"],
      "env": {
        "BABEL_ENV": "debug"
      },
      "resolveSourceMapLocations": [
        "${workspaceFolder}/**",
        "!**/node_modules/**"
      ]
    }
  ]
}

```

## Dependencies :

---

### Integrating Prettier and ESLint With VS Code

Make sure you gave installed the eslint and prettier extensions for vsCode

See : https://enlear.academy/integrating-prettier-and-eslint-with-vs-code-1d2f6fb53bc9

```bash
$ yarn add eslint eslint-config-prettier eslint-plugin-prettier prettier -D
```

### Create your .eslintrc file :

```json
{
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "plugins": [],
  "extends": [],
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "no-debugger": "warn",
    "no-console": "warn",
    "no-eval": "error",
    "import/first": "off",
    "import/no-named-as-default": "off",
    "import/no-unresolved": "off",
    "no-unused-vars": "warn"
  },
  "globals": {
    "fixture": "writable"
  }
}
```

### Create your .prettierrc file :

```json
{
  "bracketSpacing": true,
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "printWidth": 80,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none",
  "useTabs": false,
  "vueIndentScriptAndStyle": false,
  "arrowParens": "avoid"
}
```

### Install nodemoon

See : https://www.npmjs.com/package/nodemon

```bash
$ npm i nodemon -D
```

### Configure Babel for a Nodejs Application

See : https://dev.to/adebayoileri/configure-babel-for-nodejs-application-3798

```bash
$ npm i --save-dev @babel/cli @babel/core

$ npm i --save-dev @babel/polyfill @babel/preset-env @babel/runtime @babel/node @babel/plugin-transform-runtime
```

Create your .babelrc file :

```json
{
  "presets": ["@babel/preset-env"],
  "plugins": [["@babel/transform-runtime"]],
  "env": {
    "debug": {
      "sourceMaps": "inline",
      "retainLines": true
    }
  }
}
```

### Jest

See : https://jestjs.io/docs/getting-started

To use Babel, install required dependencies via yarn:

```bash
$ npm i jest babel-jest -D
```

Based on your project, Jest will ask you a few questions and will create a basic configuration file with a short description for each option:

```bash
$ jest --init
```

### Install dotenv

Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

See : https://www.npmjs.com/package/dotenv

```bash
$ npm i dotenv
```

### Install chalk for logs

See : https://www.npmjs.com/package/chalk

```bash
$ npm i chalk
```

### typeORM

Docs : https://typeorm.io/#/

npm : hhttps://www.npmjs.com/package/typeorm

```bash
$ npm install typeorm --save
$ npm install reflect-metadata --save
$ import reflect-metadata -> app.js
$ npm install @types/node --save-dev
```

Install a typeORM database driver

```bash
MySQL npm install mysql2 --save
MongoDB npm install mongodb@^3.6.0 --save
```

# Refs :

- https://github.com/alejandrogalaz21

# Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/llanesleonardo/wastemgmt/pulls) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/llanesleonardo/wastemgmt/issues).

# [](https://github.com/pranavms13/whatsapp-node-api#legal)📃 Legal

This code is in no way affiliated with, authorized, maintained, sponsored or endorsed or any of its affiliates or subsidiaries. This is an independent and unofficial software. Use at your own risk. **Commercial use of this code/repo is strictly prohibited.**

## Thanks
