'use strict';

var app = angular.module('myApp');

app

.directive("game", function(){
  return {
    restrict: 'E',
    templateUrl: 'game/game.html',
    controller: ['People', function(People) {
      var $this = this;
      People.query(function(data){
        $this.people = JSON.parse(angular.toJson(data));
        $this.randomPerson();
      });

      this.randomPerson = function() {
        $this.person = $this.people[0];
        $this.choices = [{name: '1'},{name: '2'},{name: '3'},{name: '4'}];
      }
    }],
    controllerAs: 'GameCtrl'
  };
})
