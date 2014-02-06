## sass-middleware
Like [less-middleware](https://github.com/emberfeather/less.js-middleware) but sass-middleware.

### Requirements:
1. [Sass](http://sass-lang.com/)

### Installation:
```bash
# insall Sass if not installed
gem install sass
# install sass-middleware
npm install sass-middleware
```

### Usage:
**Make shure static middleware was placed after sass-middleware**
```javascript
// app.use(require('sass-middleware')(options))
app.use(require('sass-middleware')({
  bin: '/path/to/sass/executable',
  src: 'public',
  quiet: true
}));
app.use(connect.static('public'));
```

### Options:
1. `bin` - Path to sass executable (defaults to `"sass"`)
2. `src` - Source path (defaults to `"public"`)
3. `dest` - Destination path (defaults to `options.src`)
4. `quiet` - Suppress output (defaults to `false`)
5. `cache_location` - Path to sass cache location (defaults to sass default cache location)
6. `style` - output style (defaults to sass default output style)
