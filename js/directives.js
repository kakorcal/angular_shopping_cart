app.directive('teaHeader', function(){
  return {
    restrict: 'E',
    scope: {},
    templateUrl: './partials/header.html'
  };
});

app.directive('teaSearch', function(){
  return {
    restrict: 'E',
    scope: {},
    templateUrl: './partials/search.html'
  };  
});

app.directive('teaTable', function(){
  return {
    restrict: 'E',
    scope: {},
    templateUrl: './partials/table.html',
    controllerAs: 'items',
    controller: itemsController
  };  
});

app.directive('teaItem', function(){
  return {
    restrict: 'A',
    scope: {},
    bindToController: {
      item: '<'
    },
    templateUrl: './partials/item.html',
    controllerAs: 'tea',
    controller: singleItemController
  }
});