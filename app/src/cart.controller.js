(() => {
    angular.module('myGroceryApp')
        .controller('cartController', CartController);

        CartController.$inject = ['$scope', 'groceryService'];

    function CartController($scope, groceryService) {
        var vm = this;

        vm.itemsInCart = groceryService.getCart();
    }
})();