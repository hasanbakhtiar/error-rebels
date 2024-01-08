// async function fetchApi(){
  const fetchApi = async()=>{
   const comingdata = await fetch('https://fakestoreapi.com/products');
   const mydata = await comingdata.json();
   console.log(mydata);
}
fetchApi()