'use strict';

angular
    .module('characters')
    .controller('charactersController', charactersController);

housesController.$inject = ['httpService'];

function housesController(httpService) {
    let vm = this,
        url = 'https://anapioficeandfire.com/api/houses';

    httpService
        .getData(url)
        .then((data) => { vm.houses = data; });
}