app.controller('searchController', searchController);

searchController.$inject = ['teaService'];

function searchController(teaService){
  this.categories = teaService.getCategories();
  this.category = null;
  this.text = '';

  this.searchedCategory = function(){
    teaService.searchedCategory(this.category);
  };
  this.searchedText = function(){
    teaService.searchedText(this.text);
  }
}

app.controller('itemsController', itemsController);

itemsController.$inject = ['$scope','teaService'];

function itemsController($scope, teaService){
  let vm = this;
  vm.list = teaService.getItems();
  vm.category = teaService.selectedCategory;
  vm.searchText = teaService.searchText;
  vm.sortByPrice = null;

  $scope.$watchCollection(function(){
    return [teaService.selectedCategory, teaService.searchText];
  }, function(newState, oldState){
    vm.category = newState[0];
    vm.searchText = newState[1];
  });
}

app.controller('singleItemController', singleItemController);

singleItemController.$inject = ['teaService'];

function singleItemController(teaService){
  this.quantity = 1;

  this.addToBag = function(id){
    teaService.addItem(id, this.quantity);
  };
}