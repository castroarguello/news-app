'use strict';

angular.module('myApp')
  .constant('APP_CONFIG', {
    environment: 'development',
    services: {
      baseUrl: '/data/',
      news: 'articles.json',
    }
  });
