const app = angular.module('shoppingCartApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: './partials/home/home.html'
    })
    .when('/checkout', {
      templateUrl: './partials/checkout/checkout.html'
    })
    .otherwise({
      redirectTo: '/'
    });
  $locationProvider.html5Mode(true);
});