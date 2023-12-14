const modeBtn = document.querySelector('button');
const nav = document.querySelector('#mode');
modeBtn.onclick=()=>{
    if (nav.className == "light") {
        nav.className = "dark"
    }else{
        nav.className = "light"

    }
}

