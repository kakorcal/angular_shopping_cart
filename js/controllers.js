app.controller('parentController', parentController);

parentController.$inject = ['teaService'];

function parentController(teaService){
  this.selectedCategory = null;
  this.searchText = '';
  this.selectedItems = [];
  this.bagCount = 'Empty!'; 
}

app.controller('searchController', searchController);

searchController.$inject = ['teaService'];

function searchController(teaService){
  let vm = this;
  vm.categories = teaService.getCategories();
  vm.category = null;
  vm.text = '';
  vm.bagCount = 'Empty!';

  vm.searchedCategory = function(){
    teaService.searchedCategory(vm.category);
  };

  vm.searchedText = function(){
    teaService.searchedText(vm.text);
  };

  // $scope.$watch(function(){
  //   return teaService.bagCount;
  // }, function(){
  //   vm.bagCount = teaService.bagCount;
  // });
}

app.controller('itemsController', itemsController);

itemsController.$inject = ['teaService'];

function itemsController(teaService){
  let vm = this;
  vm.list = teaService.getItems();
  vm.category = teaService.selectedCategory;
  vm.searchText = teaService.searchText;
  vm.sortByPrice = null;

  // $scope.$watchCollection(function(){
  //   return [teaService.selectedCategory, teaService.searchText];
  // }, function(){
  //   vm.category = teaService.selectedCategory;
  //   vm.searchText = teaService.searchText;
  // });
}

app.controller('singleItemController', singleItemController);

singleItemController.$inject = ['teaService'];

function singleItemController(teaService){
  let vm = this;
  this.quantity = '1';

  this.addToBag = function(id){
    teaService.addItem(id, +this.quantity);
  };
}