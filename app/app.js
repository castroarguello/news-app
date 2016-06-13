'use strict';

// Declare app level module which depends on views, and components
angular
  .module('myApp', [
    'angular-loading-bar',
    'ngAnimate',
    'ngRoute',
    'ui.bootstrap',
    'myApp.article',
    'myApp.about',
    'myApp.home',
  ])
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider.otherwise({redirectTo: '/'});
  }])
  .run(function($animate){
    $animate.enabled(true);
  });
