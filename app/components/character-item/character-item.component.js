'use strict';

angular
    .module('characterItem')
    .component('characterItem', {
        templateUrl: 'components/character-item/character-item.template.html',
        controller: characterItemController,
        controllerAs: 'vm'
    });

characterItemController.$inject = ['characterItemService'];

function characterItemController(characterItemService) {
    var vm = this;

    characterItemService
        .getData()
        .then(function(data) {
            var key;
            for (key in data) { vm[key] = data[key]; }
        });
}