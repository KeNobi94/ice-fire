'use strict';

angular
    .module('app')
    .filter('formatUrl', formatUrl);

formatUrl.$inject = ['$location'];

function formatUrl($location) {
    return filter;

    function filter(url, redirectTo) {
        var splited,
            id,
            path;

        if (!url) {
            return url;
        } else {
            splited = url.split('/');
            id = splited[splited.length - 1];
            path = redirectTo ? redirectTo  : $location.url();

            return '#!' + path + '/' + id;
        }
    }
}