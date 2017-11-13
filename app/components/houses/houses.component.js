'use strict';

angular
    .module('houses')
    .component('houses', {
        templateUrl: 'components/houses/houses.template.html',
        controller: 'housesController',
        controllerAs: 'vm'
    });
