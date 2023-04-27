const calcularEnvio = () =>{
    let valorPedido;
    do { 
        valorPedido = parseInt(prompt("Inserte el valor final de tu pedido"));
        if (!parseInt(valorPedido)) {
            alert("Inserte un monto válido")
            console.log(valorPedido)
        }
        else {
            if(valorPedido >= 15000){
            return alert("Tienes envío gratis");
            }else{return alert("El valor de tu envío es $2000")}
            }
    }while (valorPedido != NaN)
}

calcularEnvio()



