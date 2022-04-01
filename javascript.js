let container = document.getElementById("Container");
container.style.backgroundColor = "black";

let l = prompt("How many squares high would you like the grid?");
let w = prompt("How many square wide would you like the grid?");
console.log(container.style.height)
console.log(container.style.width)



for (i = 0; i < (l * w); i++){
    
   
    containerHeight = (l * 12);
    containerWidth = (w * 12);
    container.style.height = containerHeight + "px";
    container.style.width = containerWidth + "px";
    container.style.maxHeight = containerHeight + "px";
    container.style.maxWidth = containerWidth + "px";
    let div = document.createElement('div');
    div.classList.add('grid');
    div.style.backgroundColor = 'aqua';
    div.style.border = "solid";
    div.style.borderWidth = "1px";
    div.style.width = "10px";
    div.style.height = "10px";
    
    div.addEventListener('mouseover', ()=>{
        div.style.backgroundColor = "black";
    })

    const clearBtn = document.getElementById("clear");

    clearBtn.addEventListener('click', ()=>{
        div.style.backgroundColor = "aqua";
        
    })
    container.appendChild(div); 
}








