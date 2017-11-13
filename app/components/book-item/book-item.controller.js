'use strict';

angular
    .module('bookItem')
    .controller('bookItemController', bookItemController);

bookItemController.$inject = ['httpService'];

function bookItemController(httpService) {
    let vm = this,
        url = 'https://anapioficeandfire.com/api/books';

    httpService
        .getData(url)
        .then((data) => {
            let key;
            for (key in data) { vm[key] = data[key]; }
        });

}