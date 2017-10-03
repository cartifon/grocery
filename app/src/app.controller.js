(() => {
    angular.module('myGroceryApp')
        .controller('groceryController', GroceryController);


    GroceryController.$inject = ['$scope', 'groceryService'];

    function GroceryController($scope, groceryService) {
        var vm = this;

        vm.products = [];
        vm.addToCart = addToCart;
        vm.isOnTheCart = isOnTheCart;
        vm.removeFromCart = removeFromCart;

        groceryService.getGroceryList().then((res) => {
            vm.products = res.data;
        });

        function addToCart(item) {
            groceryService.addToCart(item);
        }

        function removeFromCart(item) {
            groceryService.removeFromCart(item);
        }

        function isOnTheCart(item) {
            return groceryService.getItemInTheCart(item);
        }
    }
})();