let rectangle = {
  perimeter : function(L,B)
    {
      return 2 * (L+B);
    },
  area: function(L,B)
 {
  return L*B;
 }
}
console.log(rectangle.perimeter(2,3));