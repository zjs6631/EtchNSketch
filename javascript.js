let container = document.getElementById("Container");
container.style.backgroundColor = "green";

let l = 16;
let w = 16;
for (i = 0; i < (l * w); i++){
    let div = document.createElement('div');
    div.classList.add('grid');
    div.style.backgroundColor = 'aqua';
    div.style.border = "solid";
    div.style.borderWidth = "1px";
    div.style.width = "10px";
    div.style.height = "10px";
    
    div.addEventListener('mouseover', ()=>{
        div.style.backgroundColor = "purple";
    })
    container.appendChild(div); 
}

const clearBtn = document.getElementById("clear");

clearBtn.addEventListener('click', ()=>{
    
})






