'use strict';

angular
    .module('characters')
    .component('characters', {
        templateUrl: 'components/characters/characters.template.html',
        controller: 'charactersController',
        controllerAs: 'vm'
    });
