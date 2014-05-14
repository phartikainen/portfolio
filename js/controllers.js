'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', [function() {

  }])
  
  .controller('HeaderController', ['$scope', '$location', function($scope, $location) {
		$scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
    
  }])
  

  
  
  .controller('MainCtrl', ['$scope',function($scope) {
  
  //  $scope.slideIndex2  = 1;
  
  
  $scope.portfolioWorks = [
      'BetterDoctor',
      'Mehiläinen',
      'Viinimaa'
    ];
    
   
  $scope.draggedup = function($event) {
  // console.log($event.type);
  // var footer = $event.target;
  var headingSpace = -44;
  var windowHeight = (($(window).height()) - headingSpace);
  
  if (Modernizr.touch) { 
  $('.rn-carousel-indicator').css({
    'display': "none",
  });
  $('.rn-carousel-controls').css({
    'display': "none",
  });
  
  
	$('.my-slider li').css({'height' : windowHeight});
  
	}	

}

 $scope.draggeddown = function($event) {
  // console.log("draggeddown");
  // var footer = $event.target;
  
  if (Modernizr.touch) { 
  
  $('.rn-carousel-indicator').css({
    'display': "block",
  });
  $('.rn-carousel-controls').css({
    'display': "block",
  });
	
	}

}

 
	

  }])
  


  
  ;
