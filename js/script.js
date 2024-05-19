// barra de progresso do index
var currentLength;
var ultima_posicao = 1;
function increaseLength() {
    currentLength = document.getElementById("progress").value;
    if (currentLength < 90) {
        currentLength += 10;
        document.getElementById("progress").value = currentLength;
    }

    else if (currentLength >= 90 && currentLength < 100) {
        currentLength = 100;
        document.getElementById("progress").value = currentLength;

    }

    else {
        alert("You reached the maximum length of the progressbar!");
    }
}

function decreaseLength() {
    currentLength = document.getElementById("progress").value;
    if (currentLength > 10) {
        currentLength -= 10;
        document.getElementById("progress").value = currentLength;
    }

    else if (currentLength > 0 && currentLength <= 10) {
        currentLength = 0;
        document.getElementById("progress").value = currentLength;
    }

    else {
        alert("You reached the minimum length of the progressbar!");
    }
}

// script página de objetivos
document.addEventListener('DOMContentLoaded', function () {
    let botao_adicionar = document.querySelector(".adicionar-elemento");
    let botao_remover = document.querySelector(".remover-elemento");
    
    botao_adicionar.addEventListener("click", function () {
        let input_text = document.querySelector("input[type=text]");
        texto = input_text.value
        chave = ultima_posicao + ""
        localStorage.setItem(chave, texto);
        ultima_posicao++;
        
        let novo_elemento = document.createElement("li");
        novo_elemento.innerHTML = texto;
        document.querySelector("ul").appendChild(novo_elemento);

        input_text.value = "";
    });

    botao_remover.addEventListener("click", function () {
        chave = ultima_posicao-1 + ""
        localStorage.removeItem(chave);
        ultima_posicao--;
        
        document.querySelector("ul").lastChild.remove();
    });


});

document.addEventListener('DOMContentLoaded', function (evento) {
    let main_tp = document.querySelector(".main_tp");
    let x = main_tp.querySelector('.container');
    let peitoral = x.querySelector('map');
    let area = peitoral.querySelector('area');
    let frente = x.querySelector('img');

    area.addEventListener('mouseover',function(evento){
        frente.src = '../img/frente_peitoral_selecionado.png';
        evento.stopPropagation();
    });
    area.addEventListener('mouseout',function(evento){
        frente.src = '../img/frente.png';
        evento.stopPropagation();
    });
})