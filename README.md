# koa-sass

SASS middleware for Koa

## Installation

```js
$ npm install koa-sass
```

## Options

See [the sass middleware document](https://github.com/blackbeam/sass-middleware).

## Example

```js
var sass = require('koa-sass');
var serve = require('koa-static');
var koa = require('koa');
var app = koa();

app.use(sass('./public'));

app.use(serve('./public'));

app.listen(9000);
```

## License

MIT