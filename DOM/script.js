const p_id = document.getElementById(`p_id`);
console.log(p_id)

const p_element = document.getElementsByClassName('p_class');
console.log(p_element[0])

const p_class = document.querySelector(`.p_class`)
console.log(p_class)

const p_queryAll = document.querySelectorAll(`p`)
console.log(p_queryAll)

p_queryAll.forEach(element => {
    console.log(element)
});

/* Propiedades y metodos */
p_id.textContent = "Texto cambiado"
p_id.style.color = "blue"
p_id.innerHTML = "<Strong> Texto en negrita </Strong>"
p_id.innerHTML = "<ul><li>Primer elemento</li><li>Segundo Elemento</li></ul>"
const nuevoParrafo = document.createElement("p")
nuevoParrafo.textContent = `Este es un nuevo parrafo desde js`
document.body.appendChild(nuevoParrafo)
nuevoParrafo.remove()

function capturarDato(){
    const nombre = prompt("Cual es tu nombre: ")
    console.log(nombre)
}

const boton = document.querySelector("button")
boton.addEventListener("click",function(){
    const nombre = prompt("Escribe tu nombre para evento: ")
    console.log(`${nombre} desde addEventListener`)
    alert("Tu nombre es "+nombre)
})

