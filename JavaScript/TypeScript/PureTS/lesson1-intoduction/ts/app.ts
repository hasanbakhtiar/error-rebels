// var info:number = 5;
// var info:string = "hello";
// var info:number[] = [1,2,3,4,5,"Hello"];
// var info:Array<any> = [1,2,3,4,5,"Hello"];

// type infoType = {
//     title:string,
//     price:number,
//     color:string[]
// }


interface infoType {
    title:string,
    price:number,
    color:string[]
}



var info:infoType = {
    title:"Oppo",
    price:3000,
    color:['black','grey']
}
console.log(info);
