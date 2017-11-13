'use strict';

angular
    .module('houses')
    .component('houses', {
        templateUrl: 'components/houses/houses.template.html',
        controller: housesController,
        controllerAs: 'vm'
    });

housesController.$inject = ['housesService'];

function housesController(housesService) {
    var vm = this;

    housesService
        .getHouses()
        .then(function(data) { vm.houses = data; });
}