// barra de progresso do index
var currentLength;
        function increaseLength(){
            currentLength = document.getElementById("progress").value;
            if (currentLength < 90) {
                currentLength += 10;
                document.getElementById("progress").value = currentLength;
            }

            else if (currentLength >= 90 && currentLength < 100) {
                currentLength = 100;
                document.getElementById("progress").value = currentLength;

            }

            else{
                alert("You reached the maximum length of the progressbar!");
            }
        }

        function decreaseLength(){
            currentLength = document.getElementById("progress").value;
            if (currentLength > 10) {
                currentLength -= 10;
                document.getElementById("progress").value = currentLength;
            }

            else if (currentLength > 0 && currentLength <= 10) {
                currentLength = 0;
                document.getElementById("progress").value = currentLength;
            }

            else{
                alert("You reached the minimum length of the progressbar!");
            }
        }

// script página de objetivos
document.addEventListener('DOMContentLoaded', function() {


    ul = document.querySelector('ul')
    botao = document.querySelector('input[type="submit"]')
    texto = document.querySelector('input[type="text"]')
    lis = document.querySelectorAll('li')
    i = 0
    botao.addEventListener('click',function(event){
        li = document.createElement('li')
        li.innerHTML = texto.value
        ul.appendChild(li)
        ex = i

        if (ex != i + 1){
            ex = i += 1
            localStorage.setItem(ex,li.innerHTML)

        }
        

        event.preventDefault()
    })

    key = 1
    while (key <= localStorage.length){
        li = document.createElement('li')
        texto = localStorage.getItem(key)
        li.innerHTML = texto
        ul.appendChild(li)
        key += 1
    }



})