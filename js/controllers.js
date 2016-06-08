//***************************************************************************
  // home page
//***************************************************************************

app.controller('parentController', parentController);
parentController.$inject = ['teaService'];

function parentController(teaService){
  this.selectedCategory = '';
  this.searchText = '';
  this.bagCount = 'Empty!'; 

  // vm.addToBag = function(item, quantity){
  //   debugger;
  //   vm.bagCount = teaService.addItemToCart(item, +quantity);
  // };
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

app.controller('singleItemController', singleItemController);
singleItemController.$inject = ['teaService'];

function singleItemController(teaService){
  let vm = this;
  vm.quantity = '1';

  vm.addToBag = function(item){
    teaService.addItemToCart(item, +vm.quantity);
  };
} 

//***************************************************************************
  // checkout page
//***************************************************************************

app.controller('checkoutController', checkoutController);
checkoutController.$inject = ['teaService'];

function checkoutController(teaService){
  this.selectedItems = teaService.getSelectedItems();
  this.price = teaService.calculateTotal();
}

app.controller('orderTotalController', orderTotalController);
orderTotalController.$inject = ['teaService'];

function orderTotalController(teaService){

}

app.controller('orderTableController', orderTableController);
orderTableController.$inject = ['teaService'];

function orderTableController(teaService){

}

app.controller('singleOrderController', singleOrderController);
singleOrderController.$inject = ['teaService'];

function singleOrderController(teaService){
  
}