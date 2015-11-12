/* ================================================================
 * badgeboard by xdf(xudafeng[at]126.com)
 *
 * first created at : Wed Nov 11 2015 17:09:45 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright 2013 xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

'use strict';

var _ = require('lodash');
var badgeboard = require('..');

var port = 3000;
var Koa = require('koa');

var app = new Koa();

app.use(function *() {
  this.type = 'image/svg+xml;charset=utf-8';
  console.log(_.merge(badgeboard.DEFAULT_DATA, this.query));
  this.body = badgeboard(_.merge(badgeboard.DEFAULT_DATA, this.query));
});

app.listen(port, function() {
  console.log('visit localhost:%d', port);
});
