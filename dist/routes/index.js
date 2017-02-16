'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _middleware = require('../middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _dbConfig = require('../dbConfig');

var _dbConfig2 = _interopRequireDefault(_dbConfig);

var _blogPostController = require('../controller/blogPostController');

var _blogPostController2 = _interopRequireDefault(_blogPostController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express2.default)();

(0, _dbConfig2.default)(function (db) {
  router.use((0, _middleware2.default)({ config: _config2.default, db: db }));

  //configuring the new router for creating new blogs;

  router.use('/blogs', (0, _blogPostController2.default)(_config2.default, db));
});

exports.default = router;
//# sourceMappingURL=index.js.map