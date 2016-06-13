'use strict';

angular.module('myApp.home', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'HomeCtrl',
    templateUrl: 'views/home/home.html',
  });
}])

.controller('HomeCtrl', ['$scope', '$uibModal', function($scope, $modal) {

}]);