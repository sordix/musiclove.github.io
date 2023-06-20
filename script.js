// Função para calcular a diferença em dias entre duas datas
function calcularDiferencaDias(dataInicial, dataFinal) {
    var diferenca = dataFinal - dataInicial;
    return Math.floor(diferenca / (1000 * 60 * 60 * 24));
}

// Função para exibir o QRCode
function showQRCode() {
    document.getElementById("qrcode-container").style.display = "flex";
    document.getElementById("image").style.display = "flex";
    document.getElementById("qrcode").innerHTML = "";
    
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        width: 300,
        height: 300
    });
    
    var url = "https://www.youtube.com/watch?v=Ojp71GGm-LQ&ab_channel=HarryStylesVEVO";
    qrcode.makeCode(url);
    
    var audio = document.getElementById("audio");
    audio.play();
}

// Função para ocultar o QRCode
function hideQRCode() {
    document.getElementById("qrcode-container").style.display = "none";
    document.getElementById("image").style.display = "none";
    
    var audio = document.getElementById("audio");
    audio.pause();
}

document.addEventListener("DOMContentLoaded", function() {
    var dataInicial = new Date(2023, 3, 3);
    var dataAtual = new Date();
    var contagemDias = calcularDiferencaDias(dataInicial, dataAtual);
    var frase = "Você está comigo " + contagemDias + " dias, vivendo minhas loucuras. Eu te amo!";

    var paragrafo = document.createElement("p");
    paragrafo.style.fontWeight = "bold";
    paragrafo.style.fontSize = "24px";
    paragrafo.textContent = frase;
    paragrafo.id = "contagem-dias";

    var body = document.getElementsByTagName("body")[0];
    body.appendChild(paragrafo);
});