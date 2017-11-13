'use strict';

angular
    .module('characters')
    .factory('charactersService', charactersService);

charactersService.$inject = ['$http', '$q'];

function charactersService($http, $q) {
    var service = {
        getCharacters: getCharacters
    };

    return service;

    function getCharacters() {
        var deferred = $q.defer();

        $http.get('https://anapioficeandfire.com/api/characters')
            .then(success)
            .catch(error);

        function success(response) { deferred.resolve(response.data); }
        function error(response) { deferred.reject(response.status); }

        return deferred.promise;

    }
}