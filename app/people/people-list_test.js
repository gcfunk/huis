'use strict';

describe('myApp.peopleList directive tests', function() {
  var $scope;

  beforeEach(module('myApp'));

  describe('peopleList directive', function() {
    it('should exist', function() {
      inject(function($compile, $rootScope, $injector) {
        var $httpBackend = $injector.get('$httpBackend');
        $httpBackend.whenGET('people/people-list.html').respond(200, '');
        var scope = $rootScope.$new();
        var element = angular.element("<people-list></people-list>");
        var template = $compile(element)(scope);
        $httpBackend.flush();
        scope.$digest();
        var controller = element.controller('peopleList');

        expect(controller.people).toBeDefined();
      });
    });
  });
});
