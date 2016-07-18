'use strict';

describe('myApp.peopleList directive tests', function() {
  beforeEach(module('myApp'));

  describe('peopleList directive', function() {
    it('should exist', function() {
      module(function($provide) {
        //$provide.value('version', 'TEST_VER');
      });
      inject(function($compile, $rootScope) {
        var element = $compile('<people-list></people-list>')($rootScope);
        expect(element).toBeDefined();
      });
    });
  });
});
