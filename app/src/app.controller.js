(() => {
    angular.module('myGroceryApp')
        .controller('groceryController', GroceryController);


    GroceryController.$inject = ['$scope', 'groceryService'];

    function GroceryController($scope, groceryService) {
        var vm = this;

        vm.products = [];

        groceryService.getGroceryList().then((res) => {
            vm.products = res.data;
        });

    }
})();