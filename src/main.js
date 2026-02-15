
import { inject } from '@vercel/analytics';

import './style.css'

// ============================================
// 1. DATOS DE LOS SERVICIOS
// ============================================
const servicesData = {
    albercas: { title: "Mantenimiento a Albercas", desc: "Servicio integral de limpieza, aspirado, cepillado, análisis y balance de químicos, mantenimiento preventivo a bombas y filtros.", img: "./servicio1.jpeg" },
    bombeo: { title: "Equipos de Bombeo", desc: "Mantenimiento correctivo y preventivo a bombas de agua potable, hidroneumáticos y sistemas de presión constante.", img: "./servicio2.jpg" },
    emergencia: { title: "Plantas de Emergencia", desc: "Pruebas de transferencia, revisión de niveles, cambio de filtros, aceite y anticongelante.", img: "./servicio3.jpg" },
    tratamiento: { title: "Plantas de Tratamiento", desc: "Operación y mantenimiento de PTAR. Retiro de lodos, monitoreo de cloración, revisión de sopladores.", img: "./servicio4.jpg" },
    pintura: { title: "Pintura Profesional", desc: "Aplicación de pintura vinílica y esmalte en interiores, exteriores y estructuras.", img: "./servicio5.jpg" },
    impermeabilizacion: { title: "Impermeabilización", desc: "Protección total contra la humedad. Aplicación de sistemas prefabricados, acrílicos y cementosos.", img: "./servicio6.jpg" },
    electricas: { title: "Instalaciones Eléctricas", desc: "Mantenimiento a tableros, balanceo de cargas, iluminación LED y revisión de tierras físicas.", img: "./servicio7.jpg" },
    hidraulicas: { title: "Instalaciones Hidráulicas", desc: "Detección y reparación de fugas, sustitución de tuberías y válvulas.", img: "./servicio8.jpg" },
    sanitarias: { title: "Instalaciones Sanitarias", desc: "Desazolve de drenajes, mantenimiento a cárcamos y reparación de registros.", img: "./servicio9.jpg" },
    albanileria: { title: "Albañilería y Acabados", desc: "Reparaciones generales, colocación de pisos, mampostería y tablaroca.", img: "./servicio10.jpg" },
    herreria: { title: "Estructuras Metálicas", desc: "Fabricación y reparación de puertas industriales, techumbres y barandales.", img: "./servicio11.jpg" },
    remodelaciones: { title: "Remodelaciones", desc: "Proyectos integrales de remodelación para oficinas y áreas comunes.", img: "./servicio12.jpg" }
};

// ============================================
// 2. REFERENCIAS AL DOM
// ============================================
const sidebar = document.getElementById('mobile-sidebar');
const openBtn = document.getElementById('open-sidebar-btn');
const closeBtn = document.getElementById('close-sidebar-btn');

// Vistas (Secciones Principales)
const viewInicio = document.getElementById('view-inicio');
const viewServicios = document.getElementById('view-servicios');
const viewEmpresa = document.getElementById('view-empresa');
const viewPlan = document.getElementById('view-plan');
const viewDesarrollos = document.getElementById('view-desarrollos');
const viewFaq = document.getElementById('view-faq');
const viewContacto = document.getElementById('view-contacto'); // NUEVA VISTA

// Modal
const modal = document.getElementById('service-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalImg = document.getElementById('modal-img');

// Botones Navegación (Desktop)
const deskInicio = document.getElementById('desktop-btn-inicio');
const deskEmpresa = document.getElementById('desktop-btn-empresa');
const deskPlan = document.getElementById('desktop-btn-plan');
const deskFaq = document.getElementById('desktop-btn-faq');
const deskServicios = document.getElementById('desktop-btn-servicios');
const deskDesarrollos = document.getElementById('desktop-btn-desarrollos');
const deskContacto = document.getElementById('desktop-btn-contacto'); // NUEVO BOTÓN
const logoBtn = document.getElementById('logo-btn');

// Botones Navegación (Móvil)
const mobInicio = document.getElementById('mobile-btn-inicio');
const mobEmpresa = document.getElementById('mobile-btn-empresa');
const mobPlan = document.getElementById('mobile-btn-plan');
const mobFaq = document.getElementById('mobile-btn-faq');
const mobServicios = document.getElementById('mobile-btn-servicios');
const mobDesarrollos = document.getElementById('mobile-btn-desarrollos');
const mobContacto = document.getElementById('mobile-btn-contacto'); // NUEVO BOTÓN

// Submenús
const deskHero = document.getElementById('drop-hero'); 
const deskMantenimiento = document.getElementById('drop-mantenimiento');
const deskNosotros = document.getElementById('drop-nosotros'); 
const deskGeneral = document.getElementById('drop-general');
const deskBitacora = document.getElementById('drop-bitacora');
const deskReporte = document.getElementById('drop-reporte');

const mobMantenimiento = document.getElementById('mobile-btn-mantenimiento');
const mobNosotros = document.getElementById('mobile-btn-nosotros');
const mobGeneral = document.getElementById('mobile-btn-general');
const mobBitacora = document.getElementById('mobile-btn-bitacora');
const mobReporte = document.getElementById('mobile-btn-reporte');

// ============================================
// 3. FUNCIONES GLOBALES
// ============================================

// Toggle FAQ (Acordeón Suave)
window.toggleFaq = function(id) {
    const content = document.getElementById(id);
    const icon = document.getElementById('icon-' + id);
    
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.classList.remove('rotate-180');
    } else {
        // Opcional: cerrar otros acordeones abiertos
        document.querySelectorAll('[id^="faq"]').forEach(el => el.style.maxHeight = null);
        document.querySelectorAll('[id^="icon-faq"]').forEach(el => el.classList.remove('rotate-180'));

        content.style.maxHeight = content.scrollHeight + "px";
        icon.classList.add('rotate-180');
    }
};

