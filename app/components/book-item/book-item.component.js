'use strict';

angular
    .module('bookItem')
    .component('bookItem', {
        templateUrl: 'components/book-item/book-item.template.html',
        controller: bookItemController,
        controllerAs: 'vm'
    });

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