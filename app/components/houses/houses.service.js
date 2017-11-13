'use strict';

angular
    .module('houses')
    .factory('housesService', housesService);

housesService.$inject = ['$http', '$q'];

function housesService($http, $q) {
    var service = {
        getHouses: getHouses
    };

    return service;

    function getHouses() {
        var deferred = $q.defer();

        $http.get('https://anapioficeandfire.com/api/houses')
            .then(success)
            .catch(error);

        function success(response) { deferred.resolve(response.data); }
        function error(response) { deferred.reject(response.status); }

        return deferred.promise;

    }
}