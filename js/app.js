const app = angular.module('shoppingCartApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: './partials/home.html'
    })
    .when('/checkout', {
      templateUrl: './partials/checkout.html'
    })
    .otherwise({
      redirectTo: '/'
    });
  $locationProvider.html5Mode(true);
});