# koa-sass

Koa wrapper for node-sass

## Installation

```js
$ npm install koa-sass
```

## Options

See [the node-sass-middleware document](https://github.com/sass/node-sass-middleware).

## Example

```js
var sass = require('koa-sass-middleware');
var serve = require('koa-static');
var koa = require('koa');
var app = koa();

app.use(sass({
  src:  __dirname + '/app/styles/',
  dest: __dirname + '/public/'
}));

app.use(serve('./public'));

app.listen(9000);
```

## License

MIT
