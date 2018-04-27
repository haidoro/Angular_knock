angular.
  module('mypageDetail').
  component('mypageDetail', {
    templateUrl: 'mypage-detail/mypage-detail.template.html',
    controller: ['$routeParams', 'Mypage',
      function MypageDetailController($routeParams, Mypage) {
        var self = this;
        self.mypage = Mypage.get({mypageId: $routeParams.mypageId}, function(mypage) {
          self.setImage(mypage.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });