'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngTouch',
  'myApp.filters',
  'myApp.services',
  'myApp.factories',
  'myApp.directives',
  'myApp.controllers',
  'angular-gestures',
  'angular-carousel',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
  	templateUrl: 'partials/partial1.html',
  	controller: 'MainCtrl'
  });
  
  $routeProvider.when('/view2', {
  	templateUrl: 'partials/partial2.html',
  	controller: 'MyCtrl2'
  });
  
  $routeProvider.when('/view3', {
  	templateUrl: 'partials/partial2.html',
  	controller: 'MyCtrl2'
  });
  
  $routeProvider.otherwise({
  	redirectTo: '/view1'
  });
}]);


