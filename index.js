const form = document.getElementById('exercicio-dom');

form.addEventListener('submit' , function (e){
    e.preventDefault();

    const velocidadeA = document.getElementById("campoA")
    const velocidadeB = document.getElementById("campoB")

    let primeiroCampo = parseFloat(velocidadeA.value)
    let segundoCampo = parseFloat(velocidadeB.value)
    
    if (primeiroCampo > segundoCampo){
        alert('A Primeira Velocidade inserida esta Maior');
    }
    else if (primeiroCampo < segundoCampo){
        alert('A segunda Velocidade inserida esta Maior ');
    }
    velocidadeA.value = ' '
    velocidadeB.value =' '

    console.log(form)
    
});