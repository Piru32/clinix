let bandera = true 
let buscar = document.getElementById("buscar")
let boton = document.getElementById("boton")

boton.addEventListener("click", function(event) {
    event.preventDefault()

    if (bandera==true) {
        buscar.classList.remove("invisible")
    }else{ 
        buscar.classList.add("invisible")

    }

    bandera= !bandera

})

let producto = { 
    nombre : "ps4",
    capacidad : "1TB",
    foto : "Nan",
    estado : "segunda",
    precio : "500.000"
}
console.log(producto)
console.log(producto.nombre)