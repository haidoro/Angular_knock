angular.
  module('core.mypage').
  factory('Mypage', ['$resource',
    function($resource) {
      return $resource('mypages/:mypageId.json', {}, {
        query: {
          method: 'GET',
          params: {mypageId: 'mypage'},
          isArray: true
        }
      });
    }
  ]);