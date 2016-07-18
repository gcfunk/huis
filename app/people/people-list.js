'use strict';

var app = angular.module('myApp');

app.directive("peopleList", function(){
  return {
    restrict: 'E',
    templateUrl: 'people/people-list.html',
    controller: function() {
      this.people = [
        { name: 'Ant Man', image: '/images/ant-man.png'},
        { name: 'Black Panther', image: '/images/black-panther.png'},
        { name: 'Black Widow', image: '/images/black-widow.png'},
        { name: 'Captain America', image: '/images/captain-america.jpg'},
        { name: 'Daredevil', image: '/images/daredevil.jpg'},
        { name: 'Drax The Destroyer', image: '/images/drax-the-destroyer.jpg'},
        { name: 'Falcon', image: '/images/falcon.png'},
        { name: 'Gamora', image: '/images/gamora.jpeg'},
        { name: 'Groot', image: '/images/groot.jpg'},
        { name: 'Hawkeye', image: '/images/hawkeye.jpg'},
        { name: 'Hulk', image: '/images/hulk.jpg'},
        { name: 'Iron Man', image: '/images/iron-man.jpg'},
        { name: 'Quicksilver', image: '/images/quicksilver.jpg'},
        { name: 'Rocket Raccoon', image: '/images/rocket-raccoon.jpg'},
        { name: 'Scarlet Witch', image: '/images/scarlet-witch.jpg'},
        { name: 'Spider-Man', image: '/images/spider-man.jpg'},
        { name: 'Starlord', image: '/images/starlord.jpg'},
        { name: 'Thor', image: '/images/thor.jpg'},
        { name: 'Vision', image: '/images/vision.jpg'},
        { name: 'Winter Soldier', image: '/images/winter-soldier.jpg'}
      ];

      this.peopleSort = 'name';
    },
    controllerAs: 'PeopleCtrl'
  };
});
