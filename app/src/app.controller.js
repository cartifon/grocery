(() => {
    angular.module('myGroceryApp')
        .controller('groceryController', GroceryController);


    GroceryController.$inject = ['$scope', 'groceryService'];

    function GroceryController($scope, groceryService) {
        var vm = this;

        vm.index = 0;
        vm.groceryList = [];

        vm.addItem = addItem;
        vm.removeItem = removeItem;
        vm.editItem = editItem;
        vm.startItemToEdit = startItemToEdit;

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

        function editItem(item) {
            item.title = item.newTitle;
            item.notes = item.newNotes;
            item.newTitle = '';
            item.newNotes = '';
        }

        function startItemToEdit(item) {
            item.newTitle = item.title;
            item.newNotes = item.notes;
        }
    }
})();