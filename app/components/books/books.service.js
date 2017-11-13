'use strict';

angular
    .module('app')
    .factory('booksService', booksService);

booksService.$inject = ['$http', '$q'];

function booksService($http, $q) {
    var service = {
        getBooks: getBooks
    };

    return service;

    function getBooks() {
        var deferred = $q.defer();

        $http.get('https://anapioficeandfire.com/api/books')
            .then(success)
            .catch(error);

        function success(response) { deferred.resolve(response.data); }
        function error(response) { deferred.reject(response.status); }

        return deferred.promise;

    }
}