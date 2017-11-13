'use strict';

angular
    .module('houseItem')
    .component('houseItem', {
        templateUrl: 'components/house-item/house-item.template.html',
        controller: houseItemController,
        controllerAs: 'vm'
    });

houseItemController.$inject = ['httpService'];

function houseItemController(httpService) {
    let vm = this,
        url = 'https://anapioficeandfire.com/api/houses';

    httpService
        .getData(url)
        .then((data) => {
            let key;
            for (key in data) { vm[key] = data[key]; }
        });
}