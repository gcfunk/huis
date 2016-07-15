'use strict';

describe('People List', function() {

  beforeEach(module('myApp'));

  describe('people list directive', function(){

    it('should define the directive', inject(function($controller) {
      var peopleListDirective = $directive('peopleList');
      expect(peopleListDirective).toBeDefined();
    }));

  });
});
