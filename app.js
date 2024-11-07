/**
 * Simples simulador de uma lampada
 * @author Alex Lima
 */

function quebrar() {
    document.getElementById('lamp').scr="img/broken.jpg"
    //reproduzindo um arquivo de audio de JS
    //Passo 1: copiar o arquivo de áudio para o projeto 
    //Passo 2: Usar a classe Audio (biblioteca interna do JS)
    
    let som = new Audio()
    som.src = "sound/glassbreaking.wav"
    som.play()
}