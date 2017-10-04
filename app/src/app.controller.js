(() => {
    angular.module('myGroceryApp')
        .controller('groceryController', GroceryController);


    GroceryController.$inject = ['$scope', 'groceryService'];

    function GroceryController($scope, groceryService) {
        var vm = this;

        vm.index = 0;
        vm.groceryList = [
            {
                title: 'Cheese',
                notes: '',
                index: vm.index++
            },
            {
                title: 'Mango',
                notes: 'Some notes for mango',
                index: vm.index++
            }
        ];

        vm.addItem = addItem;

        function addItem(item) {
            if($scope.groceryItem.$valid) {
                vm.item.index = vm.index++;
                vm.groceryList.push(angular.copy(vm.item));
                vm.item = "";
                $scope.groceryItem.$dirty = false;
            }
        }
    }
})();