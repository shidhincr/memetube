'use strict';

angular.module('memetube')
    .controller('MainCtrl', function ($http,$sce) {
        var vm = this;
        vm.vids = [];

        vm.searchVideos = function (query) {
            var dataurl = 'http://gdata.youtube.com/feeds/api/videos?q='+query+'&orderby=relevance&alt=json';
            $http.get(dataurl).success(function (data) {
                vm.vids = data.feed.entry;
            });
        };

        vm.getTrustedUrl = function(url){
          return $sce.getTrustedUrl(url);
        };

        vm.getThumbnail = function(video){
          return video.media$group.media$thumbnail[0].url;
        };

        vm.getDescription = function(video){
          return video.title.$t;
        };
    });