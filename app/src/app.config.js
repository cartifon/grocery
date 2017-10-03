(() => {
    'use strict';

    angular
        .module('myGroceryApp')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        var home = {
            name: 'home',
            url: '/home',
            templateUrl: 'src/templates/list.tmpl.html',
            controller: 'groceryController as groceryCtrl'
        }

        var cart = {
            name: 'cart',
            url: '/cart',
            templateUrl: 'src/templates/cart.tmpl.html',
            controller: 'cartController as cartCtrl'
        }

        $stateProvider
            .state(home)
            .state(cart);

    }
})();