'use strict';

angular
    .module('houses')
    .component('houses', {
        templateUrl: 'components/houses/houses.template.html',
        controller: housesController,
        controllerAs: 'vm'
    });

housesController.$inject = ['httpService'];

function housesController(httpService) {
    let vm = this,
        url = 'https://anapioficeandfire.com/api/houses';

    httpService
        .getData(url)
        .then((data) => { vm.houses = data; });
}