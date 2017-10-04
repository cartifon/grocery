(() => {
    'use strict';

    angular.module('myGroceryApp')
        .service('groceryService', GroceryService);

    GroceryService.$inject = ['$http'];

    function GroceryService($http) {
        var service = {};

        return service;

    }
})();