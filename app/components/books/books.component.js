'use strict';

angular
    .module('books')
    .component('books', {
        templateUrl: 'components/books/books.template.html',
        controller: booksController,
        controllerAs: 'vm'
    });

booksController.$inject = ['httpService'];

function booksController(httpService) {
    let vm = this,
        url = 'https://anapioficeandfire.com/api/books';

    httpService
        .getData(url)
        .then((data) => { vm.books = data; });
}