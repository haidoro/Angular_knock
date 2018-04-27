angular.
  module('mypageApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/mypages', {
          template: '<mypage-list></mypage-list>'
        }).
        when('/mypages/:mypageId', {
          template: '<mypage-detail></mypage-detail>'
        }).
        otherwise('/mypages');
    }
  ]);
