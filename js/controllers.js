app.controller('itemsController', itemsController);

itemsController.$inject = ['teaService'];

function itemsController(teaService){
  this.list = teaService.getItems();
}

app.controller('singleItemController', singleItemController);

singleItemController.$inject = ['teaService'];

function singleItemController(teaService){
  
}