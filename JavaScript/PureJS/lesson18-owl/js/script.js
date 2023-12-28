const span = document.querySelector('span');
const btn = document.querySelector('button');


const functOne = (a,b)=>{
      span.innerHTML = a+b;
}


var myclick = "show";


btn.onclick = ()=>{
  if (myclick === 'show') {
    functOne(123,345);
    myclick = "hide";
  }else{
    span.innerHTML = ""
    myclick = 'show'
  }
}