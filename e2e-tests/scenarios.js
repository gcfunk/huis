'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  // uncomment this test when I replace ngroute with ui router
  /*it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });*/


  describe('People List', function() {

    beforeEach(function() {
      browser.get('index.html');
    });


    it('should show a list of people', function() {
      var people = element.all(by.css('.people-list li'));
      var startCount = 0;
      people.count().then(function(originalCount){
        startCount = originalCount;
      });
      expect(people.count()).toBeGreaterThan(0);
    });

  });
});
