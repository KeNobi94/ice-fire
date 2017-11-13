'use strict';

angular.
    module('app').
    config(config);

config.$inject = ['$locationProvider', '$routeProvider'];

function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
        .when('/books', {
            template: '<books></books>'
        })
        .when('/characters', {
            template: '<characters></characters>'
        })
        .when('/houses', {
            template: '<houses></houses>'
        })
        .when('/books/:id', {
            template: '<book-item></book-item>'
        })
        .when('/characters/:id', {
            template: '<character-item></character-item>'
        })
        .when('/houses/:id', {
            template: '<house-item></house-item>'
        })
        .otherwise('/books');
}
