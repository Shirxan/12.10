let opc = document.querySelector('#opacity');
let bdy=document.querySelector("body")
let borderer = document.querySelector("#border");
let shekil = document.querySelectorAll('img');
let dv = document.querySelector('#elebele')

opc.addEventListener("input",(e)=>{
    dv.style.opacity = opc.value
    localStorage.setItem('opacity',opc.value)
 yenile()
})
borderer.addEventListener("input",(e)=>{

    for(let i = 0;i<shekil.length;i++){
        shekil[i].style.borderRadius = borderer.value + `%`
    }
    localStorage.setItem('border',borderer.value)

})
// localYaz(borderer.value)

//  localStorage.getItem("opacity")
function yenile(){
  
 localStorage.getItem("opacity")
}