$("#opcoes").hide();
$("#per_res").hide();
$("#temas_algebra").hide();
$("#temas_aritmetrica").hide();
$("#pontuacao").hide();
$("#video_1grau").hide();
$("#video_2grau").hide();
$("#inicio_alternativo").hide();
let equacao_1grau = document.getElementById("equacao_1grau");
let equacao_2grau = document.getElementById("equacao_2grau_bascara");
let pontos = document.getElementById("acertou")
let inicio = document.getElementById("inicio");
let perguntas_1grau = ["(PUC – RJ) 3/5 de um número somados a ½ é igual a 2/3 desse mesmo número. Indique a opção que apresenta esse número", "Qual a resposta da equação 13x-23-45=-7x+12:", "Qual o resultado da equaçao 3x-10+13=-2x+28?", "Qual a resposta da equação 20x-30=40+30-20?", "Qual a resposta da equação 19+2x-13=10-20?", "(UFG – 2010 – 2ª Fase) Uma agência de turismo vende pacotes familiares de passeios turísticos, cobrando para crianças o equivalente a 2/3 do valor para adultos. Uma família de cinco pessoas, sendo três adultos e duas crianças, comprou um pacote turístico e pagou o valor total de R$ 8.125,00. Com base nessas informações, calcule o valor que a agência cobrou de um adulto e de uma criança para realizar esse passeio:", "(UFG – 2010 – 2ª Fase) Segundo uma reportagem publicada na Folha on-line (31/08/2009), a chamada camada pré-sal é uma faixa que se estende, abaixo do leito do mar, ao longo dos estados de Espírito Santo e Santa Catarina e engloba três bacias sedimentares. O petróleo encontrado nessa área está a profundidades que superam os 7.000 m, abaixo de uma extensa camada de sal, e sua extração colocaria o Brasil entre os dez maiores produtores do mundo. Para extrair petróleo da camada pré-sal, a Petrobras já perfurou poços de petróleo a uma profundidade de 7.000 m, o que representa um aumento de 582% em relação à profundidade máxima dos poços perfurados em 1994. De acordo com essas informações, calcule a profundidade máxima de um poço de petróleo perfurado pela Petrobras, no ano de 1994.", "Resolva a equação: 2x+28=x+18 e descubra o valor de x;", "Resolva a equação:  5x−3=2x+9 descubra o valor de x:", "2 + 3[x -(3x + 1)] = 5[x -(2x - 1)] descubra o valor de x:"];
let perguntas_2grau = ["Resolva a equação do 2° grau 2x² + x – 3 = 0 quais são os valores de x:", "– 3x² + 18x – 15 = 0. Quais são os valores de x:", "x2 - 6x = 0 quais são os valores de x:", "(PUCCAMP) Se v e w são as raízes da equação x2 + ax + b = 0, em que a e b são coeficientes reais, então v2 + w2 é igual a:", "(UEL) A soma de um número racional não inteiro com o dobro do seu inverso multiplicativo é 33/4. Esse número está compreendido entre:", "Escolha qual das alternativas correspondem as letras a, b e c, da equação x²+9x+8=0?", "O quadrado de um número diminuido de 15 é igual ao seu dobro. Calcule esse número.", "A diferença entre o dobro do quadrado de um número positivo e o triplo desse número é 77. Calcule o número.", "O quadrado de um número menos o seu triplo é igual a 40. Qual é esse número?", "Um numero ao quadrado mais o dobro desse número é igual a 35. Qual é esse número ?"];
let certos_2grau = ["b", "a", "a", "a", "e", "e", "c", "a", "a", "a"];
let alternativas_2grau = ["1 -2", "1 -3", "2 5", "4 -5", "1 -9", "1 5", "1 4", "3 5", "4 -2", "3 -1", "0 6", "0 5", "0 8", "0 7", "0 3", "a2 - 2b", "a2 + 2b", " a2 – 2b2", "a2 + 2b2", " a2 – b2", " 5 e 6", "1 e 5", "1/2 e 1", "3/10 e 1/2", "0 e 3/10", "a=1, b=2 e c=7", "a=1, b=5 e c=-8", "a=-1, b=-9 e c=4", "a=2, b=18 e c=16", "a=1, b=9 e c=8", "2 4", "5 -4", "5 -3", "1 5", "0 9", 7, 9, 3, 4, 0, "8 -5", "3 5", "3 8", "0 2", "8 -9", "-7 5", "4 8", "4 9", "3 4", "-7 3"];
let label = $("input[name = 'alternative']");
let certos_1grau = ["e", "c", "e", "d", "b", "e", "a", "a", "b", "a"];
let alternativas_1grau = [0, 1, "20/33", "33/20", "15/2", 2, 5, 4, 1, 10, 1, 4, 6, 7, 5, 53, 78, 90, 4, 19, 9, -8, -3, -1, 7, "1958 973", "1870 935", "2000 1000", "2500 1750", "1875 1250", 1026.39, 1249.00, 1024.00, 1034.00, 1045.00, 46, 44, 30, 50, 49, 5, 6, 4, 9, 7, -6, 7, 9, -4, -5];
let resultado;
let opcoes = document.querySelectorAll("#opcoes_res");
let posicao_perguntas = 0;
let posicao_opcoes = 0;
let posicao_certos = 0;
let pontuacao = 0;
let button = document.getElementById("verificar");
let pergunta = document.getElementById("perguntas");
$("#comecar").click(function () {
    $("#comecar").hide(function () {
        $("#opcoes").show("fast", function () {
            $("#algebra").click(function () {
                $("#opcoes").hide(function () {
                    $("#temas_algebra").show("fast", function () {
                        equacao_1grau.onclick = function () {
                            $("#temas_algebra").hide();
                            $("#per_res").show("fast", function () {
                                pergunta.innerHTML = perguntas_1grau[posicao_perguntas];
                                for (let i = 0; i <= opcoes.length - 1; i++) {
                                    console.log("eddd")
                                    opcoes[i].innerHTML = alternativas_1grau[posicao_opcoes];
                                    posicao_opcoes++;
                                }
                                button.onclick = function () {
                                    for (let i = 0; i <= label.length - 1; i++) {
                                        resultado = $("input[name='alternative']:checked").val();
                                        console.log(resultado);
                                    }
                                    if (typeof resultado != "undefined") {
                                        if (resultado === certos_1grau[posicao_certos]) {
                                            pontuacao += 10;
                                            console.log(pontuacao)
                                        }
                                        posicao_certos++;
                                        pergunta.innerHTML = perguntas_1grau[posicao_perguntas];
                                        posicao_perguntas++;
                                        for (let i = 0; i <= opcoes.length - 1; i++) {
                                            console.log("eddd")
                                            opcoes[i].innerHTML = alternativas_1grau[posicao_opcoes];
                                            posicao_opcoes++;
                                        }
                                        let input = $("input[name='alternative']");
                                        for (let i = 0; i <= input.length - 1; i++) {
                                            input[i].checked = false;
                                        }
                                        pergunta.innerHTML = perguntas_1grau[posicao_perguntas];
                                        if (posicao_perguntas === 10) {
                                            posicao_perguntas = 0;
                                            posicao_opcoes = 0;
                                            posicao_opcoes2 = 0;
                                            posicao_certos = 0;
                                            $("#opcoes").hide();
                                            $("#per_res").hide();
                                            $("#pontuacao").show("fast", function () {
                                                pontos.innerHTML = pontuacao, "- 100";
                                                if (pontuacao <= 50) {
                                                    $("#video_1grau").show("fast");
                                                    document.getElementById("inicio").onclick = function () {
                                                        $("#video_1grau").hide();
                                                        $("#pontuacao").hide();
                                                        pontuacao = 0;
                                                        $("#comecar").show("fast")
                                                    }
                                                } else {
                                                    $("#inicio_alternativo").show("fast");
                                                    document.getElementById("inicio_alternativo").onclick = function () {
                                                        $("#inicio_alternativo").hide();
                                                        $("#pontuacao").hide();
                                                        pontuacao = 0;
                                                        $("#comecar").show("fast")
                                                    }
                                                }
                                            })
                                        }
                                    }
                                }
                            })
                        }
                        equacao_2grau.onclick = function () {
                            $("#temas_algebra").hide();
                            $("#per_res").show("fast", function () {
                                pergunta.innerHTML = perguntas_2grau[posicao_perguntas];
                                for (let i = 0; i <= opcoes.length - 1; i++) {
                                    console.log("eddd")
                                    opcoes[i].innerHTML = alternativas_2grau[posicao_opcoes];
                                    posicao_opcoes++;
                                }
                                button.onclick = function () {
                                    for (let i = 0; i <= label.length - 1; i++) {
                                        resultado = $("input[name='alternative']:checked").val();
                                        console.log(resultado);
                                    }
                                    if (typeof resultado != "undefined") {
                                        if (resultado === certos_2grau[posicao_certos]) {
                                            pontuacao += 10;
                                            console.log(pontuacao)
                                        }
                                        posicao_certos++;
                                        pergunta.innerHTML = perguntas_2grau[posicao_perguntas];
                                        posicao_perguntas++;
                                        for (let i = 0; i <= opcoes.length - 1; i++) {
                                            console.log("eddd")
                                            opcoes[i].innerHTML = alternativas_2grau[posicao_opcoes];
                                            posicao_opcoes++;
                                        }
                                        let input = $("input[name='alternative']");
                                        for (let i = 0; i <= input.length - 1; i++) {
                                            input[i].checked = false;
                                        }
                                        pergunta.innerHTML = perguntas_2grau[posicao_perguntas];
                                        if (posicao_perguntas === 10) {
                                            posicao_perguntas = 0;
                                            posicao_certos = 0;
                                            posicao_opcoes = 0;
                                            posicao_opcoes2 = 0;
                                            $("#opcoes").hide();
                                            $("#per_res").hide();
                                            $("#pontuacao").show("fast", function () {
                                                pontos.innerHTML = pontuacao;
                                                if (pontuacao <= 50) {
                                                    $("#video_2grau").show("fast");
                                                    document.getElementById("inicio2").onclick = function () {
                                                        $("#video_2grau").hide();
                                                        $("#pontuacao").hide();
                                                        pontuacao = 0;
                                                        $("#comecar").show("fast")
                                                    }
                                                } else {
                                                    $("#inicio_alternativo").show("fast");
                                                    document.getElementById("inicio_alternativo").onclick = function () {
                                                        $("#inicio_alternativo").hide();
                                                        $("#pontuacao").hide();
                                                        pontuacao = 0;
                                                        $("#comecar").show("fast")
                                                    }
                                                }
                                            })
                                        }
                                    }
                                }
                            })
                        }
                    })
                })
            })
        })
    })
})