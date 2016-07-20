'use strict';

describe('myApp.peopleList directive tests', function() {
  var $scope, controller;

  beforeEach(module('myApp'));

  beforeEach(inject(function($compile, $rootScope, $injector) {
    // there's got to be an easier way to get an instance of the controller
    var $httpBackend = $injector.get('$httpBackend');
    $httpBackend.whenGET('game/game.html').respond(200, '');
    var scope = $rootScope.$new();
    var element = angular.element("<game></game>");
    var template = $compile(element)(scope);
    $httpBackend.flush();
    scope.$digest();
    controller = element.controller('game');
  }));

  describe('game directive', function() {
    it('exists', function() {
      expect(controller).toBeDefined();
    });
  });
});
