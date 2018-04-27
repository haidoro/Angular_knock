  angular.
  module('mypageList').
  component('mypageList', {
    templateUrl: 'mypage-list/mypage-list.template.html',
    controller: ['Mypage',
      function MypageListController(Mypage) {
        this.mypages = Mypage.query();
        this.orderProp = 'age';
      }
    ]
  });