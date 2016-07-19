'use strict';

var app = angular.module('myApp');

app.directive("peopleList", function(){
  return {
    restrict: 'E',
    templateUrl: 'people/people-list.html',
    controller: function($uibModal) {
      this.people = [
        { name: 'Ant Man', image: '/images/ant-man.png', gender: 'male', details: 'details for ant man'},
        { name: 'Black Panther', image: '/images/black-panther.png', gender: 'male', details: ''},
        { name: 'Black Widow', image: '/images/black-widow.png', gender: 'female', details: ''},
        { name: 'Captain America', image: '/images/captain-america.jpg', gender: 'male', details: ''},
        { name: 'Daredevil', image: '/images/daredevil.jpg', gender: 'male', details: ''},
        { name: 'Drax The Destroyer', image: '/images/drax-the-destroyer.jpg', gender: 'male', details: ''},
        { name: 'Falcon', image: '/images/falcon.png', gender: 'male', details: ''},
        { name: 'Gamora', image: '/images/gamora.jpeg', gender: 'female', details: ''},
        { name: 'Groot', image: '/images/groot.jpg', gender: 'not specified', details: ''},
        { name: 'Hawkeye', image: '/images/hawkeye.jpg', gender: 'male', details: ''},
        { name: 'Hulk', image: '/images/hulk.jpg', gender: 'male', details: ''},
        { name: 'Iron Man', image: '/images/iron-man.jpg', gender: 'male', details: ''},
        { name: 'Quicksilver', image: '/images/quicksilver.jpg', gender: 'male', details: ''},
        { name: 'Rocket Raccoon', image: '/images/rocket-raccoon.jpg', gender: 'male', details: ''},
        { name: 'Scarlet Witch', image: '/images/scarlet-witch.jpg', gender: 'female', details: ''},
        { name: 'Spider-Man', image: '/images/spider-man.jpg', gender: 'male', details: ''},
        { name: 'Starlord', image: '/images/starlord.jpg', gender: 'male', details: ''},
        { name: 'Thor', image: '/images/thor.jpg', gender: 'male', details: ''},
        { name: 'Vision', image: '/images/vision.jpg', gender: 'not specified', details: ''},
        { name: 'Winter Soldier', image: '/images/winter-soldier.jpg', gender: 'male', details: ''}
      ];

      this.peopleSort = 'name';

      this.genderFilter = 'all';

      this.openDetails = function (person) {
        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: '/people/person-details-modal.html',
          controller: 'PersonDetailsModalCtrl',
          size: 'lg',
          resolve: {
            person: function () {
              return person;
            }
          }
        });
      };
    },
    controllerAs: 'PeopleCtrl'
  };
})

.filter('bygender', function() {
  return function(people,genderFilter) {
    var out = [];
    for ( var i in people ) {
      var person = people[i];
      if( genderFilter === 'all'|| genderFilter === person.gender.toLowerCase() ) {
        out.push(person);
      }
    }

    return out;
  }
})

.controller('PersonDetailsModalCtrl', function ($scope, $uibModalInstance, person) {
  $scope.person = person;

  $scope.ok = function () {
    $uibModalInstance.close();
  };
});
