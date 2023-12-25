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



const row = document.querySelector('.row');

const fetchApi = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            let li = "";
            data.map(cd=>{
                li+=`<div class="col-12 col-sm-6 col-md-4">
                <div class="card">
                    <img src="${cd.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${cd.title}</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
            </div>`
            });
            row.innerHTML = li;
        })
} 
fetchApi()



// const ul = document.querySelector('ul');

// const fetchApi = () => {
//     fetch("https://fakestoreapi.com/products")
//         .then(res => res.json())
//         .then(data => {
//             let li = "";
//             const a = [];
//             data.map(cd=>{
//                 // li+=`<li>${cd.title}</li>`
//                 a.push(cd.title)
//             });
//             console.log(a.sort());
//             const linew = document.querySelectorAll('li');
//             for(let b in a.sort()){
//                 linew[b].innerHTML = a[b];
//             }
//             ul.innerHTML = li;
//         })
// } 
// fetchApi()
