'use strict';

angular
    .module('books')
    .controller('booksController', booksController);

booksController.$inject = ['httpService'];

function booksController(httpService) {
    let vm = this,
        url = 'https://anapioficeandfire.com/api/books';

    httpService
        .getData(url)
        .then((data) => { vm.books = data; });
}