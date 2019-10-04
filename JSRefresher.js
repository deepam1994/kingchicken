const Username = "John";
var hasPF = false;
var Salary = 90000;

//Arrow Function
  const empdetails = (name,PFexist,income) =>{  
    return('Name of the Employee:'+' '+name+", "+
        'Whether PF exist for the emp:'+' '+PFexist+" ,"+
            'Employee Salary:'+' '+income);
  }
 // console.log(empdetails(Username,hasPF,Salary));

  //Arrow Function using multiple parameter...

  const TotalSalary = (basicsalary,pf)=>{
    return basicsalary + pf;
  };
 // console.log("Total Salary : "+ TotalSalary(90000,5000));

  //Arrow Function using one parameter... 

  const BasicSalary = (basicsalary)=>{
    return basicsalary + 1;
  };
  //console.log("Basic Salary : "+ BasicSalary(90000));

  //Arrow Function using random ...

  const TakehomeSalary = () =>(1+2)
 // console.log("Takehome Salary : "+TakehomeSalary());

  //Objects Properties Methods...
      //Note: In Arrow function this refs will be undefined....
  const provisionDetails = {
    cashew:100,
    moongdhall:150,
    store: function() {
     // console.log("Provision Details : "+'cashew:'+this.cashew+','+'moongdhall: '+this.moongdhall);
    }

  }
  provisionDetails.store();

  //Array Methods.....  
  const veggies =['Tomato','Potato','Lemon'];
  for(let veg in veggies)
  {
   // console.log(veg)
  }
// console.log(veggies.map(veggies =>'Vegs:' +veggies));
// console.log(veggies);
 // var Vegetables = veggies.map(veggies =>'Vegs:' +veggies);
 // console.log(Vegetables);
  //Array Objects Reference Types.....
 // veggies.push('Carrot');
 // console.log(veggies);
  //Spread &Rest Operators.....
  const copiedarray = [...veggies]
//console.log(copiedarray)
const copiedprovision = {...provisionDetails}
//console.log(copiedprovision)
const toArray = (...args)=>{
  return args;
}
//console.log(toArray(1,2,3,4))
  //Destructuring.....
  const names={
    person1:"Yashwanth",
    person2:"Jeevan",
  }
  const printnames =({person1})=>{
    //console.log(person1)
  }
  printnames(names) ///1
  const {person1,person2}=names;
  //console.log("obj:"+person1,person2);///2
  const fruits =["Apple","Mango"];
  const [fruit1,fruit2]=fruits;
  //console.log("Array:"+fruit1,fruit2);
  //Async Code Promises.....
 /// Call Back Start..
  const fetcheddetails = callback =>{
    setTimeout(()=>{
     callback("callback Done")
    },1500);
  }
  setTimeout(()=>{
   // console.log("Timer is Done")
    fetcheddetails(callback =>{
      //console.log(callback);
    });
  },2000);
  /// Call Back Ends..
  /// Promises Start..
  // const reqdetails = () =>{
  //   var Promise = require('promise');
  //   const promises =  Promise((resolve,reject)=>{
  //   //const promises = new Promises((resolve,reject)=>{
  //     setTimeout(()=>{
  //       resolve("Done!");
  //     },1500);
  //   })
  //   return promises
  // //   const promises = new Promises((resolve,reject) =>{
  // //     setTimeout(()=>{
  // //      resolve("resolve Done")
  // //      },1500);
  // //   });
  // //  return promises
    
  // };
  // setTimeout(()=>{
  //   console.log("Timer is Done")
  //   reqdetails()
  //   .then(text=>{
  //     console.log(text);
  //     return reqdetails;
  //   })      
  //     .then(text2 =>{
  //       console.log(text2)
  //     })
  // },2000);
  /// Promises Ends..

//console.log("1");
//console.log("2");