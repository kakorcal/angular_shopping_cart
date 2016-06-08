//***************************************************************************
  // home page
//***************************************************************************

app.controller('parentController', parentController);
parentController.$inject = ['teaService'];

function parentController(teaService){
  let vm = this;
  vm.selectedCategory = '';
  vm.searchText = '';
  vm.bagCount = 'Empty!'; 

  vm.addToBag = function(item, quantity){
    if(!quantity) quantity = '1';
    vm.bagCount = teaService.addItemToCart(item, +quantity);
  };
}

app.controller('searchController', searchController);
searchController.$inject = ['teaService'];

function searchController(teaService){
  this.categories = teaService.getCategories();
}

app.controller('itemsController', itemsController);
itemsController.$inject = ['teaService'];

function itemsController(teaService){
  this.list = teaService.getItems();
  this.sortByPrice = '';
}

// app.controller('singleItemController', singleItemController);
// singleItemController.$inject = ['teaService'];

// function singleItemController(teaService){
//   let vm = this;
//   vm.quantity = '1';

//   vm.addToBag = function(item){
//     teaService.addItemToCart(item, +vm.quantity);
//   };
// } 

//***************************************************************************
  // checkout page
//***************************************************************************

app.controller('checkoutController', checkoutController);
checkoutController.$inject = ['teaService'];

function checkoutController(teaService){
  let vm = this;
  vm.selectedItems = teaService.getSelectedItems();
  vm.price = teaService.calculateTotal();
  
  vm.onEdit = function(item, quantity){
    teaService.onEditOrder(item, quantity);
    vm.price = teaService.calculateTotal();
  }

  vm.onDelete = function(item){
    teaService.onDeleteOrder(item);
    vm.price = teaService.calculateTotal();
  }
}

app.controller('orderTotalController', orderTotalController);
orderTotalController.$inject = ['teaService'];

function orderTotalController(teaService){
  
}

app.controller('orderTableController', orderTableController);
orderTableController.$inject = ['teaService'];

function orderTableController(teaService){
  
}

// app.controller('singleOrderController', singleOrderController);
// singleOrderController.$inject = ['teaService'];

// function singleOrderController(teaService){
  
// }