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
  var content = 'render error';

  try {
    content = render(template, data, {
      tagOpen: '<#',
      tagClose: '#>'
    });
  } catch (e) {
    console.log(e.stack);
  }

  return content;
};

module.exports.DEFAULT_DATA = {
  left_text: 'macaca',
  right_text: '100%',
  left_bg_color: '#555',
  right_bg_color: '#dfb317',
  left_text_color: '#fff',
  right_text_color: '#fff'
};
