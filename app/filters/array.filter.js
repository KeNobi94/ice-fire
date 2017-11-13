'use strict';

angular
    .module('app')
    .filter('formatArray', formatArray);

function formatArray() {
    return filter;

    function filter(array, separator) {
        if (array) {
            return separator ? array.join(separator) : array.join(', ');
        } else {
            return array;
        }
    }
}