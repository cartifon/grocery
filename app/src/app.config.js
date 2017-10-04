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

        $stateProvider
            .state(home);

    }
})();