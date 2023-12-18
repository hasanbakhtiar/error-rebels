// const headerText = document.createElement("h1");
// headerText.innerHTML= "Hello"
// document.body.appendChild(headerText);

// const a = document.querySelector('ul').childNodes[0].childNodes[0].parentElement.parentElement.firstChild.nextSibling.childNodes[0].nodeValue;
// console.log(a);



// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const sendMail = (e) => {
//     e.preventDefault();
//     document.querySelector('h1').innerHTML = input.value
// }

// form.onsubmit = sendMail;


const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const toDo = (e) => {
    e.preventDefault();
  if (!input.value) {
    alert("Please, fill input")
  }else{
    const li = document.createElement('li');
    li.innerHTML  = input.value;
    ul.appendChild(li);
    input.value = "";
    li.onclick =()=>{
        li.style.textDecoration = 'line-through'
    }
    li.ondblclick =()=>{
        li.remove()
    }
  }
    

}
form.onsubmit = toDo; 
