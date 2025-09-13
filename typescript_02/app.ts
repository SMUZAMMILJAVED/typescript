// var input_1=document.getElementById("num1")! as HTMLInputElement;
// var input_2=document.getElementById("num2")! as HTMLInputElement;
// var button=document.querySelector("button")!;
// function add(a:number,b:number){
//     return a+b
// }
// button.addEventListener("click",()=>{
//     console.log(add(+input_1.value,+input_2.value));
// })

// number 5,6.67 ,-90
//string "apple"
//boolean true, false 
// no var only let const'


// let person ="ishaq";  //type fixed hgogai khud hi
// person="56";   

// let person;    //aesy type any rhygi
// person=56;
// person="nadir"   

// let person:string = "muzammil"     //no recommended way

// const names:string[]=["4","4"];
// let names:string[]=[];
// names.push("23");

// const person:{
//     name:string;
//     age:number;
//     email:string;
//     address?:string
// }={
// name:"muzammil",
// age:22,
// email:"s.muzammiljaved@gmail.com",
// }
// person.age=23;
// person.address="street no 07"

// type Person={
//     name:string;
//     age:number;
//     email:string;
//     address?:string
// }

// const person1:Person={
// name:"muzammil",
// age:22,
// email:"s.muzammiljaved@gmail.com",
// }
// person1.age=23;
// person1.address="street no 07"
// type Customer={
//     name:string;
//     age:Number;
//     email:string;
// }
// let customers:Customer[]=[]
// customers.push({
//     name:'muzammil',
//     age:22,
//     email:"s.muzammiljaved@gmail.com"
// });
// let person1:Customer={
//     name:'iqbal',
//     age:32,
//     email:'bilal@gmail.com'
// }
// customers.push(person1);
// const role:[number,string]=[0,"admin"];
// role[2]="bilal" 
// role.push(2); //problem 
// console.log(role);
// let data:string|number;
// data="string";
// data=43;
// function cal(num:number,num2:number,cond:"add"|"sub"){
// if(cond==="add"){
//     return num + num2
// }
// else if(cond==="sub"){
//     return num - num2
// }
// }
// console.log(cal(4,5,"add"));
// let myfunc:(x:number,y:number)=>number;
// function add(a:number,b:number){
//  return a+b;
// }
// myfunc=add;
