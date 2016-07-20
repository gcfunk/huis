'use strict';

var app = angular.module('myApp');

app

.directive("game", function(){
  return {
    restrict: 'E',
    templateUrl: 'game/game.html',
    controller: function() {

    },
    controllerAs: 'GameCtrl'
  };
})
