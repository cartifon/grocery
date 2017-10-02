(() => {
    'use strict';

    angular.module('myGroceryApp')
        .service('groceryService', GroceryService);

    GroceryService.$inject = ['$http'];

    function GroceryService($http) {
        var service = {};

        service.getGroceryList = getGroceryList;

        return service;

        function getGroceryList() {
            return $http.get('../grocery-list.json');
        }
    }
})();