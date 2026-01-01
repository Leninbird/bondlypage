
const { createApp } = Vue;

createApp({
    data() {
        return {
            segmentos: listaCompletaSegmentos 
        }
    }
}).mount('body'); 

console.log('🚀 Segmentos cargados usando la lista nueva con SVGs.');