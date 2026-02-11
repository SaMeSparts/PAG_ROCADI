import './style.css'

// ---------------------------------------------
// 1. REFERENCIAS AL DOM
// ---------------------------------------------

// Sidebar Móvil
const sidebar = document.getElementById('mobile-sidebar');
const openBtn = document.getElementById('open-sidebar-btn');
const closeBtn = document.getElementById('close-sidebar-btn');

// VISTAS (Las "Páginas")
const viewInicio = document.getElementById('view-inicio');
const viewServicios = document.getElementById('view-servicios');
const viewEmpresa = document.getElementById('view-empresa');

// BOTONES DESKTOP
const deskInicio = document.getElementById('desktop-btn-inicio');
const deskServicios = document.getElementById('desktop-btn-servicios');
const deskEmpresa = document.getElementById('desktop-btn-empresa'); 
const deskHero = document.getElementById('drop-hero'); 
const deskMantenimiento = document.getElementById('drop-mantenimiento');
const deskNosotros = document.getElementById('drop-nosotros'); 
const logoBtn = document.getElementById('logo-btn');

// BOTONES MÓVIL
const mobInicio = document.getElementById('mobile-btn-inicio');
const mobServicios = document.getElementById('mobile-btn-servicios');
const mobEmpresa = document.getElementById('mobile-btn-empresa'); 
const mobMantenimiento = document.getElementById('mobile-btn-mantenimiento');
const mobNosotros = document.getElementById('mobile-btn-nosotros');


// ---------------------------------------------
// 2. FUNCIONES DE NAVEGACIÓN
// ---------------------------------------------

// Función para cambiar de vista (Oculta todas, muestra una)
function switchView(viewToShow) {
    // 1. Ocultar todas las vistas
    viewInicio.classList.add('hidden');
    viewServicios.classList.add('hidden');
    viewEmpresa.classList.add('hidden');
    
    // 2. Mostrar la deseada
    viewToShow.classList.remove('hidden');
    
    // 3. Cerrar sidebar si está abierto
    sidebar.classList.add('translate-x-full');
    sidebar.classList.remove('translate-x-0');
    
    // 4. Scroll arriba
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Función para navegar dentro de INICIO (Scroll a sección)
function scrollToSection(sectionId) {
    // Si no estamos en inicio, cambiamos a inicio primero
    if (viewInicio.classList.contains('hidden')) {
        switchView(viewInicio);
        // Pequeño timeout para que el DOM renderice la vista antes de hacer scroll
        setTimeout(() => {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 50);
    } else {
        // Si ya estamos en inicio, solo hacemos scroll
        if (sectionId === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
        // Cerrar sidebar por si acaso
        sidebar.classList.add('translate-x-full');
        sidebar.classList.remove('translate-x-0');
    }
}


// ---------------------------------------------
// 3. EVENT LISTENERS
// ---------------------------------------------

// Sidebar Toggle
openBtn.addEventListener('click', () => {
    sidebar.classList.remove('translate-x-full');
    sidebar.classList.add('translate-x-0');
});
closeBtn.addEventListener('click', () => {
    sidebar.classList.add('translate-x-full');
    sidebar.classList.remove('translate-x-0');
});

// --- NAVEGACIÓN VISTAS PRINCIPALES ---

// Inicio
deskInicio.addEventListener('click', () => switchView(viewInicio));
mobInicio.addEventListener('click', () => switchView(viewInicio));
logoBtn.addEventListener('click', () => switchView(viewInicio));

// Empresa
deskEmpresa.addEventListener('click', () => switchView(viewEmpresa));
mobEmpresa.addEventListener('click', () => switchView(viewEmpresa));

// Servicios
deskServicios.addEventListener('click', () => switchView(viewServicios));
mobServicios.addEventListener('click', () => switchView(viewServicios));


// --- NAVEGACIÓN INTERNA (Submenús Inicio) ---
deskHero.addEventListener('click', () => scrollToSection('top'));
deskMantenimiento.addEventListener('click', () => scrollToSection('mantenimiento-section'));

// "Nosotros" en el dropdown: lleva a la sección Nosotros del INICIO
deskNosotros.addEventListener('click', () => scrollToSection('nosotros-section'));
mobNosotros.addEventListener('click', () => scrollToSection('nosotros-section'));

mobMantenimiento.addEventListener('click', () => scrollToSection('mantenimiento-section'));