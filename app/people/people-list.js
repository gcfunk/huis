'use strict';

var app = angular.module('myApp');

app.directive("peopleList", function(){
  return {
    restrict: 'E',
    templateUrl: 'people/people-list.html',
    controller: function($scope) {
      this.people = [
        { name: "Iron Man"},
        { name: "Thor"}
      ]
    },
    controllerAs: 'PeopleCtrl'
  };
});
