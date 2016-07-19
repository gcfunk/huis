'use strict';

describe('myApp.peopleList directive tests', function() {
  var $scope, controller;

  beforeEach(module('myApp'));

  beforeEach(inject(function($compile, $rootScope, $injector) {
    var $httpBackend = $injector.get('$httpBackend');
    $httpBackend.whenGET('people/people-list.html').respond(200, '');
    var scope = $rootScope.$new();
    var element = angular.element("<people-list></people-list>");
    var template = $compile(element)(scope);
    $httpBackend.flush();
    scope.$digest();
    controller = element.controller('peopleList');
  }));

  describe('peopleList directive', function() {
    it('has a list of people', function() {
      expect(controller.people).toBeDefined();
      expect(controller.people.length).toBeGreaterThan(0);
    });

    it('has a default sort and filter', function() {
      expect(controller.peopleSort).toBeDefined();
      expect(controller.genderFilter).toBe('all');
    });
  });
});

describe('myApp.PersonDetailsModalCtrl controller tests', function() {
  var $scope, controller;

  beforeEach(module('myApp'));

  beforeEach(inject(function(_$controller_){
    $scope = {};
    var $uibModalInstance = {};
    var person = {};
    controller = _$controller_('PersonDetailsModalCtrl', { $scope: $scope, $uibModalInstance: $uibModalInstance, person: person });
  }));

  describe('PersonDetailsModalCtrl controller', function() {
    it('exists', function() {
      expect(controller).toBeDefined();
      expect($scope.ok).toBeDefined();
    });
  });
});
