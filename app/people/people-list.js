'use strict';

var app = angular.module('myApp');

app

.factory('People', ['$resource',
  function($resource) {
    return $resource('/people/people.json', {}, {
      query: {
        method: 'GET',
        isArray: true
      }
    });
  }
])

.directive("peopleList", function(){
  return {
    restrict: 'E',
    templateUrl: 'people/people-list.html',
    controller: ['People', '$uibModal', function(People, $uibModal) {
      var $this = this;
      People.query(function(data){
        $this.people = JSON.parse(angular.toJson(data));
      });

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
    }],
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
