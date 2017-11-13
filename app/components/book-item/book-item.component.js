'use strict';

angular
    .module('bookItem')
    .component('bookItem', {
        templateUrl: 'components/book-item/book-item.template.html',
        controller: 'bookItemController',
        controllerAs: 'vm'
    });
