'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [
  'ngRoute',
  'ngTouch',
  'myApp.filters',
  'myApp.services',
  'myApp.factories',
  'myApp.directives',
  'myApp.controllers',
  'angular-gestures',
  'angular-carousel',
  'twitter.timeline',
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider.when('/', {
  	templateUrl: 'partials/partial_index.html',
  	controller: 'MainCtrl'
  });
  
  $routeProvider.when('/portfolio/', {
  	templateUrl: 'partials/partial1.html',
  	controller: 'MainCtrl'
  });
	
  $routeProvider.when('/story/', {
  	templateUrl: 'partials/partial_story.html',
  	controller: 'MainCtrl'
  });
  
  $routeProvider.when('/profile/', {
  	templateUrl: 'partials/partial_article.html',
  	controller: 'MainCtrl'
  });
  
  $routeProvider.when('/contact/', {
  	templateUrl: 'partials/partial_article.html',
  	controller: 'MainCtrl'
  });
  
  $routeProvider.when('/view2/', {
  	templateUrl: 'partials/partial2.html',
  	controller: 'MyCtrl2'
  });
  
  $routeProvider.when('/view3/', {
  	templateUrl: 'partials/partial2.html',
  	controller: 'MyCtrl2'
  });
  
  $routeProvider.otherwise({
  	redirectTo: '/'
  });
  
  $locationProvider.html5Mode(true);
  
}]);

// $(window).scrollTop(0); 

myApp.run(function($rootScope, $route, $location){
   //Bind the `$locationChangeSuccess` event on the rootScope, so that we dont need to 
   //bind in induvidual controllers.

     $rootScope.$watch(function () {return $location.path()}, function (newLocation, oldLocation) {
        if($rootScope.actualLocation !== newLocation) {
          $(window).scrollTop(0);
        }

    });
    
    $rootScope.$on('$locationChangeSuccess', function(object, newLocation, previousLocation) {
        $rootScope.actualLocation = $location.path();
    });
    
});


