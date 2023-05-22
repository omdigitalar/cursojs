const calcularEnvio = () =>{
    let valorPedido;
    do { 
        valorPedido = parseInt(prompt("Inserte el valor final de tu pedido, para saber si tiene que abonar envío"));
        if (!parseInt(valorPedido)) {
            alert("Inserte un monto válido")
            console.log(valorPedido)
        }
        else {
            if(valorPedido >= 15000){
            alert("¡Felicitaciones! Tienes envío gratis.");
            }else {return alert('Deberás abonar tu envīo. Vamos a calcular el precio en base al peso del paquete.')}
            }
    // }while (valorPedido != NaN)
    }while (!parseInt(valorPedido))

}
calcularEnvio();

const precioSegunValor = () =>{
    let pesoPedido;
    do{ 
        pesoPedido = parseInt(prompt("Ingrese por favor el peso en kg de su paquete"));
        if (!parseInt(pesoPedido)) {
        alert("Inserte un peso válido");
    }
    }
    while (!parseInt(pesoPedido)) {
    }
    const encontrado = valorEnvios.find(item => item.peso >= pesoPedido);
    alert("El valor a abonar es de $" + encontrado.precio + ".");
    }



// const precioSegunValor = () =>{
//     let = pesoPedido = prompt("Ingrese por favor el peso en kg de su paquete");
//     while (!parseInt(pesoPedido)) {
//         alert("Inserte un peso válido");
//     }
//     const encontrado = valorEnvios.find(item => item.peso >= pesoPedido);
//     alert("El valor a abonar es de $" + encontrado.precio + ".");
//     }


const valorEnvios = [
    { peso: 1, precio: 1000, dimensiones: 90 },
    { peso: 2, precio: 1300, dimensiones: 90 },
    { peso: 5, precio: 1500, dimensiones: 110 },
    { peso: 10, precio: 2500, dimensiones: 130 },
    { peso: 20, precio: 3500, dimensiones: 170 }, 
];

precioSegunValor();

alert("Gracias por comprar en Cyberwax.");




