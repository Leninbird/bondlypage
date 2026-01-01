
const dataFundadores = [
    {
      nombre: 'Lenin',
      rol: 'Fundador',
      foto: 'images/lenin.jpg',
      link: 'https://linktr.ee/leninbird'
    },
    {
      nombre: 'Máximo',
      rol: 'Co-fundador y desarrollador del chatbot',
      foto: 'images/maximo.jpg',
      link: 'https://www.instagram.com/maximojavierrojas/'
    },
    {
      nombre: 'Minerva',
      rol: 'Experta fullstack',
      foto: 'images/perfil_5.jpg',
      link: 'https://www.instagram.com/karlagaflo/'
    },
    {
      nombre: 'Britaldo',
      rol: 'Colaborador eficaz',
      foto: 'images/perfil_22.jpg',
      link: 'https://www.instagram.com/alejandro_sj003/'
    },
    {
      nombre: 'David',
      rol: 'Colaborador eficaz',
      foto: 'images/perfil_9.jpg',
      link: 'https://www.instagram.com/abnerdavidramos/'
    },
];

const dataSegmentos = [
    {
      titulo: 'Chats Temáticos',
      descripcion: 'Encuentra grupos de estudio o de interés. Comparte música, frases, memes y más.',
      icono: '💬'
    },
    {
      titulo: 'Conexión Académica',
      descripcion: 'Busca compañeros de curso, crea grupos para proyectos y obtén ayuda en tus asignaturas.',
      icono: '🎓'
    },
    {
      titulo: 'Afinidad Vallejiana',
      descripcion: 'Más allá de lo académico, conoce gente según tus gustos y crea vínculos duraderos.',
      icono: '❤️'
    },
    {
      titulo: 'Networking Real',
      descripcion: 'Prepárate para el futuro. Conecta con egresados y profesionales del campus.',
      icono: '🎯'
    }
];


const listaCompletaSegmentos = [
    {
        numero: '01',
        titulo: 'Afinidad Real',
        iconoSVG: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
        descripcion: 'Encuentra personas que realmente coincidan contigo más allá del aula. Conecta con estudiantes que comparten tus hobbies y pasiones.',
        imagen: 'images/love.jpg'
    },
    {
        numero: '02',
        titulo: 'Conexión Académica',
        iconoSVG: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
        descripcion: '¡Nunca más estudiarás solo! Conéctate fácilmente con compañeros de tu mismo curso para formar grupos de estudio y proyectos.',
        imagen: 'images/academia.jpeg'
    },
    {
        numero: '03',
        titulo: 'Cafecito General',
        iconoSVG: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
        descripcion: 'El chat principal para discutir sobre cualquier tema. Abierto a todos. Un lugar casual y divertido para la interacción diaria.',
        imagen: 'images/images.jpeg'
    },
    {
        numero: '04',
        titulo: 'Actividades Vallejianas',
        iconoSVG: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>',
        descripcion: 'Organiza o únete a eventos, deportes y reuniones exclusivas. Mantente al tanto de todo lo que sucede en tu campus.',
        imagen: 'images/campusreg.jpeg'
    },
    {
        numero: '05',
        titulo: 'Gustos Musicales',
        iconoSVG: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>',
        descripcion: 'Comparte tus canciones, descubre nuevos artistas y encuentra a ese compañero con el mismo gusto musical que tú.',
        imagen: 'images/music.jpg'
    },
    {
        numero: '06',
        titulo: 'Crece Conmigo',
        iconoSVG: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19c-4.418 0-8-3.582-8-8a8 8 0 1 1 16 0c0 4.418-3.582 8-8 8z"></path><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path><path d="M12 19v3m-7-3l-2 2m16-2l2 2"></path></svg>', // Icono abstracto de planta/sol
        descripcion: 'Un espacio dedicado al desarrollo personal y el bienestar. Comparte tu día a día o encuentra una comunidad de apoyo.',
        imagen: 'images/crece.jpeg'
    },
    {
        numero: '07',
        titulo: 'Rompe el Hielo',
        iconoSVG: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
        descripcion: 'Sé el primero en publicar algo, y deja que los demás rompan el silencio junto a ti durante 24 horas.',
        imagen: 'images/ice.jpeg'
    },
    {
        numero: '08',
        titulo: 'Mentoría',
        iconoSVG: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z"></path><path d="M9 21h6"></path></svg>',
        descripcion: 'Conéctate con egresados o estudiantes superiores. Obtén orientación profesional y construye tu red de contactos.',
        imagen: 'images/mentoria.jpg'
    },
    {
        numero: '09',
        titulo: 'Espacio Anónimo',
        iconoSVG: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle><line x1="1" y1="1" x2="23" y2="23"></line></svg>',
        descripcion: 'Un lugar seguro para compartir opiniones o hacer preguntas delicadas sin revelar tu identidad.',
        imagen: 'images/anonimous.webp'
    }
];