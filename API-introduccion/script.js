function showData(title){
    const contenedorPost = document.querySelector("#posts")
    const listaDesordenada = document.createElement("ul")
    const itemLista = document.createElement("li")
    itemLista.textContent = title
    listaDesordenada.appendChild(itemLista)
    contenedorPost.appendChild(listaDesordenada)
}
/* 
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => {
    data.forEach(uniData => {
        showData(uniData.title)
    });
})
.catch (error => console.log(error))
fetchPost()

axios.get("https://jsonplaceholder.typicode.com/posts")
.then(response => {
    const datos = response.data
    datos.forEach(dato => {
        showData(dato.title)
    });
})
.catch(error => console.log(error)) */

const cantidad = Number(prompt("ingrese el numero de post que quiere mostrar: "))
async function fetchPost(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const datos = await response.json()
        for(let i = 0; i < cantidad; i++){
            const dato = datos[i]
            showData(dato.title)
        };
    } catch (error){
        console.log(error)
    }
}

fetchPost()