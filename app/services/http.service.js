'use strict';

angular
    .module('app')
    .factory('httpService', httpService);

httpService.$inject = ['$http', '$q', '$routeParams'];

function httpService($http, $q, $routeParams) {
    let service = {
        getData: getData,
        redirectPage: redirectPage
    };

    return service;

    function getData(url) {
        let deferred = $q.defer(),
            id = $routeParams.id;

        url = id ? url + '/' + id
                 : url;

        $http.get(url)
            .then((response) => { deferred.resolve(response.data); })
            .catch((response) => { deferred.reject(response.status); });

        return deferred.promise;
    }

    function redirectPage(url, params) {
        let deferred = $q.defer(),
            id = $routeParams;

        $http.post(url, params)
            .then((response) => { deferred.resolve(response.data); })
            .catch((response) => { deferred.reject(response.status); });

        return deferred.promise;
    }
}