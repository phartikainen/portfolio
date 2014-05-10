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
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	 // use the HTML5 History API
		$locationProvider.html5Mode(true);

	$routeProvider.when('/', {
  	templateUrl: 'partials/partial_index.html',
  	controller: 'MainCtrl'
  });
	
  $routeProvider.when('/story', {
  	templateUrl: 'partials/partial_article.html',
  	controller: 'MainCtrl'
  });
  
  $routeProvider.when('/portfolio', {
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
  	redirectTo: '/'
  });
  
 
  
}]);


