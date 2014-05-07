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
    
    

  }])
  


  
  ;
