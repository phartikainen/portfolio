'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [
  'ngRoute',
  'RouteData',
  'ngTouch',
  'ngAnimate',
  'myApp.filters',
  'myApp.services',
  'myApp.factories',
  'myApp.directives',
  'myApp.controllers',
  'angular-gestures',
  'angular-carousel',
  'monospaced.mousewheel',
  'twitter.timeline',
]).
config(['$routeProvider', 'RouteDataProvider', '$locationProvider', function($routeProvider, RouteDataProvider, $locationProvider) {
	
	RouteDataProvider.applyConfig({
    bodyStyle: {
      'background': 'transparent'
    }
  });
  
  RouteDataProvider.hookToRootScope(true);

	$routeProvider.when('/', {
		RouteData: {
      bodyStyle: {
        'background': 'url("../img/pekka-home3.jpg") top center / cover no-repeat'
      }
    },
  	templateUrl: 'partials/partial_index.html',
  	controller: 'MainCtrl'
  });
  
  $routeProvider.when('/portfolio/', {
	  RouteData: {
      bodyStyle: {
        'background': 'transparent'
      }
    },
  	templateUrl: 'partials/partial_portfolio.html',
  	controller: 'MainCtrl'
  });
	
  $routeProvider.when('/story/', {
	  RouteData: {
      bodyStyle: {
        'background': 'transparent'
      }
    },
  	templateUrl: 'partials/partial_story.html',
  	controller: 'MainCtrl'
  });
  
  $routeProvider.when('/profile/', {
	  RouteData: {
      bodyStyle: {
        'background': 'transparent'
      }
    },
  	templateUrl: 'partials/partial_profile.html',
  	controller: 'MainCtrl'
  });
  
  $routeProvider.when('/contact/', {
	  RouteData: {
      bodyStyle: {
        'background': 'transparent'
      }
    },
  	templateUrl: 'partials/partial_contact.html',
  	controller: 'MainCtrl'
  });
  
  $routeProvider.when('/view2/', {
	  RouteData: {
      bodyStyle: {
        'background': 'transparent'
      }
    },
  	templateUrl: 'partials/partial2.html',
  	controller: 'MyCtrl2'
  });
  
  $routeProvider.when('/view3/', {
	  RouteData: {
      bodyStyle: {
        'background': 'transparent'
      }
    },
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


