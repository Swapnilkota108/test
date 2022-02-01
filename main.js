const drawer_elements = document.querySelectorAll(".drawer_elements")
const headers = document.querySelectorAll('h2');
const intro_box = document.querySelector(".intro_box");

headers.forEach(e=>{
    e.addEventListener('click',()=>{
        if(e.innerText == "Quick start"){
            intro_box.innerHTML = ` <h1>Quick start</h1>`;
        }
    })
})