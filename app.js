/**
 * Simples simulador de uma lampada
 * @author Alex Lima
 */

//Variáveis de apoio lógica
let chave = false

function quebrar() {
    //reproduzindo um arquivo de audio de JS
    //Passo 1: copiar o arquivo de áudio para o projeto 
    //Passo 2: Usar a classe Audio (biblioteca interna do JS)

    let som = new Audio()
    som.src = "sound/glassbreaking.wav"
    som.play()
    document.getElementById('lamp').src="img/broken.jpg"
}

function onoff(){
    if (chave === false){
        // ligar a chave
        document.getElementById('interruptor').src="img/swon.png" 
        chave = true //O JS agorasabe que a chave está ligada
        //acender a lampada
        document.getElementById('lamp').src="img/on.jpg"
    }else {
        document.getElementById('interruptor').src="img/swoff.png"
        chave = false
        document.getElementById('lamp').src="img/off.jpg"
    }
}