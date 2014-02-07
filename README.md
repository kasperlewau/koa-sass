# koa-sass

Koa wrapper for node-sass

## Installation

```js
$ npm install koa-sass
```

## Options

See [the node-sass document](https://github.com/andrew/node-sass).

## Example

```js
var sass = require('koa-sass');
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