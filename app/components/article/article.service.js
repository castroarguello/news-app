(function() {
  'use strict';

  angular
    .module('myApp.article.article-service', [])
    .factory('ArticleService', ['$http', 'APP_CONFIG', factory]);

  function factory($http, APP_CONFIG) {
    var service = {}

    service.getArticles = function() {
      var url = APP_CONFIG.services.baseUrl + APP_CONFIG.services.news;
      return $http.get(url)
    };

    return service;
  }
})();
