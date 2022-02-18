// Carne - 400 gr por pessoa(de 1 ou 5 horas) + de 6 horas - 650
// Cerveja - 1200 ml por pessoa + 6 horas - 2000 ml
// Refrigerante - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5
// Programa que calcula a quantidade de comida e bebida para fazer um churrasco


let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")
let btnClicar = document.getElementById("btnClicar")

let resultado = document.getElementById("resultado")

btnClicar.addEventListener('click',function(){

    console.log("Calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = beerPP(duracao) * adultos + (beerPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Pet's 2l de bebidas</p>`
    
    
})

function carnePP(duracao){
    if (duracao >=6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPP(duracao){
    if (duracao >=6){
        return 2000;
    }else{
        return 1200;
    }
}

function beerPP(duracao){
    if (duracao >=6){
        return 1500;
    }else{
        return 1000;
    }
}
