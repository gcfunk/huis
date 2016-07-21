'use strict';

describe('myApp.peopleList directive tests', function() {
  var $scope, controller;

  beforeEach(module('myApp'));

  beforeEach(inject(function($compile, $rootScope, $injector) {
    // there's got to be an easier way to get an instance of the controller
    var $httpBackend = $injector.get('$httpBackend');
    $httpBackend.whenGET('game/game.html').respond(200, '');
    $httpBackend.whenGET('/people/people.json').respond(200,
      "[" +
      "  {" +
      "    \"name\": \"Ant Man\"," +
      "    \"image\": \"/images/ant-man.png\"," +
      "    \"gender\": \"male\"" +
      "  }," +
      "  {" +
      "    \"name\": \"Black Panther\"," +
      "    \"image\": \"/images/black-panther.png\"," +
      "    \"gender\": \"male\"" +
      "  }," +
      "  {" +
      "    \"name\": \"Black Widow\"," +
      "    \"image\": \"/images/black-widow.png\"," +
      "    \"gende\": \"female\"" +
      "   }," +
      "  {" +
      "    \"name\": \"Captain America\"," +
      "    \"image\": \"/images/captain-america.jpg\"," +
      "    \"gender\": \"male\"" +
      "  }" +
      "]");
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

    it('can check for a right or wrong answer', function() {
      expect(controller.checkAnswer(controller.person)).toBe(true);
      expect(controller.checkAnswer({'name': 'wrong answer'})).toBe(false);
    })
  });
});
