let inputField = document.querySelector("#inputField");
let translateBtn = document.querySelector("#translateBtn");
let outputField = document.querySelector("#outputField");
let translateTo = document.querySelector("#translateTo");

async function translate (){
    
    let url = "http://127.0.0.1:3000/translate";
    
    let res = await fetch(url,{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify({
            text : inputField.value,
            translateTo : translateTo.value,
        })
    })

    res = await res.json();

    console.log(res);

    outputField.innerText = res.text;

    
}


translateBtn.addEventListener("click",()=>{
    translate();
})