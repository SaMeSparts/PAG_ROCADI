import './style.css'


const openBtn = document.getElementById('open-sidebar-btn');

// El botón 'X' dentro del sidebar para CERRAR el menú
const closeBtn = document.getElementById('close-sidebar-btn');

// El 'div' completo del sidebar (el que se desliza)
const sidebar = document.getElementById('mobile-sidebar');


// --- 2. Lógica para ABRIR el Sidebar ---
//
// Le decimos a JavaScript que "escuche" ('addEventListener')
// un evento de 'click' sobre el botón 'openBtn'.
openBtn.addEventListener('click', () => {
  // Cuando ocurra el clic, ejecutamos esta función:
  
  // 1. Buscamos la lista de clases del 'sidebar'.
  // 2. Quitamos ('remove') la clase 'translate-x-full' (que lo oculta).
  sidebar.classList.remove('translate-x-full');
  
  // 3. Añadimos ('add') la clase 'translate-x-0' (que lo pone en su posición 0, visible).
  sidebar.classList.add('translate-x-0');
  
  // El 'transition-transform' que pusimos en el HTML se encarga de la animación.
});


// --- 3. Lógica para CERRAR el Sidebar ---
//
// Hacemos lo mismo, pero para el botón 'closeBtn'.
closeBtn.addEventListener('click', () => {
  // Cuando ocurra el clic, ejecutamos esta función:
  
  // 1. Quitamos la clase 'translate-x-0' (que lo mantiene visible).
  sidebar.classList.remove('translate-x-0');
  
  // 2. Añadimos de nuevo la clase 'translate-x-full' (que lo vuelve a ocultar).
  sidebar.classList.add('translate-x-full');
});