'use strict';

angular
    .module('houseItem')
    .controller('houseItemController', houseItemController);

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