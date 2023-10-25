let name = ["Rice", "Dal", "Salt"];
let quantity = [2,3,1];
let price = [60,50,20];

let arr = [];
for(let i = 0 ; i < 3 ; i++)
  {
    let obj = {};
    obj.name = name[i];
    obj.quantity = quantity[i];
    obj.price = price[i];
    arr.push(obj);
  }
// console.log(arr);
let obj = 
  {
    data : arr,
    total: function(data)
      {
        let sum = 0;
        for(let i = 0 ; i < this.data.length ; i++)
          {
            sum += this.data[i].price * this.data[i].quantity;
          }
        console.log(`sum is : ${sum}`);
      }
  }
obj.total();