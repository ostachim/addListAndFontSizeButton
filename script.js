const btn = document.querySelector("button");
const ul = document.querySelector("ul");
let elementFontSize = 10;

for(let i=0; i <= 10; i++){
    let liItem = document.createElement("li");
    liItem.textContent = "element " + i;
    ul.appendChild(liItem);
}
const li = document.querySelectorAll("li");

btn.addEventListener("click",function(){
    elementFontSize++;
    for(let i = 0;i <= li.length;i++){
        li[i].style.fontSize = elementFontSize + "px";
        li[i].style.display = "block";
    }
});