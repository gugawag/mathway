let comentario = document.getElementById("enviar");
let escrever = document.getElementById("comentario");
let comentarios = [];
let posicao = 0
comentario.onclick = function(){
    if (escrever.value != " ") {
        comentarios.push(escrever.value);
        let li = document.createElement("li");
        li.innerHTML = comentarios[posicao];
        document.getElementById("area_comentario").append(li);
        posicao++;
        escrever.value = " ";
    }
}
//jjjjjhhhgggfdfghjk