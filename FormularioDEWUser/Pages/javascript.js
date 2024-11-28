let checkbox = document.getElementById("checkContraseña")
let inputContraseña = document.getElementById("contraseña")

checkbox.addEventListener("click", () => {
    if (checkbox.checked)
    {
        inputContraseña.type = "text"
    }
    else
    {
        inputContraseña.type = "password"
    }
})

