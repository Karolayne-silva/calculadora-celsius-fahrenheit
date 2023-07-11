function calcular(){
    let txtcelsius = document.getElementById('txtcelsius');
    let resposta = document.getElementById('resposta');
    let numeroCelsius = Number(txtcelsius.value)
    let valorF = numeroCelsius * 1.8 + 32;
    resposta.innerHTML = `${valorF}°F`;
}