/**
 * Simples simulador de uma lâmpada
 * @author Alex Lima
 */

// variáveis de apoio  lógica
let chave = false // o interruptor inicia desligado
let lampada = true // a lâmpada está OK

// Pré carregamento do arquivo de áudio
let som = new Audio("sound/breaking-glass.mp3")

function quebrar() {
    if (lampada === true) {
        document.getElementById('lamp').src = "img/broken.jpg"
        // reproduzindo um arquivo de áudio no JS
        // Passo 1: copiar o arquivo de áudio para o projeto
        // Passo 2: Usar a classe Audio(biblioteca interna do JS)
        // Passo 3: pré carregar o arquivo de áudio para sincronizar com a troca de imagem (Experência do Usuário)
        som.play()
        // apoo a lógica para o JS identificar a lâmpada quebrada
        lampada = false
    }
}

function onoff() {
    if (chave === false) {
        // ligar a chave
        document.getElementById('interruptor').src = "img/swon.png"
        chave = true //O JS agora sabe que a chave está ligada
        // verificar se a lâmpada está intacta antes de acender
        if (lampada === true) {
            document.getElementById('lamp').src = "img/on.jpg"
        }
    } else {
        document.getElementById('interruptor').src = "img/swoff.png"
        chave = false
        // verificar se a lâmpada está intacta antes de apagar
        if (lampada === true) {
            document.getElementById('lamp').src = "img/off.jpg"
        }
    }
}