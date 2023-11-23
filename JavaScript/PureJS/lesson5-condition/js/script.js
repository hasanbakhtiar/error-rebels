const time = 7;

if (time >= 5 && time <= 9) {
    console.log('good morning');
  switch(time){
        case 7:
            console.log('get up');
        break;
        case 9:
            console.log('get breakfast');
        break;
  }

}else if(time >= 10 && time <= 17){
    console.log('good afternoon');
}else if(time >= 18 && time <= 21){
    console.log('good evening');
}else if(time >= 22 && time <= 23){
    console.log('good night');
}else{
    console.log("no time");
}

// let time = 5


// switch (time) {
//     case 5:
//         time = 4
//        if (time<5) {
//          console.log('05:00');
//        }
//         break;
//     case 10:
//         console.log("10:00");
//         break;
//     case "Hello":
//         console.log('Hello everyone');
//         break;
//     default :
//     console.log('kesildiz');
//     break;
// }



