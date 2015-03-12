'use strict';

/* Controllers */

angular.module('myApp.controllers', [])



  
  .controller('HeaderController', ['$scope', '$location', function($scope, $location) {
		$scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
    
  }])
  

  
  
  .controller('MainCtrl', ['$scope', 'logMsg', function ($scope, logMsg) {
	  
	  
	$scope.logs = [];

   
  $scope.test6 = function(event, delta, deltaX, deltaY){
     var msg = logMsg.build('test6', delta, deltaX, deltaY);
    /* if(msg !== '') {
       $scope.logs.push(msg);
     }
		 */
		 
		 var muutos = event.deltaY;
		 
		 if (!Modernizr.touch) { 
		 		 
		 if (muutos > 0) {
			 	$('.rn-carousel-controls').css({
			 		'display': "none",
  			});	
  		}
  		
  		if (muutos < 0) {
			 	$('.rn-carousel-controls').css({
			 		'display': "block",
  			});	
  		}		
			}
   };
  
  
  //  $scope.slideIndex2  = 1;
   
  $scope.portfolioWorks = [
      'BetterDoctor',
      'Mehiläinen',
      'Viinimaa'
    ];
    
   
  $scope.draggedup = function($event) {
  // console.log($event.type);
  // var footer = $event.target;
  
  if (Modernizr.touch) { 
  $('.rn-carousel-indicator').css({
    'display': "none",
  });
  $('.rn-carousel-controls').css({
    'display': "none",
  });
  
  
	
  
	}	

};

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

};

 
	

  }])
  


  
  ;
