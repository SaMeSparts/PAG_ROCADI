import './style.css'

// ============================================
// 1. DATOS DE LOS SERVICIOS (Igual que antes)
// ============================================
const servicesData = {
    albercas: {
        title: "Mantenimiento a Albercas",
        desc: "Servicio integral de limpieza, aspirado, cepillado, análisis y balance de químicos, así como mantenimiento preventivo a bombas y filtros.",
        img: "./servicio1.jpeg" 
    },
    bombeo: {
        title: "Equipos de Bombeo",
        desc: "Mantenimiento correctivo y preventivo a bombas de agua potable, hidroneumáticos y sistemas de presión constante.",
        img: "./servicio2.jpg" 
    },
    emergencia: {
        title: "Plantas de Emergencia",
        desc: "Asegura la continuidad de tu energía. Realizamos pruebas de transferencia, revisión de niveles, cambio de filtros y aceite.",
        img: "./servicio3.jpg" 
    },
    tratamiento: {
        title: "Plantas de Tratamiento",
        desc: "Operación y mantenimiento de PTAR. Retiro de lodos, monitoreo de cloración, revisión de sopladores y bombas.",
        img: "./servicio4.jpg" 
    },
    pintura: {
        title: "Pintura Profesional",
        desc: "Aplicación de pintura vinílica y esmalte en interiores, exteriores y estructuras. Acabados de alta calidad.",
        img: "./servicio5.jpg" 
    },
    impermeabilizacion: {
        title: "Impermeabilización",
        desc: "Protección total contra la humedad. Aplicación de sistemas prefabricados, acrílicos y cementosos.",
        img: "./servicio6.jpg" 
    },
    electricas: {
        title: "Instalaciones Eléctricas",
        desc: "Mantenimiento a tableros de distribución, balanceo de cargas, iluminación LED industrial y revisión de tierras físicas.",
        img: "./servicio7.jpg" 
    },
    hidraulicas: {
        title: "Instalaciones Hidráulicas",
        desc: "Detección y reparación de fugas, sustitución de tuberías (cobre, CPVC, tubo plus), mantenimiento a válvulas.",
        img: "./servicio8.jpg" 
    },
    sanitarias: {
        title: "Instalaciones Sanitarias",
        desc: "Desazolve de drenajes, mantenimiento a cárcamos de aguas negras, reparación de registros sanitarios.",
        img: "./servicio9.jpg" 
    },
    albanileria: {
        title: "Albañilería y Acabados",
        desc: "Reparaciones generales, colocación de pisos, azulejos, mampostería, firmes de concreto y tablaroca.",
        img: "./servicio10.jpg" 
    },
    herreria: {
        title: "Estructuras Metálicas",
        desc: "Fabricación y reparación de puertas industriales, techumbres, barandales, escaleras marinas y protecciones.",
        img: "./servicio11.jpg" 
    },
    remodelaciones: {
        title: "Remodelaciones",
        desc: "Proyectos integrales de remodelación para oficinas, fachadas y áreas comunes. Transformamos espacios.",
        img: "./servicio12.jpg" 
    }
};

// ============================================
// 2. REFERENCIAS AL DOM
// ============================================
const sidebar = document.getElementById('mobile-sidebar');
const openBtn = document.getElementById('open-sidebar-btn');
const closeBtn = document.getElementById('close-sidebar-btn');

const viewInicio = document.getElementById('view-inicio');
const viewServicios = document.getElementById('view-servicios');
const viewEmpresa = document.getElementById('view-empresa');
const viewPlan = document.getElementById('view-plan'); // NUEVA REFERENCIA

const modal = document.getElementById('service-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalImg = document.getElementById('modal-img');

// ============================================
// 3. FUNCIONES GLOBALES
// ============================================
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
// 4. LÓGICA DE NAVEGACIÓN
// ============================================

function switchView(viewToShow) {
    viewInicio.classList.add('hidden');
    viewServicios.classList.add('hidden');
    viewEmpresa.classList.add('hidden');
    viewPlan.classList.add('hidden'); // Ocultar lo nuevo
    
    viewToShow.classList.remove('hidden');
    sidebar.classList.add('translate-x-full');
    sidebar.classList.remove('translate-x-0');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToSection(sectionId) {
    // Lógica para Plan de Mantenimiento
    if (sectionId === 'section-bitacora' || sectionId === 'section-reporte') {
        if (viewPlan.classList.contains('hidden')) {
            switchView(viewPlan);
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            }, 50);
        } else {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
    } 
    // Lógica para Inicio
    else {
        if (viewInicio.classList.contains('hidden')) {
            switchView(viewInicio);
            setTimeout(() => {
                if (sectionId === 'top') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
                }
            }, 50);
        } else {
            if (sectionId === 'top') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
    sidebar.classList.add('translate-x-full');
    sidebar.classList.remove('translate-x-0');
}

// ============================================
// 5. EVENT LISTENERS
// ============================================

// Sidebar Toggles
document.getElementById('open-sidebar-btn').addEventListener('click', () => {
    sidebar.classList.remove('translate-x-full');
    sidebar.classList.add('translate-x-0');
});
document.getElementById('close-sidebar-btn').addEventListener('click', () => {
    sidebar.classList.add('translate-x-full');
    sidebar.classList.remove('translate-x-0');
});

// Navegación Desktop
document.getElementById('desktop-btn-inicio').addEventListener('click', () => switchView(viewInicio));
document.getElementById('desktop-btn-empresa').addEventListener('click', () => switchView(viewEmpresa));
document.getElementById('desktop-btn-servicios').addEventListener('click', () => switchView(viewServicios));
document.getElementById('desktop-btn-plan').addEventListener('click', () => switchView(viewPlan)); // NUEVO
document.getElementById('logo-btn').addEventListener('click', () => switchView(viewInicio));

// Navegación Mobile
document.getElementById('mobile-btn-inicio').addEventListener('click', () => switchView(viewInicio));
document.getElementById('mobile-btn-empresa').addEventListener('click', () => switchView(viewEmpresa));
document.getElementById('mobile-btn-servicios').addEventListener('click', () => switchView(viewServicios));
document.getElementById('mobile-btn-plan').addEventListener('click', () => switchView(viewPlan)); // NUEVO

// Enlaces Internos (Dropdowns)
document.getElementById('drop-hero').addEventListener('click', () => scrollToSection('top'));
document.getElementById('drop-mantenimiento').addEventListener('click', () => scrollToSection('mantenimiento-section'));
document.getElementById('drop-nosotros').addEventListener('click', () => scrollToSection('nosotros-section'));

// NUEVOS DROPDOWNS PLAN
document.getElementById('drop-bitacora').addEventListener('click', () => scrollToSection('section-bitacora'));
document.getElementById('drop-reporte').addEventListener('click', () => scrollToSection('section-reporte'));

document.getElementById('mobile-btn-mantenimiento').addEventListener('click', () => scrollToSection('mantenimiento-section'));
document.getElementById('mobile-btn-nosotros').addEventListener('click', () => scrollToSection('nosotros-section'));

// NUEVOS SUBMENÚS MÓVIL
document.getElementById('mobile-btn-bitacora').addEventListener('click', () => scrollToSection('section-bitacora'));
document.getElementById('mobile-btn-reporte').addEventListener('click', () => scrollToSection('section-reporte'));