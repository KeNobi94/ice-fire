'use strict';

angular
    .module('characters')
    .component('characters', {
        templateUrl: 'components/characters/characters.template.html',
        controller: charactersController,
        controllerAs: 'vm'
    });

charactersController.$inject = ['httpService'];

function charactersController(httpService) {
    let vm = this,
        url = 'https://anapioficeandfire.com/api/characters';

    httpService
        .getData(url)
        .then((data) => { vm.characters = data; });
}