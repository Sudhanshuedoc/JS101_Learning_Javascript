
let details = 
  {
     data : [],
    addStudent : function(name,english,maths,science)
      {
        let obj = {};
        obj.name = name;
        obj.eng = english;
        obj.math = maths;
        obj.sci = science;

        this.data.push(obj);
        // console.log(obj)

      },

    print : function()
{
   console.log(this.data)
},
    maxMarks : function()
      {
        max = -Infinity;

        for(let i = 0; i < this.data.length; i++ )
          {
            let studentData = this.data[i];
            let total = studentData.eng + studentData.math +
                studentData.sci
            // console.log(total);

            if(max < total)
            {
              max = total;

            }
          }
        // console.log(max);
        return(max)
      },
    minMarks : function()
    {
      min = this.maxMarks();

      for(let i = 0; i < this.data.length; i++ )
        {
          let studentData = this.data[i];
          let total = studentData.eng + studentData.math +
              studentData.sci
          // console.log(total);

          if(min > total)
          {
            min = total;

          }
        }
      return min;
    }

  }

details.addStudent("Harsh",30,60,70);
details.addStudent("Rahul",10,10,10);
details.addStudent("nikhil",60,70,80);
// details.print();
console.log(`Max Marks: ${details.maxMarks()}`);
console.log(`Min Marks: ${details.minMarks()}`);