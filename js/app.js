(function(window, angular) {
    'use strict';
    // App Module: the name shoppingKartApp matches the ng-app attribute in the main <html> tag
    // the route provides parses the URL and injects the appropriate partial page
    var shoppingKartApp = angular.module('shoppingKartApp', [
    	'shoppingKartApp.store',
        'shoppingKartApp.product', 
        'shoppingKartApp.shared', 
    ]).config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/store', {
            templateUrl: 'partials/store/store.html',
            controller: 'StoreController'
        }).when('/products/:productSku', {
            templateUrl: 'partials/product/product.html',
            controller: 'StoreController'
        }).when('/cart', {
            templateUrl: 'partials/shared/shopping-cart.html',
            controller: 'StoreController'
        }).otherwise({
            redirectTo: '/store'
        });
    }]);
 })(window, angular);