'use strict';

angular
    .module('characterItem')
    .component('characterItem', {
        templateUrl: 'components/character-item/character-item.template.html',
        controller: 'characterItemController',
        controllerAs: 'vm'
    });
