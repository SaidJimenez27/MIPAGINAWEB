//carrito
let carrito = [];
//agregar productos al carrito
function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    actualizarCarrito();
}
//actualizar carrito y la suma de los productos
function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElement = document.getElementById('total');
    listaCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.producto} - Bs${item.precio}`;
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = () => eliminarDelCarrito(index);
        li.appendChild(botonEliminar);
        listaCarrito.appendChild(li);
        total += item.precio;
    });
    totalElement.textContent = `Total: Bs${total}`;
}
//eliminar producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function validarFormulario(){
    let valido = true;
    // Validar el nombre
    const nombre = document.getElementById('nombre').value;
    if(nombre.length < 3){
        document.getElementById('errorNombre').textContent = 'El nombre por lo menos debe tener 3 caracteres';
        valido = false;
    } else {
        document.getElementById('errorNombre').textContent = '';
    }
    // Validar el email
    const email = document.getElementById('email').value;
    if(!email.includes('@') || !email.includes('.')){
        document.getElementById('errorEmail').textContent = 'Ingrese un correo válido';
        valido = false;
    } else {
        document.getElementById('errorEmail').textContent = '';
    }
    // Una vez validado
    if(valido){
        alert('Pedido enviado Correctamente');
        return true;
    } else {
        return false;
    }
}