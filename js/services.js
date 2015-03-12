'use strict';

/* Services */

var services = angular.module('myApp.services', []).value('version', '0.1');



  
  
  
services.service('logMsg', [function(){
      this.build = function(name, delta, deltaX, deltaY) {
        var o = '';

        if (delta > 0) {
          o = name + ': up ('+delta+')';
        } else if (delta < 0) {
          o = name + ': down ('+delta+')';
        }

        if (deltaX > 0) {
          o = o + ', east ('+deltaX+')';
        } else if (deltaX < 0) {
          o = o + ', west ('+deltaX+')';
        }

        if (deltaY > 0) {
          o = o + ', north ('+deltaY+')';
        } else if (deltaY < 0) {
          o = o + ', south ('+deltaY+')';
        }
        return o;
      };
    }]);
