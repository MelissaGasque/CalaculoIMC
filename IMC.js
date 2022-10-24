function calcular(){
    let alt= window.document.getElementById(`alt`)
    let pes = window.document.getElementById(`pes`)
    let res= window.document.getElementById(`res`)
    let altura= Number(alt.value) 
    let peso = Number(pes.value) 
    let imca = (altura*altura)/10000 
    let imc = (peso/imca).toFixed(3)
    
    if(imc<=18.5){
        res.innerHTML = ` O seu IMC é ${imc}! Voce está abaixo do peso.`
    } else if(imc<=24.9){
        res.innerHTML = ` O seu IMC é ${imc}! Parabéns! Voce está saudável.`
    } else if(imc<=29.9){
        res.innerHTML = `O seu IMC é ${imc}! Voce está com Sobrepeso.`
    } else if(imc<=39){
        res.innerHTML = `O seu IMC é ${imc}! Voce está obeso.`
    } else {
        res.innerHTML =`O seu IMC é ${imc}! Cuidado! Voce está com obesidade grave.`
    }
}
    