
// localStorage.setItem('title',"Asus");
// localStorage.setItem('price',"2000");


// document.querySelector('h1').innerHTML = localStorage.getItem("title"); 
// localStorage.clear();


const nav = document.querySelector("nav");

const modeBtn = document.querySelector('#mode');
const langBtn = document.querySelector('#lang');



if (localStorage.getItem("mode") === null) {
  localStorage.setItem("mode","light");
}else{
  modeBtn.onclick = ()=>{
    if (modeBtn.innerHTML === "Dark") {
      nav.className = 'navbar navbar-expand-lg bg-dark navbar-dark';
      modeBtn.innerHTML = "Light";
      localStorage.setItem("mode","dark");
    }else{
      nav.className = 'navbar navbar-expand-lg bg-light navbar-light';
      modeBtn.innerHTML = "Dark";
      localStorage.setItem("mode","light");
    }
  }

  if (localStorage.getItem('mode') === 'light') {
    nav.className = 'navbar navbar-expand-lg bg-light navbar-light';
    modeBtn.innerHTML = "Dark";
  }else{
    nav.className = 'navbar navbar-expand-lg bg-dark navbar-dark';
    modeBtn.innerHTML = "Light";
  }
}
