let btns = document.querySelectorAll(".button");
let scrpri = "";
Array.from(btns).forEach((btn) => {
    btn.addEventListener("click", (event) => {
        flas(btn);
        if ((event.target.innerHTML) == "=") {
            scrpri=eval(scrpri);
            document.querySelector(".p").innerHTML=scrpri;
        }
        else if((event.target.innerHTML)=="AC"){
            scrpri=" ";
            document.querySelector(".p").innerHTML=scrpri;
        }
        else {
            console.log(event.target);
            scrpri = scrpri + event.target.innerHTML;
            console.log(scrpri);
            let p = document.querySelector(".p");
            p.innerText = scrpri;
        }

    })
})
function flas(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");

    },100);
}
