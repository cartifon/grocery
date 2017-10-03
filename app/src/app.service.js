(() => {
    'use strict';

    angular.module('myGroceryApp')
        .service('groceryService', GroceryService);

    GroceryService.$inject = ['$http'];

    function GroceryService($http) {
        var service = {};
        service.cart = [];

        service.getGroceryList = getGroceryList;
        service.addToCart = addToCart;
        service.getCart = getCart;
        service.getItemInTheCart = getItemInTheCart;
        service.removeFromCart = removeFromCart;

        return service;

        function getGroceryList() {
            return $http.get('../grocery-list.json');
        }

        function addToCart(item) {
            let itemFound = getItemInTheCart(item);
            if (itemFound) {
                itemFound.quantity++;
            } else {
                item.quantity = 1;
                service.cart.push(item);
            }
        }

        function removeFromCart(item) {
            let positionItem = getPositionItemInTheCart(item);
            if (positionItem >= 0 ) {
                if (service.cart[positionItem].quantity > 1) {
                    service.cart[positionItem].quantity --;
                } else {
                    service.cart.splice(positionItem, 1);
                }
            }
        }

        function getCart() {
            return service.cart;
        }

        function getPositionItemInTheCart(item) {
            let position;
            for (var i = 0; i < service.cart.length; i++) {
                if (item.id === service.cart[i].id) {
                    position = i;
                }
            }
            return position;
        }

        function getItemInTheCart(item) {
            let position = getPositionItemInTheCart(item);
            if (position >= 0) {
                return service.cart[position];
            } else {
                return;
            }
        }
    }
})();