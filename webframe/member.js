let index = 1;
    
    function registration(){
        let id = new Date().getFullYear().toString() + index;
        index++;

        let name = document.getElementById("na").values;
        let img = document.getElementById("img").values;
        let ipath = "./images/" + img + ".jpg";
   
        let str="<tr><td>"+id+"</td><td>"+name+"</td><td><img src='"+ipath+"' width='100'></img></td></tr>";
        
        let tbody = document.getElementById("tbody");
        tbody.innerHTML += str;

    }
window.onload = function(){
  
    let reg = document.getElementById("reg");
    reg.addEventListener("click",registration());

}

