var incre=document.getElementById("num")
var show=document.getElementById("save")
var count=0;


function add(){
count+=1
incre.innerHTML=count
}



function save1(){

    show.innerHTML=count;


}




// method number 2
// you can use this method aswell

// var inc = document.getElementById("num");
// var save = document.getElementById("save");
// var count = 0;

// function add() {
//     count += 1;
//     inc.innerText = count;
// }

// function save1() {
//     save.innerHTML = inc.innerText; change this part
// }