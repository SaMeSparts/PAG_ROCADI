import './style.css'

// ============================================
// 1. REFERENCIAS AL DOM
// ============================================

// Sidebar Móvil
const sidebar = document.getElementById('mobile-sidebar');
const openBtn = document.getElementById('open-sidebar-btn');
const closeBtn = document.getElementById('close-sidebar-btn');

// Vistas Principales (Contenedores)
const viewInicio = document.getElementById('view-inicio');
const viewServicios = document.getElementById('view-servicios');

// Botones Desktop (Dropdown y Navbar)
const dropHero = document.getElementById('drop-hero');
const dropMantenimiento = document.getElementById('drop-mantenimiento');
const dropNosotros = document.getElementById('drop-nosotros');
const deskServicios = document.getElementById('desktop-btn-servicios');
const logoBtn = document.getElementById('logo-btn');

// Botones Móvil
const mobInicio = document.getElementById('mobile-btn-inicio');
const mobMantenimiento = document.getElementById('mobile-btn-mantenimiento');
const mobNosotros = document.getElementById('mobile-btn-nosotros');
const mobServicios = document.getElementById('mobile-btn-servicios');

// ============================================
// 2. FUNCIONES DE NAVEGACIÓN
// ============================================

// Función universal para ir a una sección dentro de INICIO
function scrollToSection(sectionId) {
    // 1. Si estamos en Servicios, cambiamos a la vista Inicio
    if (viewInicio.classList.contains('hidden')) {
        viewServicios.classList.add('hidden');
        viewInicio.classList.remove('hidden');
    }

    // 2. Cerramos el sidebar si está abierto (móvil)
    sidebar.classList.add('translate-x-full');
    sidebar.classList.remove('translate-x-0');

    // 3. Scroll suave a la sección
    if (sectionId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        // Pequeño timeout para asegurar que el DOM se actualizó si cambiamos de vista
        setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }, 10);
    }
}

// Función exclusiva para mostrar la vista SERVICIOS
function showServiciosView() {
    viewInicio.classList.add('hidden');
    viewServicios.classList.remove('hidden');
    
    // Cierra sidebar móvil
    sidebar.classList.add('translate-x-full');
    sidebar.classList.remove('translate-x-0');
    
    // Scroll arriba
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// 3. EVENT LISTENERS
// ============================================

// -- Sidebar Toggle --
openBtn.addEventListener('click', () => {
    sidebar.classList.remove('translate-x-full');
    sidebar.classList.add('translate-x-0');
});
closeBtn.addEventListener('click', () => {
    sidebar.classList.add('translate-x-full');
    sidebar.classList.remove('translate-x-0');
});

// -- Dropdown Desktop (Navegación Interna) --
dropHero.addEventListener('click', () => scrollToSection('top'));
dropMantenimiento.addEventListener('click', () => scrollToSection('mantenimiento-section'));
dropNosotros.addEventListener('click', () => scrollToSection('nosotros-section'));

// -- Navbar Desktop (Servicios y Logo) --
deskServicios.addEventListener('click', showServiciosView);
logoBtn.addEventListener('click', () => scrollToSection('top'));

// -- Menú Móvil --
mobInicio.addEventListener('click', () => scrollToSection('top'));
mobMantenimiento.addEventListener('click', () => scrollToSection('mantenimiento-section'));
mobNosotros.addEventListener('click', () => scrollToSection('nosotros-section'));
mobServicios.addEventListener('click', showServiciosView);