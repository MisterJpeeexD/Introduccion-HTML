const nombreInput = document.querySelector('#name')
const mensaje = document.querySelector('#mensaje')
const botonPost = document.querySelector('#btn-post')
const contenedorPublicaciones = document.querySelector('#contenedor-post')
 
function crearPublicacion(nombre, mensaje){
    const postUser = document.createElement('div')
    postUser.classList.add("posteo")
    const nombreUsuario = document.createElement('h4')
    nombreUsuario.textContent = nombre;
    const mensajeUsuario = document.createElement('p')
    mensajeUsuario.textContent = mensaje;
    postUser.appendChild(nombreUsuario)
    postUser.appendChild(mensajeUsuario)
    contenedorPublicaciones.appendChild(postUser)
}
 
botonPost.addEventListener('click', function(){
    event.preventDefault()
    const valorInputNombre = nombreInput.value;
    const valorMensaje = mensaje.value;
 
if(valorInputNombre === "" || valorMensaje === ""){
    alert("Debes completar los campos")
    return;
}

    crearPublicacion(valorInputNombre, valorMensaje);
    nombreInput.value = ''
    mensaje.value = ''
})
 
 