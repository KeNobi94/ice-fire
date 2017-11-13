'use strict';

angular
    .module('bookItem')
    .factory('bookItemService', bookItemService);

bookItemService.$inject = ['$http', '$q', '$routeParams'];

function bookItemService($http, $q, $routeParams) {
    var service = {
        getData: getData
    };

    return service;

    function getData() {
        var deferred = $q.defer(),
            id = $routeParams.id;

        $http.get('https://anapioficeandfire.com/api/books/' + id)
            .then(success)
            .catch(error);

        function success(response) { deferred.resolve(response.data); }
        function error(response) { deferred.reject(response.status); }

        return deferred.promise;
    }

}