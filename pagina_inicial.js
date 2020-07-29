$("#texto2").hide();
$("#desaparecer").hide();
let botao = document.getElementById("aparecer");
let botao2 = document.getElementById("desaparecer");
botao.onclick = function(){
    $("#texto2").show("slow",function(){
        $("#aparecer").hide("slow");
        $("#desaparecer").show("slow",function(){
            botao2.onclick = function(){
                $("#desaparecer").hide("slow");
                $("#texto2").hide("slow");
                $("#aparecer").show("fast");   
            }

        });
        
    })
}