'use strict';

angular.module('myApp.article.article-directive', [])

.directive('articleList', articleList)
.directive('article', article)

function articleList() {
  var directive = {
    replace: true,
    restrict: 'E',
    scope: true,
    bindToController: {
      ngClick: '&',
    },
    controller: Controller,
    controllerAs: 'ctrl',
    templateUrl: 'components/article/article-list.html',
    link: link
  };
  return directive;

  function link (scope, elem, attr, ctrl) {
    ctrl.element = elem;
  }

  function Controller($timeout, $location, ArticleService) {
    var ctrl = this;
    ctrl.select = function(article) {
      article.isExpanded = !article.isExpanded;
      ctrl.selected = article.isExpanded && article;
      if (article.isExpanded) {
        ctrl.title = ctrl.selected.title;
      }
    }

    ctrl.toggle = function() {
      ctrl.isExpanded = !ctrl.isExpanded;
      ctrl.selected = false;
    }

    ctrl.close = function() {
      ctrl.isClosed = true;
      $timeout(function(){
        $location.path('/about')
      }, 500);
    }

    ctrl.loadData = function() {
      ctrl.loading = true;
      ArticleService.getArticles()
        .then(function(response){
          ctrl.articles = response.data;
          ctrl.loading = false;
        });
    };

    ctrl.loadData();
  }
}

function article() {
  var directive = {
    replace: true,
    restrict: 'E',
    scope: true,
    bindToController: {
      model: '=',
      ngClick: '&',
      isExpanded: '=',
      type: '@',
    },
    controller: Controller,
    controllerAs: 'ctrl',
    templateUrl: 'components/article/article.html',
    link: link
  };

  function link (scope, elem, attr, ctrl) {
    ctrl.element = elem;
  }

  return directive;
  function Controller(ArticleService) {
    var ctrl = this;
    ctrl.article = ctrl.model;
  }
}
