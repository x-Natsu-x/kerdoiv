document.getElementById("uticel").addEventListener("change", ()=>{
    document.getElementById("eredmeny").innerHTML = document.getElementById("uticel").value
})

document.getElementById("gomb").addEventListener("mouseover", ()=>{
    document.getElementById("gomb").style.backgroundColor = "red"
    document.getElementById("gomb").style.cursor = "pointer"
})

document.getElementById("gomb").addEventListener("mouseout", ()=>{
    document.getElementById("gomb").style.backgroundColor = "blue"
    document.getElementById("gomb").style.cursor = "normal"
})


const leadas = document.getElementById("leadas")

leadas.addEventListener("click", ()=>{
    let szam = 0
    let elso = document.getElementById("nap").value
    let masodik = document.getElementById("lenyilo").value
    let radio = document.querySelector('input[type="radio"][name="rad"]:checked')
    

    if (elso === "" || masodik === "" || !radio) {
        document.getElementById("eredmenyes").innerHTML = "Válassz ki mindent!"
        return
    }

    
    let harmadik = document.querySelector('input[type="radio"][name="rad"]:checked').value

    if (elso.toUpperCase().trim() == "VASÁRNAP") {
        szam+=1
    }
    if (masodik == "angol") {
        szam+=1
    }
    if (harmadik == "kozep") {
        szam+=1
    }
    
    document.getElementById("eredmenyes").innerHTML = szam
})