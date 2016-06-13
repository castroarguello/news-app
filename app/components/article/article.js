'use strict';

angular.module('myApp.article', [
  'myApp.article.article-directive',
  'myApp.article.article-service',
])

.value('article', '0.1');
