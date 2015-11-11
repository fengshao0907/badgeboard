/* ================================================================
 * badgeboard by xdf(xudafeng[at]126.com)
 *
 * first created at : Wed Nov 11 2015 17:09:45 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright  xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

'use strict';

var fs = require('fs');
var path = require('path');
var render = require('microtemplate').render;

var template = path.join(__dirname, 'svg.template.html');
template = fs.readFileSync(template, 'utf8');

module.exports = function(data) {
  return function *() {

    var content = 'render error';

    try {
      content = render(template, data, {
        tagOpen: '<#',
        tagClose: '#>'
      });
      this.type = 'image/svg+xml;charset=utf-8';
    } catch (e) {
      console.log(e.stack);
    }

    this.body = content;
  };
};
