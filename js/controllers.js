app.controller('searchController', searchController);

searchController.$inject = ['teaService'];

function searchController(teaService){
  this.categories = teaService.getCategories();
}

app.controller('itemsController', itemsController);

itemsController.$inject = ['teaService'];

function itemsController(teaService){
  this.list = teaService.getItems();
}

app.controller('singleItemController', singleItemController);

singleItemController.$inject = ['teaService'];

function singleItemController(teaService){
  
}