# Project Using

1. `>> cd app`

2. `>> npm i`

3. `>> npm start`

# JSON Server:
1. >> (cd ..)
2. >> cd app-json-server
3. >> npm i
4. >> npm install -g json-server@0.17.4
(опционально)
5. >> json-server --watch src/data/db.json --port 5005
(db прописана для 3005 порта (поменять можно в ./constants))
6. >> npm start

# Project Setup (already done)

## 1. Initiating

1. `>> npx create-react-app app`

2. `>> cd app`

3. `>> npm start`

## [2. editorconfig](https://editorconfig.org/)

### Create: `./app/.editorconfig` :

```conf
root = true

[*]
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
charset = utf-8
indent_style = tab
indent_size = 2
```

## 3. package.json

### Edit: `./app/package.json` :

```json
"eslintConfig": {
"extends": [
"react-app",
"react-app/jest",

// 1. >> npm i eslint-config-prettier eslint-plugin-prettier prettier
// 2. insert code below

"prettier"
],
"plugins": [
"prettier"
]
},
```

## [4. Prettier](https://prettier.io/docs/en/options)

### Create: `./app/.prettierrc.json` :

```json
{
	"printWidth": 90,
	"tabWidth": 2,
	"useTabs": true,
	"semi": true,
	"singleQuote": false,
	"trailingComma": "all"
}
```

<!-- # Making project template. -->