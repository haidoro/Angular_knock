'use strict';

describe('mypageList', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('mypageApp'));

  // Test the controller
  describe('MypageController', function() {

    it('should create a `mypages` model with 3 mypages', inject(function($componentController) {
      var ctrl = $componentController('mypage');

      expect(ctrl.mypages.length).toBe(3);
    }));

  });

});
