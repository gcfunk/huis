'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  // uncomment this test when I replace ngroute with ui router
  /*it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });*/


  describe('People List', function() {

    var people, startCount;

    beforeEach(function() {
      browser.get('index.html');
      people = element.all(by.css('.people-list li'));
      people.count().then(function(originalCount){
        startCount = originalCount;
      });
      expect(people.count()).toBeGreaterThan(0);
    });


    it('should show a list of people', function() {
      expect(startCount).toBeGreaterThan(0);
    });

    it('should sort the list of people', function() {
      // get first person name
      var firstPerson = element.all(by.css('.people-list li p')).first();
      var firstPersonName;
      firstPerson.getText().then(function(text){
        firstPersonName = text;
      });

      // sort the list by Name (Reverse Alphabetical)
      element(by.cssContainingText('option', 'Name (Reverse Alphabetical)')).click();

      // check to make sure the first person is different
      firstPerson.getText().then(function(text){
        expect(firstPersonName).not.toEqual(text);
      });
    });

    it('should filter the list of people', function() {
      // filter the list by gender (female)
      element(by.cssContainingText('option', 'Female')).click();

      // check to make sure the list is smaller
      people.count().then(function(count){
        expect(count).toBeGreaterThan(0);
        expect(startCount).toBeGreaterThan(count);
      });
    });

  });
});
