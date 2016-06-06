app.service('teaService', function(){
  const items = seed();
  const categories = items.reduce((acc, cur)=>{
    return acc.concat(cur.categories);
  },[]).reduce((acc, cur)=>{
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
    }
  };
});