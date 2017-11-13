'use strict';

angular
    .module('houseItem')
    .component('houseItem', {
        templateUrl: 'components/house-item/house-item.template.html',
        controller: houseItemController,
        controllerAs: 'vm'
    });

houseItemController.$inject = ['houseItemService'];

function houseItemController(houseItemService) {
    var vm = this;

    houseItemService
        .getData()
        .then(function(data) {
            var key;
            for (key in data) { vm[key] = data[key]; }
        });
}