app.service('teaService', function(){
  const items = seed();
  const selectedItems = [];
  const categories = items
    .reduce((acc, cur)=>{
      return acc.concat(cur.categories);
    },[])
    .reduce((acc, cur)=>{
      if(!acc[1][cur]){
        acc[1][cur] = cur;
        acc[0].push(cur);
      }
      return acc;
    }, [[],{}])[0];
  
  return {
    getItems(){
      return items;
    },
    getCategories(){
      return categories;
    },
    getSelectedItems(){
      return selectedItems;
    },
    calculateTotal(){
      return selectedItems.reduce((acc, cur)=>{
        return acc + ( (cur.price / 100) * cur.quantity);
      }, 0);
    },
    onEditOrder(item, quantity){
      let order = selectedItems.find(cur => cur === item);
      let idx = selectedItems.reduce((acc, cur, idx)=>{
        if(cur._id === order._id) acc = idx;
        return acc;
      }, -1);
      
      if(quantity) selectedItems[idx].quantity = quantity;

      if(order.edit){
        selectedItems[idx].edit = false;
      }else{
        selectedItems[idx].edit = true;
      }
    },
    onDeleteOrder(item){
      let idx = selectedItems.reduce((acc, cur, idx)=>{
        if(cur._id === item._id) acc = idx;
        return acc;
      }, -1);

      selectedItems.splice(idx, 1);
    },
    addItemToCart(item, quantity){
      let selectedItem = items.find(cur => cur === item);
      let idx = selectedItems.reduce((acc, cur, idx)=>{
        if(cur._id === selectedItem._id) acc = idx;
        return acc;
      }, -1);

      if(idx !== -1){
        selectedItems[idx].quantity = quantity;
      }else{
        selectedItems.push(Object.assign({quantity, edit: false}, selectedItem));        
      }

      return selectedItems.length;
    }
  };
});