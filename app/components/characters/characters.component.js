'use strict';

angular
    .module('characters')
    .component('characters', {
        templateUrl: 'components/characters/characters.template.html',
        controller: charactersController,
        controllerAs: 'vm'
    });

charactersController.$inject = ['charactersService'];

function charactersController(charactersService) {
    var vm = this;

    charactersService
        .getCharacters()
        .then(function(data) { vm.characters = data; });
}