const form = document.getElementById('exercicio-dom');

form.addEventListener('submit' , function (e){
    e.preventDefault();
    
    const valorA = document.getElementById("campoA")
    const valorB = document.getElementById("campoB")
    

    if (valorA.value > valorB.value){
        alert('Sucesso');
    }
    else (valorA.value < valorB.value){
        alert('Erro');
    }

    velocidadeA.value = ' '
    velocidadeB.value =' '

    console.log(form)
    
});
