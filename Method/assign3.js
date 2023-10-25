let obj = {
   sales : [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
  ],
  calculateSalesTotal : function(){
  for(let i = 0 ; i < this.sales.length; i++)
    {
      if(this.sales[i].discount == undefined)
      {
        this.sales[i].discount = 0.0
      }
      this.sales[i].sale = this.sales[i].original - (this.sales[i].discount * this.sales[i].original);
      this.sales[i].total = this.sales[i].sale * this.sales[i].stock;
    }
    console.log(obj.sales)
  }
}
obj.calculateSalesTotal();