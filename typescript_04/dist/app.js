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
function log(creature) {
    console.log(creature.name);
    if ("flyingSpeed" in creature) {
        console.log(creature.flyingSpeed);
    }
    if ("runningSpeed" in creature) {
        console.log(creature.runningSpeed);
    }
}
log({ name: "hen", flyingSpeed: 50 });
export {};
//# sourceMappingURL=app.js.map