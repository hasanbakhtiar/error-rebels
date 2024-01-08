const  loadDoc = () => {
    let infoData = new XMLHttpRequest();
    // return infoData;
    infoData.onreadystatechange = function() {

         document.getElementById("demo").innerHTML = this.responseText;

      };
      infoData.open("GET", "ajax_info.txt", true);
      infoData.send();
  }
document.querySelector('button').onclick = loadDoc;