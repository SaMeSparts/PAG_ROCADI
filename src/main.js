import './style.css'

// ============================================
// 1. DATOS DE LOS SERVICIOS (Galería Interactiva)
// ============================================
const servicesData = {
    albercas: {
        title: "Mantenimiento a Albercas",
        desc: "Servicio integral de limpieza, aspirado, cepillado, análisis y balance de químicos, así como mantenimiento preventivo a bombas y filtros para garantizar agua cristalina y saludable.",
        img: "./servicio1.jpeg" 
    },
    bombeo: {
        title: "Equipos de Bombeo",
        desc: "Mantenimiento correctivo y preventivo a bombas de agua potable, hidroneumáticos y sistemas de presión constante. Revisión de sellos, rodamientos y tableros de control.",
        img: "./servicio2.jpg" 
    },
    emergencia: {
        title: "Plantas de Emergencia",
        desc: "Asegura la continuidad de tu energía. Realizamos pruebas de transferencia, revisión de niveles, cambio de filtros, aceite y anticongelante para plantas de luz a diésel o gas.",
        img: "./servicio3.jpg" 
    },
    tratamiento: {
        title: "Plantas de Tratamiento",
        desc: "Operación y mantenimiento de PTAR. Retiro de lodos, monitoreo de cloración, revisión de sopladores y bombas para cumplir con la normativa ambiental vigente.",
        img: "./servicio4.jpg" 
    },
    pintura: {
        title: "Pintura Profesional",
        desc: "Aplicación de pintura vinílica y esmalte en interiores, exteriores y estructuras. Acabados de alta calidad, resane de muros y señalización industrial.",
        img: "./servicio5.jpg" 
    },
    impermeabilizacion: {
        title: "Impermeabilización",
        desc: "Protección total contra la humedad. Aplicación de sistemas prefabricados, acrílicos y cementosos con garantía de durabilidad para azoteas, cisternas y muros.",
        img: "./servicio6.jpg" 
    },
    electricas: {
        title: "Instalaciones Eléctricas",
        desc: "Mantenimiento a tableros de distribución, balanceo de cargas, iluminación LED industrial, revisión de tierras físicas y corrección de cortos circuitos.",
        img: "./servicio7.jpg" 
    },
    hidraulicas: {
        title: "Instalaciones Hidráulicas",
        desc: "Detección y reparación de fugas, sustitución de tuberías (cobre, CPVC, tubo plus), mantenimiento a válvulas y tinacos.",
        img: "./servicio8.jpg" 
    },
    sanitarias: {
        title: "Instalaciones Sanitarias",
        desc: "Desazolve de drenajes, mantenimiento a cárcamos de aguas negras, reparación de registros sanitarios y fluxómetros.",
        img: "./servicio9.jpg" 
    },
    albanileria: {
        title: "Albañilería y Acabados",
        desc: "Reparaciones generales, colocación de pisos, azulejos, mampostería, firmes de concreto, aplanados y trabajos de tablaroca.",
        img: "./servicio10.jpg" 
    },
    herreria: {
        title: "Estructuras Metálicas",
        desc: "Fabricación y reparación de puertas industriales, techumbres, barandales, escaleras marinas y protecciones perimetrales.",
        img: "./servicio11.jpg" 
    },
    remodelaciones: {
        title: "Remodelaciones",
        desc: "Proyectos integrales de remodelación para oficinas, fachadas y áreas comunes. Transformamos espacios con eficiencia y calidad.",
        img: "./servicio12.jpg" 
    }
};

// ============================================
// 2. REFERENCIAS AL DOM
// ============================================

// Sidebar Móvil
const sidebar = document.getElementById('mobile-sidebar');
const openBtn = document.getElementById('open-sidebar-btn');
const closeBtn = document.getElementById('close-sidebar-btn');

// Vistas Principales (Secciones grandes)
const viewInicio = document.getElementById('view-inicio');
const viewServicios = document.getElementById('view-servicios');
const viewEmpresa = document.getElementById('view-empresa');
const viewPlan = document.getElementById('view-plan');

