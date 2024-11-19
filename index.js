const form = document.getElementById('exercicio-dom');

form.addEventListener('submit' , function (e){
    e.preventDefault();
    
    const valorA = document.getElementById("campoA")
    const valorB = document.getElementById("campoB")
    

    if (valorA.value > valorB.value){
        alert('Sucesso');
    }
    else{
        alert('Erro');
    }

    valorA.value = ' '
    valorB.value =' '

    console.log(form)
    
});
