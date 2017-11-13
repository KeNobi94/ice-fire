'use strict';

angular
    .module('bookItem')
    .component('bookItem', {
        templateUrl: 'components/book-item/book-item.template.html',
        controller: bookItemController,
        controllerAs: 'vm'
    });

bookItemController.$inject = ['bookItemService'];

function bookItemController(bookItemService) {
    var vm = this;

    bookItemService
        .getData()
        .then(function(data) {
            var key;
            for (key in data) { vm[key] = data[key]; }
        });

}