'use strict';

angular
    .module('books')
    .component('books', {
        templateUrl: 'components/books/books.template.html',
        controller: booksController,
        controllerAs: 'vm'
    });

booksController.$inject = ['booksService'];

function booksController(booksService) {
    var vm = this;

    booksService
        .getBooks()
        .then(function (data) {
            vm.books = data;
        });
}