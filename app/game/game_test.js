'use strict';

describe('myApp.peopleList directive tests', function() {
  var $scope, controller;

  beforeEach(module('myApp'));

  beforeEach(inject(function($compile, $rootScope, $injector) {
    // there's got to be an easier way to get an instance of the controller
    var $httpBackend = $injector.get('$httpBackend');
    $httpBackend.whenGET('game/game.html').respond(200, '');
    $httpBackend.whenGET('/people/people.json').respond(200,
      "[{" +
      "\"name\": \"Ant Man\"," +
      "\"image\": \"/images/ant-man.png\"," +
      "\"gender\": \"male\"," +
      "\"details\": \"details for ant man\"" +
      "}]");
    var scope = $rootScope.$new();
    var element = angular.element("<game></game>");
    var template = $compile(element)(scope);
    $httpBackend.flush();
    scope.$digest();
    controller = element.controller('game');
  }));

  describe('game directive', function() {
    it('has a list of people', function() {
      expect(controller.people).toBeDefined();
      expect(controller.people.length).toBeGreaterThan(0);
    });

    it('has a single person for display', function() {
      expect(controller.person).toBeDefined();
    });

    it('has a list of 4 choices', function(){
      expect(controller.choices.length).toBe(4);
    })
  });
});
