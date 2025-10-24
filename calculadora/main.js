function sumar(){
    //alert("OK estmos en SUMAR")//
    let num1 = parseInt(document.getElementById("n1").value)
    //alert(num1)
    let num2 = parseInt(n2.value)
    //alert(num2)
    let resultadoSuma = num1 + num2
    //resp.innerHTML=resultadoSuma 
    document.querySelector(".resp").innerHTML=resultadoSuma
}
function restar(){    
    let num1 = parseInt(document.getElementById("n1").value)
    let num2 = parseInt(n2.value)    
    let resultadoResta = num1 - num2
    document.querySelector(".resp").innerHTML=resultadoResta
}
function multiplicar(){    
    let num1 = parseInt(document.getElementById("n1").value)
    let num2 = parseInt(n2.value)    
    let resultadoMultiplicar = num1 * num2
    document.getElementById("resp").innerHTML=resultadoMultiplicar
}
function dividir(){    
    let num1 = parseInt(document.getElementById("n1").value)
    let num2 = parseInt(n2.value)
    let resultadoDividir = num1 / num2
    document.querySelector(".resp").innerHTML=resultadoDividir
}

//function(num1, num2, inst){}