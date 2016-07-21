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
        $this.choices = angular.copy($this.people);
        var temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        for (var currentIndex = $this.choices.length - 1; currentIndex > 0; currentIndex--) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // And swap it with the current element.
          temporaryValue = $this.choices[currentIndex];
          $this.choices[currentIndex] = $this.choices[randomIndex];
          $this.choices[randomIndex] = temporaryValue;
        }

        // take the first 4 people in the shuffled array as the choices
        $this.choices = $this.choices.slice(0,4);

        var randomPersonIndex = Math.floor((Math.random() * $this.choices.length));
        $this.person = $this.choices[randomPersonIndex];
      };

      this.checkAnswer = function(person) {
        return (this.person.name === person.name);
      };
    }],
    controllerAs: 'GameCtrl'
  };
})
