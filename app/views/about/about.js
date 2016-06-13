'use strict';

angular.module('myApp.about', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    controller: 'AboutCtrl',
    templateUrl: 'views/about/about.html',
  });
}])

.controller('AboutCtrl', ['$scope', '$uibModal', function($scope, $modal) {
}]);