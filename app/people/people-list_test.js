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
    it('have a list of people', function() {
      expect(controller.people).toBeDefined();
    });
  });
});