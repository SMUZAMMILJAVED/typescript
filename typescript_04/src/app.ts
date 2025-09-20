            //tpye and interface
// type Person={
// name:string;
// }
// interface Person{
//     name:string
//     speak():void
// }
        // use type and interface with import export method 
// import type {Person} from './type'
// const obj:Person={
//     name:"muz",
//     speak() {
        
//     },
// }

            // interfaces implements in Class 
// class Human implements Person{

//     constructor(public name:string,public roll:number){

//     }
//     speak(): void {
        
//     }
//     addsKill(){

//     }
// }

                       //advance types
// union 
// type Customer=number|boolean|"test"
// let bilal:Customer="fail"; //error
// bilal="test"; //work
                      // intersection 
// type Bird={
// name:string;
// flyingSpeed:number
// }
// type Animal={
//     name:string;
//     runningSpeed:number
// }
// type Creature=Bird & Animal;
// const abc:Creature={
//     name:"hen",
//     runningSpeed:20,
//     flyingSpeed:40
// }
             // intersection  with interface
// interface Bird{
// name:string;
// flyingSpeed:number
// }
// interface Animal{
//     name:string;
//     runningSpeed:number
// }
// interface Creature extends Bird , Animal{}
// const abc:Creature={
//     name:"hen",
//     runningSpeed:20,
//     flyingSpeed:40
// }
                // type gurads 
type Bird={
    name:string;
    flyingSpeed:number
}
type Animal={
    name:string;
     runningSpeed:number
}
type Creature=Bird |Animal;
function log(creature:Creature){
    console.log(creature.name);
    if("flyingSpeed" in creature){
        console.log(creature.flyingSpeed);
    }
     if("runningSpeed" in creature){
        console.log(creature.runningSpeed);
    }
}
log({name:"hen",runningSpeed:60});