'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  

  
  
  .controller('MainCtrl', ['$scope',function($scope) {
  
  $scope.portfolioWorks = [
      'BetterDoctor',
      'Mehiläinen',
      'Viinimaa'
    ];
  
  $scope.dragged = function($event) {
  console.log("draggedup");
 /*  var ele = $event.target;
  var x = Math.floor(Math.random() * 2) + 1,
      y = Math.floor(Math.random() * 1) + 1,
      z = Math.floor(Math.random() * 6) + 1,
      rot = Math.floor(Math.random()*360)+1;
  $(ele).css({
    'transform': 
      "translate3d("+x+"px,"+y+"px,"+z+"px)" +
      "rotate("+rot+"deg)"
  });
 */ 

}

  }])
  


  
  ;
