// 21)

let x = "John";
let y = "Doe";
console.log("John <> Doe");

// 22)
let personalDetails = {
    name: "Austine",
    surname: "Uwumwonse",
    email: "blinkaustine@gmail.com",
}
// 23)
delete personalDetails.email;

// 24)
let arrString = [
    "me", "you","i", "him", "her", "they",
     "them", "those", "yours", "theirs",
]

// 25)
function string (value){
    for (i = 0; i < value.length; i++){
        console.log(value[i]);
    }
}string(arrString);

// 26)
let rand = [];
function rand100(){
    for (i = 0; i < 100; i++) {
        let randCalc = Math.floor(Math.random() * 100);
        rand.push(randCalc);
    }console.log(rand);
}rand100();

// 27)
let rando = [];
function maxMinNum(){
    for (i = 0; i < 100; i++) {
        let randCalc = Math.floor(Math.random() * 100);
        rando.push(randCalc);
    }
    console.log(Math.max(...rand));
    console.log(Math.min(...rand));
}maxMinNum();

// 28)

function randArr(){
    let arrOfArr = [
        [], [], [],
    ]
    for (i = 0; i < 100; i++) {
        let randCalc = Math.floor(Math.random() * 10);
        let randCalc1 = Math.floor(Math.random() * 50);
        let randCalc2 = Math.floor(Math.random() * 100);
        arrOfArr[0].push(randCalc);
        arrOfArr[1].push(randCalc1);
        arrOfArr[2].push(randCalc2);
    }console.log(arrOfArr);
}randArr();

// 29)
function longestPar(par1, par2){
    
       if(par1.length > par2.length){
           console.log(par1);
       }  else 
    console.log(par2)
}longestPar([1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8]);

// 30)
function longestParSum(par, par12){
    let sum = 0;
    let sum1 = 0;

    for (i = 0; i < par.length; i++){
        sum += par[i];
    }
    for (i = 0; i < par12.length; i++){
        sum1 += par12[i];
    }

    if(sum > sum1){
        console.log(sum);
    }  else 
 console.log(sum1)
}longestParSum([1,2,3,4,5,6,7,], [1,2,3,4,5,6,7,8]);


// DOM EXCERCISES
// 31)
document.getElementById("container");

// 32)
document.getElementsByTagName("td");

// 33)
// let tableText = document.querySelectorAll("td").length;
// for (i = 0; i < tableText; i++){
//     document.querySelectorAll("td")[i].innerHTML = "blank";
// }

// 34)
// function myFunction(){
// document.querySelector("h1").innerHTML = "goodbye";
// }myFunction();

// 35)
function  insertRow(){
    let table = document.querySelector("table");
    let newRow = table.insertRow(0);
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = "new cell";  
}insertRow();

// 36)
function fun() {  
    var a = document.getElementsByTagName("tr");
    for (i = 0; i < a.length; i++){
      
    a[i].className += " " + "test";

    }document.getElementsByClassName("test");


}
fun();

// 37) add bg-color to links
function backGroundColor(){
    let anchor = document.getElementsByTagName("a")
    for (i = 0; i < anchor.length; i++){
   anchor[i].style.backgroundColor = "blue";
}
}backGroundColor();


// 38) onload
function loadPage(){
    console.log("Page loaded");
}loadPage();

// 39) add new items to a list
function items(){
  let x = document.getElementsByTagName("ol");
  let y = document.createElement("li");
  let t = document.createTextNode("Aries born");
  y.appendChild(t);
  document.getElementById("list").appendChild(y);
}items();

//40) empty list
// function emptyList(){
// document.getElementById("list").innerHTML = "";
// }emptyList();

//41) add an eventlistener
var link = document.querySelectorAll("a").length;
for (i = 0; i < link; i++) {
  document.querySelectorAll("a")[i].addEventListener
  ("mouseover", ResponseMouseOver)
function ResponseMouseOver (event) { 
  event.preventDefault();
    alert(this.href);
  }
}

//42)
function buttonHide(){

let imageButton = document.createElement("button");
imageButton.innerText = "Hide all images";
imageButton.id = "hideBtn"
document.body.appendChild(imageButton);


imageButton.addEventListener("click", function(){
    let image = document.querySelectorAll("img");
    for(i = 0; i < image.length; i++ ) {
    image[i].style.display = "none";
 
}
});
}
buttonHide();

//43)
function tableButton(){
    let btn = document.createElement("button");
    btn.innerText = "hide/show table";
    document.body.appendChild(btn);

    btn.addEventListener("click", function(){
        let table = document.querySelector("table");
      
        if (table.style.display === "block"){
            table.style.display = "none";
        } else {
            table.style.display = "block";
        }
    });

} tableButton();

//44)
function Calc(){
    let sum = 0;
  
    let numericValues = document.getElementsByClassName("num");
    for(i = 0; i < numericValues.length; i++){
       let num = parseInt(numericValues[i].innerHTML);

     sum += num;
            
         
    } console.log(sum);

}Calc();

//45)

    var head = document.querySelector("h1");

    head.addEventListener("click", function () { 
        var heading = head.innerHTML;
         head.innerHTML = heading.slice(0, heading.length -1);
 });
 
//46)
function tdBgColor(){
    let t =  document.querySelectorAll("td");
      
    for (i = 0; i < t.length; i++) {
       
      t[i].addEventListener("click", function() { 
       
       this.style.backgroundColor = "blue";
      });
}
}tdBgColor();

//47)

let td = document.getElementsByTagName("td");
let del = document.createElement("button");

del.innerText = "delete cell";
document.body.appendChild(del);

del.addEventListener("click", function(){
for(i =0; i < td.length; i++){
    let cell = td[Math.floor(Math.random()*td.length), 1];
    td[i].remove(cell)[0];
}
});

//48)
let tdCell = document.querySelectorAll("td");

for(i = 0; i < tdCell.length; i++){
tdCell[i].addEventListener("mouseover", function(event){
  event.preventDefault();  
 this.style.borderColor = "pink";
    });
}

//49)
function newTable(){
let newT = document.createElement("table");
newT.id = "newTable"
let newTBody = document.createElement("tbody");
newT.appendChild(newTBody);

for (i = 0; i < 4; i++ ){
    let newRow = newTBody.insertRow();
   
    for (j = 0; j < 3; j++){
            let newCell = newRow.insertCell();
           newCell.innerText= "new table";

        } 
    }
document.body.appendChild(newT);

}newTable();

//50)
function removeLastTable(){
    let removeTab = document.getElementById("newTable");
    let parentEl = removeTab.parentElement;
    parentEl.removeChild(removeTab);

}removeLastTable();