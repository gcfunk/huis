'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  describe('Navigation tests', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should automatically redirect to /people-list when location hash/fragment is empty', function() {
      expect(browser.getLocationAbsUrl()).toMatch("/people-list");
    });

    it('should switch from people-list to the game and back', function(){
      element(by.css('.game-link')).click();
      expect(browser.getLocationAbsUrl()).toMatch("/game");
      element(by.css('.back-link')).click();
      expect(browser.getLocationAbsUrl()).toMatch("/people-list");
    });
  });

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
