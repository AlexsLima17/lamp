/**
 * Simples simulador de uma lâmpada
 * @author Alex Lima
 */

// variáveis de apoio  lógica
let chave = false // o interruptor inicia desligado
let lampada = true // a lâmpada está OK

// Pré carregamento do arquivo de áudio
let som = new Audio("sound/breaking-glass.mp3")

// Lanterna (pré carregamento)
let stream, track
inicializarLanterna()


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
// Estudo de eventos relacionados a click do mouse (precionando ou não precionado) e telas touch
// Passo 1 - capturar os elementos do html (DOM)
const botao = document.getElementById('button')
const lampadaimg = document.getElementById('lamp')

// Passo 2 - Manipular o evento mouse pressionada
// addEventListener ("escutar de eventos em tempo real")
// Mousedown (Mouse pressionado constantemente)
// Mouseup (soltar o botão do mouse)
// TouchStart (tocar na tela e manter)
// Touchend (deixar de pressionar a tela )

// Pressionar o botão do mouse e manter
botao.addEventListener('mousedown', (event) => {
    event.preventDefault() //ignorar o comportamento padrão
    //console.log("botão do mouse pressionado")
    //se a lãmpada estiver intacta e o interruptor principal estiver desligado
    if (lampada === true && chave === false) {
        lampadaimg.src = "img/on.jpg" // Trocar a imagem
    }
})

// Soltar o botão do mouse 
botao.addEventListener('mouseup', (event) => {
    event.preventDefault() //ignorar o comportamento padrão
    //console.log("botão do mouse solto")
    //se a lãmpada estiver intacta e o interruptor principal estiver desligado
    if (lampada === true && chave === false) {
        lampadaimg.src = "img/off.jpg" // Trocar a imagem
    }
})

// Pressionar a tela touch e manter 
botao.addEventListener('touchstart', (event) => {
    event.preventDefault() //ignorar o comportamento padrão
    //console.log("tela precionada")
    //se a lãmpada estiver intacta e o interruptor principal estiver desligado
    if (lampada === true && chave === false) {
        lampadaimg.src = "img/on.jpg" // Trocar a imagem
    }
})

// Deixar de pressionar a tela touch
botao.addEventListener('touchend', (event) => {
    event.preventDefault() //ignorar o comportamento padrão
    //console.log("a tela não está pressionada")
    //se a lãmpada estiver intacta e o interruptor principal estiver desligado
    if (lampada === true && chave === false) {
        lampadaimg.src = "img/off.jpg" // Trocar a imagem
    }
})

// Lanterna
async function inicializarLanterna() {
    //Tratamento de exceções
    try {
        // Solicita acesso à câmera traseira sem exibir o vídeo
        stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" }
        })
        
        // Obtém o track do vídeo para controlar a lanterna
        track = stream.getVideoTracks()[0]
        
        // Verifica se o dispositivo suporta o uso da lanterna
        const capabilities = track.getCapabilities()
        if (!capabilities.torch) {
            console.log("Lanterna não suportada no dispositivo.")
            return
        }
    } catch (error) {
        console.error(`Erro ao inicializar a lanterna: ${error}`)
    }
}




async function ligar () {
    // Função para ligar a lanterna (torch)
    if (track) {
        try {
            await track.applyConstraints({ advanced: [{ torch: true }] })
        } catch (error) {
            console.error(`Erro ao inicializar a lanterna: ${error}`)
        }
    }
}


async function desligar() {
// Função para desligar a lanterna sem parar o stream

    if (track) {
        try {
            await track.applyConstraints({ advanced: [{ torch: false }] })
        } catch (error) {
            console.error(`Erro ao inicializar a lanterna: ${error}`)
        }
    }
}
