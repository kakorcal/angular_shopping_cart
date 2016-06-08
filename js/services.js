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
    addItemToCart(item, quantity){
      let selectedItem = items.find(cur => cur === item);
      let idx = selectedItems.reduce((acc, cur, idx)=>{
        if(cur._id === selectedItem._id) acc = idx;
        return acc;
      }, -1);

      if(idx !== -1){
        selectedItems[idx].quantity = quantity;
      }else{
        selectedItems.push(Object.assign({quantity}, selectedItem));        
      }

      return selectedItems.length;
    }
  };
});