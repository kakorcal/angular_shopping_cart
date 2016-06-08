//***************************************************************************
  // home page
//***************************************************************************

app.directive('teaParent', function(){
  return {
    restrict: 'E',
    scope: {},
    // transclude is not needed in this case
    transclude: true,
    templateUrl: './partials/home/parent.html',
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
    templateUrl: './partials/home/search.html',
    controllerAs: 'search',
    controller: searchController
  };  
});

app.directive('teaTable', function(){
  return {
    restrict: 'E',
    scope: {},
    bindToController: { data: '=' },
    templateUrl: './partials/home/table.html',
    controllerAs: 'items',
    controller: itemsController
  };  
});

// app.directive('teaItem', function(){
//   return {
//     restrict: 'A',
//     scope: {},
//     bindToController: { item: '=' },
//     templateUrl: './partials/home/item.html',
//     controllerAs: 'tea',
//     controller: singleItemController,
//     // require: '^teaParent',
//     // link: function(scope, element, attrs, teaParentCtrl){

//     // }
//   }
// });

//***************************************************************************
  // checkout page
//***************************************************************************

app.directive('checkoutParent', function(){
  return {
    restrict: 'E',
    scope: {},
    templateUrl: './partials/checkout/parent.html',
    controllerAs: 'parent',
    controller: checkoutController
  }
});

app.directive('teaOrderTotal', function(){
  return {
    restrict: 'E',
    scope: {},
    bindToController: { total: '<' },
    templateUrl: './partials/checkout/orderTotal.html',
    controllerAs: 'items',
    controller: orderTotalController
  }
});

app.directive('teaOrderTable', function(){
  return {
    restrict: 'E',
    scope: {},
    bindToController: { total: '<' },
    templateUrl: './partials/checkout/orderTable.html',
    controllerAs: 'items',
    controller: orderTableController
  }
});

// app.directive('orderItem', function(){
//   return {
//     restrict: 'A',
//     scope: {},
//     bindToController: { order: '=' },
//     templateUrl: './partials/checkout/orderTableItem.html',
//     controllerAs: 'item',
//     controller: singleOrderController
//   }
// });