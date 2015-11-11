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

var badgeboard = require('..')({
  left_text: 'macaca',
  right_text: '100%',
  left_color: '#555',
  right_color: '#dfb317'
});
var Koa = require('koa');

var app = new Koa();

app.use(badgeboard);

app.listen(3000, function() {
  console.log('visit localhost:3000');
});
