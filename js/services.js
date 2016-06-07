app.service('teaService', function(){
  const items = seed();
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
    selectedCategory: null,
    searchText: '',
    selectedItems: {},
    bagCount: 'Empty!',
    getItems(){
      return items;
    },
    getCategories(){
      return categories;
    },
    searchedCategory(category){
      this.selectedCategory = category;
    },
    searchedText(text){
      this.searchText = text;
    },
    addItem(id, quantity){
      this.selectedItems[id] = quantity;
      this.bagCount = Object.keys(this.selectedItems).length;
    }
  };
});