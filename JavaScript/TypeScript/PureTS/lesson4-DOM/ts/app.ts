// var ul:any =  document.querySelector<HTMLUListElement>('ul');
var ul:any =  document.querySelector('ul') as HTMLUListElement;

interface dataType
    {
        id: number,
        title: string,
        price: number,
        description: string,
        category: string,
        image: string,
        rating: {
          rate: number,
          count: number
        }
      }
      


fetch('https://fakestoreapi.com/products')
.then((res:any)=>res.json())
.then((data:dataType[])=>{
    let li:string="";
    data.map((item:dataType)=>{
        li+=`<li>${item.title}</li>`
    })
    ul.innerHTML = li;
})