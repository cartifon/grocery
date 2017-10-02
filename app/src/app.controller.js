(() => {
    angular.module('myGroceryApp')
        .controller('groceryController', GroceryController);


    GroceryController.$inject = ['$scope', '$http'];

    function GroceryController($scope, $http) {
        $http.get('../grocery-list.json').then( (response) => {
            console.log(response.data);
            // response.data.forEach( (item)=> {
            //     console.log(item.name);
            // });
        });
    }
})();