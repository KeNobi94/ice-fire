'use strict';

angular
    .module('characterItem')
    .controller('characterItemController', characterItemController);

characterItemController.$inject = ['httpService'];

function characterItemController(httpService) {
    let vm = this,
        url = 'https://anapioficeandfire.com/api/characters';

    httpService
        .getData(url)
        .then((data) => {
            let key;
            for (key in data) { vm[key] = data[key]; }
        });
}