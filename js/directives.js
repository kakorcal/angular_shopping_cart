app.directive('teaParent', function(){
  return {
    restrict: 'E',
    scope: {},
    transclude: true,
    templateUrl: './partials/parent.html',
    controllerAs: 'parent',
    controller: parentController
  }
});

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
    bindToController: { data: '=' },
    templateUrl: './partials/search.html',
    controllerAs: 'search',
    controller: searchController
  };  
});

app.directive('teaTable', function(teaService){
  return {
    restrict: 'E',
    scope: {},
    bindToController: { data: '=' },
    templateUrl: './partials/table.html',
    controllerAs: 'items',
    controller: itemsController
  };  
});

app.directive('teaItem', function(){
  return {
    restrict: 'A',
    scope: {},
    bindToController: { item: '=' },
    templateUrl: './partials/item.html',
    controllerAs: 'tea',
    controller: singleItemController
  }
});