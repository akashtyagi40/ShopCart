(function() {
    'use strict';
    // the storeController contains two objects:
    // - store: contains the product list
    // - cart: the shopping cart object
    angular.module('shoppingKartApp.store.controllers').controller('StoreController', ['$scope', '$routeParams', 'GlobalDataService',
        function($scope, $routeParams, GlobalDataService) {
            // get store and cart from service
            $scope.store = GlobalDataService.store;
            $scope.cart = GlobalDataService.cart;
            // use routing to pick the selected product
            if ($routeParams.productSku != null) {
                $scope.product = $scope.store.getProduct($routeParams.productSku);
            }
        }
    ]);
})();