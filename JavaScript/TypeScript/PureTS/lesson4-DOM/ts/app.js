// var ul:any =  document.querySelector<HTMLUListElement>('ul');
var ul = document.querySelector('ul');
fetch('https://fakestoreapi.com/products')
    .then(function (res) { return res.json(); })
    .then(function (data) {
    var li = "";
    data.map(function (item) {
        li += "<li>".concat(item.title, "</li>");
    });
    ul.innerHTML = li;
});
