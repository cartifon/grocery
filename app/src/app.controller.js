(() => {
    angular.module('myGroceryApp')
        .controller('groceryController', GroceryController);


    GroceryController.$inject = ['$scope'];

    function GroceryController($scope) {
        console.log('Let\'s do this');
    }
})();