// Funciones del Modal
window.openModal = function(serviceKey) {
    const data = servicesData[serviceKey];
    if(data) {
        modalTitle.textContent = data.title;
        modalDesc.textContent = data.desc;
        modalImg.src = data.img;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
};

window.closeModal = function() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
};

// ============================================
// 4. NAVEGACIÓN
// ============================================

// Función principal para cambiar de vista
function switchView(viewToShow) {
    // Ocultar todas las vistas
    [viewInicio, viewServicios, viewEmpresa, viewPlan, viewDesarrollos, viewFaq, viewContacto].forEach(v => v.classList.add('hidden'));
    
    // Mostrar la elegida
    viewToShow.classList.remove('hidden');
    
    // Cerrar sidebar móvil y scroll arriba
    sidebar.classList.add('translate-x-full');
    sidebar.classList.remove('translate-x-0');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Función para scroll a secciones internas
function scrollToSection(sectionId) {
    if (['section-general', 'section-bitacora', 'section-reporte'].includes(sectionId)) {
        if (viewPlan.classList.contains('hidden')) switchView(viewPlan);
    } else {
        if (viewInicio.classList.contains('hidden')) switchView(viewInicio);
    }
    
    setTimeout(() => {
        if (sectionId === 'top') window.scrollTo({ top: 0, behavior: 'smooth' });
        else document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
    
    sidebar.classList.add('translate-x-full');
    sidebar.classList.remove('translate-x-0');
}

// ============================================
// 5. EVENT LISTENERS
// ============================================

// Sidebar Toggle
openBtn.addEventListener('click', () => { sidebar.classList.remove('translate-x-full'); sidebar.classList.add('translate-x-0'); });
closeBtn.addEventListener('click', () => { sidebar.classList.add('translate-x-full'); sidebar.classList.remove('translate-x-0'); });

// Botones Principales (Navegación entre vistas)
[deskInicio, mobInicio, logoBtn].forEach(b => b.addEventListener('click', () => switchView(viewInicio)));
[deskEmpresa, mobEmpresa].forEach(b => b.addEventListener('click', () => switchView(viewEmpresa)));
[deskPlan, mobPlan].forEach(b => b.addEventListener('click', () => switchView(viewPlan)));
[deskFaq, mobFaq].forEach(b => b.addEventListener('click', () => switchView(viewFaq)));
[deskServicios, mobServicios].forEach(b => b.addEventListener('click', () => switchView(viewServicios)));
[deskDesarrollos, mobDesarrollos].forEach(b => b.addEventListener('click', () => switchView(viewDesarrollos)));
[deskContacto, mobContacto].forEach(b => b.addEventListener('click', () => switchView(viewContacto))); // NUEVOS

// Submenús (Scroll interno)
deskHero.addEventListener('click', () => scrollToSection('top'));
deskMantenimiento.addEventListener('click', () => scrollToSection('mantenimiento-section'));
deskNosotros.addEventListener('click', () => scrollToSection('nosotros-section'));
deskGeneral.addEventListener('click', () => scrollToSection('section-general'));
deskBitacora.addEventListener('click', () => scrollToSection('section-bitacora'));
deskReporte.addEventListener('click', () => scrollToSection('section-reporte'));

mobMantenimiento.addEventListener('click', () => scrollToSection('mantenimiento-section'));
mobNosotros.addEventListener('click', () => scrollToSection('nosotros-section'));
mobGeneral.addEventListener('click', () => scrollToSection('section-general'));
mobBitacora.addEventListener('click', () => scrollToSection('section-bitacora'));
mobReporte.addEventListener('click', () => scrollToSection('section-reporte'));