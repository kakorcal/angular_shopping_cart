app.service('teaService', function(){
  const items = seed();
  return {
    getItems(){
      return items;
    }
  };
});