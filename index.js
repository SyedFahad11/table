
const names = ["Anakin","Obi-Wan","Luke","Leia"];
var prev='';
for(var i=0;i<names.length;i++){
    prev=prev+"<tr><td>"+names[i]+"</td></tr>"
    document.getElementsByTagName("table")[0].innerHTML=prev;
}
const button=document.getElementsByTagName("button")[0];
button.addEventListener("click",event1)

function event1(){

    var check=document.getElementsByTagName("table")[0].style.visibility;
    if(check==="hidden"){
        document.getElementsByTagName("table")[0].style.visibility="visible";
        document.querySelector(".inv").style.visibility="hidden";
    }
    else{
        document.getElementsByTagName("table")[0].style.visibility="hidden";
        document.querySelector(".inv").style.visibility="visible";
    }

}

