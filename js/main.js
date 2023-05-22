alert("Hola, vamos a calcular el valor del envío de tu pedido de Cyberwax.")

const calcularEnvio = () =>{
    let valorPedido; //creamos la variable valor Pedido.
    do { // Le pedimos que inserte el monto total de su pedido.
        valorPedido = parseInt(prompt("Inserte el monto final de tu pedido, para saber si tenés que abonar envío"));
        if (!parseInt(valorPedido)) { // Si el valor no es un parseInt le damos una alerta para que inserte un monto valido.
            alert("Inserte un monto válido")
            console.log(valorPedido)
        }
        else {
            if(valorPedido >= 15000){ //Si el valor supera los $15.000, el cliente tiene envío gratuito.
            alert("¡Felicitaciones! Tenés envío gratis.");
            }else {return alert('Tenés que abonar tu envīo. Vamos a calcular el precio en base al peso del paquete.')}
            } //si no supera los 15.000 tiene que abonar envío, y para calcularlo pasamos a la siguiente función.
    }while (!parseInt(valorPedido))

}

calcularEnvio(); //Ejecutamos la función calcularEnvio.

const precioSegunValor = () =>{
    let pesoPedido; // creamos la variable pesoPedido.
    do{ //le pedimos que ingrese el peso, expresado en kilogramos.
        pesoPedido = parseInt(prompt("Ingrese por favor el peso en kg de tu paquete"));
        if (!parseInt(pesoPedido)) { //si el valor no es un parseInt, le pedimos que inserte un peso válido.
        alert("Inserte un peso válido");
    }
    }
    while (!parseInt(pesoPedido)) {
    }
    //Usamos la función de orden superior "find" para encontrar dentro de el array valor Envíos, el precio que esté relacionado al peso del pedido insertado por el cliente.
    const encontrado = valorEnvios.find(item => item.peso >= pesoPedido);
    alert("El valor a abonar es de $" + encontrado.precio + ".");
    }

// Creamos el array valorEnvios, con los distintos valores segun el peso en kg del paquete.
const valorEnvios = [
    { peso: 1, precio: 1000 },
    { peso: 2, precio: 1300 },
    { peso: 5, precio: 1500 },
    { peso: 10, precio: 2500 },
    { peso: 20, precio: 3500 }, 
];

precioSegunValor(); //ejecutamos la función precioSegunValor.

alert("Gracias por comprar en Cyberwax."); //Cierre de interacción con el cliente.




