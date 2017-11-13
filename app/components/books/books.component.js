'use strict';

angular
    .module('books')
    .component('books', {
        templateUrl: 'components/books/books.template.html',
        controller: 'booksController',
        controllerAs: 'vm'
    });