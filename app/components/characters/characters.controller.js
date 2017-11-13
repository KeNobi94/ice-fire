'use strict';

angular
    .module('characters')
    .controller('charactersController', charactersController);

charactersController.$inject = ['httpService'];

function charactersController(httpService) {
    let vm = this,
        url = 'https://anapioficeandfire.com/api/characters';

    httpService
        .getData(url)
        .then((data) => { vm.characters = data; });
}