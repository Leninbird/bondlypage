
const { createApp } = Vue;

createApp({
  data() {
    return {

      fundadores: dataFundadores, 
      segmentos: dataSegmentos
    }
  }
}).mount('#app');


document.addEventListener('DOMContentLoaded', () => {
    
    // Parallax Logo
    const logo = document.querySelector('.main-logo');
    if (logo) {
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * -20; 
            const y = (e.clientY / window.innerHeight - 0.5) * -20;
            logo.style.transform = `translate(${x}px, ${y}px)`;
        });
    }

    // Menú Hamburguesa
    const toggleButton = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (toggleButton && navLinks) {
        toggleButton.addEventListener('click', () => {
            navLinks.classList.toggle('active'); 
        });
    }

    console.log('🚀 Bondly cargado: Datos separados de la lógica.');
});