# object-foreach-polyfill [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> A polyfill for Object.prototype.forEach

## Installation

```sh
$ npm install --save object-foreach-polyfill
```

## Usage

```js
var objectForEachPolyfill = require('object-foreach-polyfill');

objectForeachPolyfill(function(v, k) {
    return true;
});
```
## License

MIT © [Joe Groseclose &lt;@benderTheCrime&gt;](joegroseclose.com)


[npm-image]: https://badge.fury.io/js/object-foreach-polyfill.svg
[npm-url]: https://npmjs.org/package/object-foreach-polyfill
[travis-image]: https://travis-ci.org/benderTheCrime/object-foreach-polyfill.svg?branch=master
[travis-url]: https://travis-ci.org/benderTheCrime/object-foreach-polyfill
[daviddm-image]: https://david-dm.org/benderTheCrime/object-foreach-polyfill.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/benderTheCrime/object-foreach-polyfill
[coveralls-image]: https://coveralls.io/repos/benderTheCrime/object-foreach-polyfill/badge.svg
[coveralls-url]: https://coveralls.io/r/benderTheCrime/object-foreach-polyfill