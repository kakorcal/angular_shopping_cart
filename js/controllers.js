app.controller('searchController', searchController);

searchController.$inject = ['$scope', 'teaService'];

function searchController($scope, teaService){
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

  $scope.$watch(function(){
    return teaService.bagCount;
  }, function(){
    vm.bagCount = teaService.bagCount;
  });
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
  this.quantity = '1';

  this.addToBag = function(id){
    teaService.addItem(id, +this.quantity);
  };
}