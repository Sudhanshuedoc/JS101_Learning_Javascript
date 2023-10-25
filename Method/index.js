let obj = 
  {
    data: [
      {name : "Rice" , quantity : 2 , price: 60},
      {name : "Dal" , quantity : 3 , price: 50},
      {name : "Salt" , quantity : 1 , price: 20}
    ],
     total : function(){
       let all = 0;
    for(let i = 0 ; i <this.data.length; i++)
    {
      all += this.data[i].price * this.data[i].quantity;
    }
      return all;
  }
  }
console.log(obj.total());