// Elementos del Modal
const modal = document.getElementById('service-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalImg = document.getElementById('modal-img');

// Botones de Navegación (Desktop)
const deskInicio = document.getElementById('desktop-btn-inicio');
const deskEmpresa = document.getElementById('desktop-btn-empresa');
const deskServicios = document.getElementById('desktop-btn-servicios');
const deskPlan = document.getElementById('desktop-btn-plan');
const logoBtn = document.getElementById('logo-btn');

// Botones de Navegación (Mobile)
const mobInicio = document.getElementById('mobile-btn-inicio');
const mobEmpresa = document.getElementById('mobile-btn-empresa');
const mobServicios = document.getElementById('mobile-btn-servicios');
const mobPlan = document.getElementById('mobile-btn-plan');

// Submenús / Links Internos (Desktop)
const deskHero = document.getElementById('drop-hero'); 
const deskMantenimiento = document.getElementById('drop-mantenimiento');
const deskNosotros = document.getElementById('drop-nosotros'); 

const deskGeneral = document.getElementById('drop-general'); // NUEVO
const deskBitacora = document.getElementById('drop-bitacora');
const deskReporte = document.getElementById('drop-reporte');

// Submenús / Links Internos (Mobile)
const mobMantenimiento = document.getElementById('mobile-btn-mantenimiento');
const mobNosotros = document.getElementById('mobile-btn-nosotros');

const mobGeneral = document.getElementById('mobile-btn-general'); // NUEVO
const mobBitacora = document.getElementById('mobile-btn-bitacora');
const mobReporte = document.getElementById('mobile-btn-reporte');


// ============================================
// 3. FUNCIONES GLOBALES (Window)
// ============================================

// Abrir Modal
window.openModal = function(serviceKey) {
    const data = servicesData[serviceKey];
    if(data) {
        modalTitle.textContent = data.title;
        modalDesc.textContent = data.desc;
        modalImg.src = data.img;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Bloquea scroll fondo
    }
};

// Cerrar Modal
window.closeModal = function() {
    modal.classList.add('hidden');
    document.body.style.overflow = ''; // Restaura scroll
};


// ============================================
// 4. LÓGICA DE NAVEGACIÓN
// ============================================

// Cambiar entre Vistas Principales
function switchView(viewToShow) {
    // 1. Ocultar todas
    viewInicio.classList.add('hidden');
    viewServicios.classList.add('hidden');
    viewEmpresa.classList.add('hidden');
    viewPlan.classList.add('hidden');
    
    // 2. Mostrar la elegida
    viewToShow.classList.remove('hidden');
    
    // 3. Cerrar sidebar móvil si está abierto
    sidebar.classList.add('translate-x-full');
    sidebar.classList.remove('translate-x-0');
    
    // 4. Scroll arriba
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Navegación Interna Inteligente (Scroll a sección específica)
function scrollToSection(sectionId) {
    
    // CASO A: Secciones dentro de "Plan de Mantenimiento"
    if (sectionId === 'section-general' || sectionId === 'section-bitacora' || sectionId === 'section-reporte') {
        if (viewPlan.classList.contains('hidden')) {
            switchView(viewPlan); // Si no estamos ahí, vamos primero
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            }, 50); // Pequeño delay para que renderice
        } else {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
    } 
    
    // CASO B: Secciones dentro de "Inicio"
    else {
        if (viewInicio.classList.contains('hidden')) {
            switchView(viewInicio); // Si no estamos en inicio, vamos
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
    
    // Cerrar sidebar siempre por si acaso
    sidebar.classList.add('translate-x-full');
    sidebar.classList.remove('translate-x-0');
}


// ============================================
// 5. EVENT LISTENERS
// ============================================

// -- Toggle Sidebar Móvil --
openBtn.addEventListener('click', () => {
    sidebar.classList.remove('translate-x-full');
    sidebar.classList.add('translate-x-0');
});
closeBtn.addEventListener('click', () => {
    sidebar.classList.add('translate-x-full');
    sidebar.classList.remove('translate-x-0');
});

// -- Botones Principales (Desktop) --
deskInicio.addEventListener('click', () => switchView(viewInicio));
deskEmpresa.addEventListener('click', () => switchView(viewEmpresa));
deskServicios.addEventListener('click', () => switchView(viewServicios));
deskPlan.addEventListener('click', () => switchView(viewPlan));
logoBtn.addEventListener('click', () => switchView(viewInicio));

// -- Botones Principales (Mobile) --
mobInicio.addEventListener('click', () => switchView(viewInicio));
mobEmpresa.addEventListener('click', () => switchView(viewEmpresa));
mobServicios.addEventListener('click', () => switchView(viewServicios));
mobPlan.addEventListener('click', () => switchView(viewPlan));

// -- Submenús INICIO (Desktop & Mobile) --
deskHero.addEventListener('click', () => scrollToSection('top'));
deskMantenimiento.addEventListener('click', () => scrollToSection('mantenimiento-section'));
deskNosotros.addEventListener('click', () => scrollToSection('nosotros-section'));

mobMantenimiento.addEventListener('click', () => scrollToSection('mantenimiento-section'));
mobNosotros.addEventListener('click', () => scrollToSection('nosotros-section'));

// -- Submenús PLAN (Desktop & Mobile) --
deskGeneral.addEventListener('click', () => scrollToSection('section-general'));
deskBitacora.addEventListener('click', () => scrollToSection('section-bitacora'));
deskReporte.addEventListener('click', () => scrollToSection('section-reporte'));

mobGeneral.addEventListener('click', () => scrollToSection('section-general'));
mobBitacora.addEventListener('click', () => scrollToSection('section-bitacora'));
mobReporte.addEventListener('click', () => scrollToSection('section-reporte'));