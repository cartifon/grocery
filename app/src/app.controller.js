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
                title: 'Banana',
                notes: 'green',
                index: vm.index++
            },
            {
                title: 'Tomato',
                notes: 'Really red',
                index: vm.index++
            },
            {
                title: 'Avocato',
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
        vm.removeItem = removeItem;

        function addItem(item) {
            if($scope.groceryItem.$valid) {
                vm.item.index = vm.index++;
                vm.groceryList.push(angular.copy(vm.item));
                vm.item = "";
                $scope.groceryItem.$dirty = false;
            }
        }

        function removeItem(index) {
            if (confirm('Are you sure to delete this item?')) {
                for (var i = 0; i < vm.groceryList.length; i++) {
                    if(vm.groceryList[i].index === index) {
                        vm.groceryList.splice(i, 1);
                    }
                }
            }
        }
    }
})();