// fetch("http://127.0.0.1:5500/js/data/product.json")//success
// .then(res=>res.json())
// .then(data=>console.log(data))
// .catch(err=>console.log(err));


// const xhttp = new Promise((resolve,reject)=>{
//         const comingData = false;
//         if (comingData) {
//             resolve("Success");
//         }else{
//             reject("Not found 404")
//         }
// })

// xhttp
// .then(res=>console.log(res))
// .catch(err=>console.log(err))



const ul = document.querySelector('ul');

const fetchApi = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            let li = "";
            data.map(cd=>{
                li+=`<li>${cd.title}</li>`
            })
            ul.innerHTML = li;
        })
} 
fetchApi()
