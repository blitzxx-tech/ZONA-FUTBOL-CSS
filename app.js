/**
 * ZONA FÚTBOL - MOTOR DE TIENDA ULTRA MODERNO & EXPERIENCIA 3D PRO MAX
 * Incluye:
 * - Mini-juego interactivo de Tiro Penal con física, sonido de gol y desbloqueo de cupón
 * - Animación física de Vuelo al Carrito (Fly-to-Cart)
 * - Reflejo holográfico Panini/FUT en tarjetas con giroscopio/mouse
 * - Partículas flotantes de césped y reflectores de estadio en el Hero
 * - Síntesis de sonido Web Audio API (Balón, silbato, ovación de gol)
 * - Lluvia de confetti Canvas para celebraciones
 * - Giro 3D frontal y dorsal de cada jersey
 * - Generador estructurado de pedidos para WhatsApp
 */

// Catálogo completo de Camisetas (Retro y Nuevas)
const PRODUCTS = [
    {
        id: "rm-2025",
        name: "Real Madrid 2024/2025 - Local",
        category: "nuevas",
        league: "laliga",
        era: "2024/25",
        type: "Nueva Temporada",
        isRetro: false,
        price: 999,
        originalPrice: 1299,
        rating: 4.9,
        reviewsCount: 142,
        stockRemaining: 3,
        viewersCount: 19,
        image: "imagenes/camisetas/real-madrid.jpg",
        description: "Equipación titular de los Reyes de Europa. Tejido Jacquard con detalles pata de gallo en homenaje a San Isidro. Escudo termosellado en relieve y tecnología HEAT.RDY Pro.",
        badge: "NUEVA TEMPORADA",
        featured: true,
        tags: ["Bellingham 5", "Vinicius Jr 7", "Mbappé 9", "Modric 10"],
        theme: {
            bg: "linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)",
            color: "#0f172a",
            numColor: "#1e293b",
            collarColor: "#e2e8f0"
        },
        specs: {
            tejido: "100% Poliéster reciclado con filamentos aerodinámicos",
            tecnologia: "AEROREADY / HEAT.RDY Pro",
            corte: "Corte clásico regular ajustado al torso",
            cuello: "Cuello en V tejido con ribete elegante"
        }
    },
    {
        id: "fcb-2025",
        name: "FC Barcelona 2024/2025 - 125 Aniversario",
        category: "nuevas",
        league: "laliga",
        era: "2024/25",
        type: "Nueva Temporada",
        isRetro: false,
        price: 999,
        originalPrice: 1299,
        rating: 4.8,
        reviewsCount: 118,
        stockRemaining: 4,
        viewersCount: 23,
        image: "imagenes/camisetas/barcelona.jpg",
        description: "Edición conmemorativa del 125 aniversario. Diseño mítico a dos mitades blaugranas inspirado en el primer uniforme de 1899. Parche conmemorativo exclusivo y tecnología Dri-FIT ADV.",
        badge: "EDICIÓN ESPECIAL 125 AÑOS",
        featured: true,
        tags: ["Lamine Yamal 19", "Pedri 8", "Lewandowski 9", "Gavi 6"],
        theme: {
            bg: "linear-gradient(90deg, #a50044 50%, #004d98 50%)",
            color: "#ffed00",
            numColor: "#ffed00",
            collarColor: "#004d98"
        },
        specs: {
            tejido: "Poliéster técnico hidrófugo con patrón transpirable",
            tecnologia: "Nike Dri-FIT ADV Elite",
            corte: "Corte entallado deportivo",
            cuello: "Polo clásico sin botones"
        }
    },
    {
        id: "rm-retro-2002",
        name: "Real Madrid 2001/2002 Retro - La Novena de Zidane",
        category: "retro",
        league: "laliga",
        era: "2002",
        type: "Edición Retro",
        isRetro: true,
        price: 1149,
        originalPrice: 1499,
        rating: 5.0,
        reviewsCount: 230,
        stockRemaining: 2,
        viewersCount: 31,
        image: "imagenes/camisetas/real-madrid-retro.jpg",
        description: "La legendaria camiseta blanca del Centenario sin patrocinador con la que Zinedine Zidane marcó la histórica volea en Glasgow. Escudo bordado de época y tela pesada original.",
        badge: "JOYA HISTÓRICA ★ 2002",
        featured: true,
        tags: ["Zidane 5", "Raúl 7", "Roberto Carlos 3", "Figo 10"],
        theme: {
            bg: "linear-gradient(135deg, #ffffff 0%, #eceef1 100%)",
            color: "#1d3557",
            numColor: "#1d3557",
            collarColor: "#ffffff"
        },
        specs: {
            tejido: "Algodón técnico deportivo de gramaje premium retro",
            tecnologia: "Classic Climacool Retro Heritage",
            corte: "Corte clásico de los 2000s holgado",
            cuello: "Cuello blanco cruzado con vivos azules"
        }
    },
    {
        id: "milan-retro-2007",
        name: "AC Milan 2006/2007 Retro - Final Champions Atenas",
        category: "retro",
        league: "seriea",
        era: "2007",
        type: "Edición Retro",
        isRetro: true,
        price: 1099,
        originalPrice: 1399,
        rating: 4.9,
        reviewsCount: 165,
        stockRemaining: 5,
        viewersCount: 14,
        image: "imagenes/camisetas/milan.jpg",
        description: "La histórica rossonera con patrocinador Bwin con la que Kaká se consagró Balón de Oro y Pippo Inzaghi sentenció la revancha en Atenas. Rayas tradicionales con detalles de campeón.",
        badge: "CAMPEÓN DE EUROPA",
        featured: true,
        tags: ["Kaká 22", "Maldini 3", "Inzaghi 9", "Pirlo 21"],
        theme: {
            bg: "repeating-linear-gradient(90deg, #c30000 0px, #c30000 25px, #000000 25px, #000000 50px)",
            color: "#ffffff",
            numColor: "#ffb703",
            collarColor: "#000000"
        },
        specs: {
            tejido: "Interlock de poliéster de tacto sedoso y brillante",
            tecnologia: "Formotion Vintage Spec",
            corte: "Corte semi-holgado clásico italiano",
            cuello: "Polo deportivo negro con borde rojo"
        }
    },
    {
        id: "psg-2025",
        name: "Paris Saint-Germain 2024/2025 - Local",
        category: "nuevas",
        league: "ligue1",
        era: "2024/25",
        type: "Nueva Temporada",
        isRetro: false,
        price: 949,
        originalPrice: 1199,
        rating: 4.7,
        reviewsCount: 78,
        stockRemaining: 6,
        viewersCount: 11,
        image: "imagenes/camisetas/psg.jpg",
        description: "Regreso a la emblemática franja central Hechter roja pincelada sobre azul medianoche. Inspirada en el arte urbano parisino contemporáneo y la alta costura de Francia.",
        badge: "NUEVA TEMPORADA",
        featured: false,
        tags: ["Dembélé 10", "Barcola 29", "Hakimi 2", "Zaïre-Emery 33"],
        theme: {
            bg: "linear-gradient(90deg, #001c3d 35%, #da291c 45%, #ffffff 50%, #da291c 55%, #001c3d 65%)",
            color: "#ffffff",
            numColor: "#ffffff",
            collarColor: "#001c3d"
        },
        specs: {
            tejido: "100% poliéster reciclado de alto rendimiento",
            tecnologia: "Dri-FIT Stadium Pro",
            corte: "Ajuste estándar ergonómico",
            cuello: "Cuello redondo con detalle de la bandera francesa"
        }
    },
    {
        id: "arg-retro-1986",
        name: "Argentina 1986 Retro - Mundial México 86",
        category: "retro",
        league: "selecciones",
        era: "1986",
        type: "Edición Retro",
        isRetro: true,
        price: 1199,
        originalPrice: 1599,
        rating: 5.0,
        reviewsCount: 310,
        stockRemaining: 2,
        viewersCount: 45,
        image: "imagenes/camisetas/argentina-1986.jpg",
        description: "La armadura inmortal con la que Maradona maravilló al planeta en el Azteca: el Gol del Siglo y la Mano de Dios. Escudo AFA bordado en felpa retro y número 10 afelpado.",
        badge: "LEYENDA INMORTAL 1986",
        featured: true,
        tags: ["Maradona 10", "Valdano 11", "Burruchaga 7"],
        theme: {
            bg: "repeating-linear-gradient(90deg, #74acdf 0px, #74acdf 35px, #ffffff 35px, #ffffff 70px)",
            color: "#000000",
            numColor: "#000000",
            collarColor: "#ffffff"
        },
        specs: {
            tejido: "Punto piqué de algodón y poliéster réplica exacta",
            tecnologia: "Tejido AirVent Heritage clásico",
            corte: "Corte recto tradicional de los 80s",
            cuello: "Cuello redondo blanco elástico acanalado"
        }
    },
    {
        id: "bra-retro-2002",
        name: "Brasil 2002 Retro - Pentacampeón Mundial",
        category: "retro",
        league: "selecciones",
        era: "2002",
        type: "Edición Retro",
        isRetro: true,
        price: 1149,
        originalPrice: 1450,
        rating: 4.9,
        reviewsCount: 198,
        stockRemaining: 4,
        viewersCount: 28,
        image: "imagenes/camisetas/brazil-2002.jpg",
        description: "La canarinha de los 3 R (Ronaldo Nazário, Ronaldinho y Rivaldo) que conquistó la quinta estrella mundial. Líneas aerodinámicas verdes en contraste con el clásico amarillo solar.",
        badge: "PENTACAMPEÓN MUNDIAL",
        featured: true,
        tags: ["Ronaldo 9", "Ronaldinho 11", "Rivaldo 10", "Roberto Carlos 6"],
        theme: {
            bg: "linear-gradient(135deg, #fcd116 0%, #ffdf00 100%)",
            color: "#009c3b",
            numColor: "#002776",
            collarColor: "#009c3b"
        },
        specs: {
            tejido: "Doble capa transpirable de microfibra de época",
            tecnologia: "CoolMotion 2002 Vintage",
            corte: "Corte holgado de época",
            cuello: "Cuello asimétrico verde y amarillo"
        }
    },
    {
        id: "mancity-2025",
        name: "Manchester City 2024/2025 - Local (0161)",
        category: "nuevas",
        league: "premier",
        era: "2024/25",
        type: "Nueva Temporada",
        isRetro: false,
        price: 989,
        originalPrice: 1250,
        rating: 4.8,
        reviewsCount: 94,
        stockRemaining: 5,
        viewersCount: 17,
        image: "imagenes/camisetas/mancity-2025.jpg",
        description: "Diseño celeste tradicional con el código telefónico '0161' entretejido en cuellos y puños, celebrando las raíces de Manchester y los campeones de la Premier.",
        badge: "NUEVA TEMPORADA",
        featured: false,
        tags: ["Haaland 9", "De Bruyne 17", "Foden 47", "Rodri 16"],
        theme: {
            bg: "linear-gradient(135deg, #6cabdd 0%, #589fd9 100%)",
            color: "#ffffff",
            numColor: "#ffffff",
            collarColor: "#001838"
        },
        specs: {
            tejido: "Poliéster reciclado de ultra bajo peso",
            tecnologia: "ultraWEAVE & dryCELL",
            corte: "Ajuste atlético ergonómico",
            cuello: "Cuello elástico con patrón 0161 Jacquard"
        }
    },
    {
        id: "mex-retro-1998",
        name: "México 1998 Retro - Calendario Azteca",
        category: "retro",
        league: "selecciones",
        era: "1998",
        type: "Edición Retro",
        isRetro: true,
        price: 1199,
        originalPrice: 1550,
        rating: 5.0,
        reviewsCount: 289,
        stockRemaining: 1,
        viewersCount: 39,
        image: "imagenes/camisetas/mexico-1998.jpg",
        description: "Considerada una de las más bellas de la historia de los Mundiales. El calendario solar azteca sublimado en verde intenso. La de la Cuauhtemiña y los goles de Luis Hernández.",
        badge: "OBRA DE ARTE MUNDIALISTA",
        featured: true,
        tags: ["Cuauhtémoc 11", "Luis Hernández 15", "Campos 1"],
        theme: {
            bg: "radial-gradient(circle, #006847 40%, #004d34 100%)",
            color: "#ffffff",
            numColor: "#ffffff",
            collarColor: "#ce1126"
        },
        specs: {
            tejido: "Sublimado de alta densidad resistente al lavado",
            tecnologia: "ABA Sport Heritage Reproduction",
            corte: "Corte retro de los 90s amplio",
            cuello: "Cuello tipo polo rojo y blanco con botón"
        }
    },
    {
        id: "boca-retro-1981",
        name: "Boca Juniors 1981 Retro - Maradona 4 Estrellas",
        category: "retro",
        league: "clasicos",
        era: "1981",
        type: "Edición Retro",
        isRetro: true,
        price: 1099,
        originalPrice: 1399,
        rating: 5.0,
        reviewsCount: 174,
        stockRemaining: 3,
        viewersCount: 22,
        image: "imagenes/camisetas/boca-1981.jpg",
        description: "El diseño más icónico de Sudamérica: azul y oro con las cuatro estrellas iniciales en el pecho y las tres tiras blancas. La camiseta del Diego en La Bombonera.",
        badge: "CLÁSICO SUDAMERICANO",
        featured: false,
        tags: ["Maradona 10", "Brindisi 8", "Gatti 1"],
        theme: {
            bg: "linear-gradient(180deg, #002e7d 30%, #ffc400 30%, #ffc400 70%, #002e7d 70%)",
            color: "#ffffff",
            numColor: "#ffffff",
            collarColor: "#ffc400"
        },
        specs: {
            tejido: "Algodón peinado piqué de época",
            tecnologia: "Heritage Fabric 1981",
            corte: "Corte clásico vintage",
            cuello: "Cuello en V amarillo acanalado"
        }
    },
    {
        id: "arsenal-retro-2004",
        name: "Arsenal 2003/2004 Retro - 'The Invincibles'",
        category: "retro",
        league: "premier",
        era: "2004",
        type: "Edición Retro",
        isRetro: true,
        price: 1120,
        originalPrice: 1450,
        rating: 4.9,
        reviewsCount: 153,
        stockRemaining: 4,
        viewersCount: 16,
        image: "imagenes/camisetas/arsenal-retro-2004.jpg",
        description: "La armadura de los Invencibles de Wenger que ganaron la Premier League sin una sola derrota. Con el mítico patrocinio O2 y escudo dorado de honor.",
        badge: "LOS INVENCIBLES",
        featured: false,
        tags: ["Henry 14", "Bergkamp 10", "Vieira 4", "Pires 7"],
        theme: {
            bg: "linear-gradient(90deg, #ffffff 18%, #db0007 18%, #db0007 82%, #ffffff 82%)",
            color: "#ffffff",
            numColor: "#ffffff",
            collarColor: "#ffffff"
        },
        specs: {
            tejido: "Tejido brillante Total 90 de época",
            tecnologia: "Total 90 Aerovent Retro",
            corte: "Corte holgado de época",
            cuello: "Cuello redondo blanco continuo"
        }
    },
    {
        id: "inter-2025",
        name: "Inter de Milán 2024/2025 - Segunda Estrella",
        category: "nuevas",
        league: "seriea",
        era: "2024/25",
        type: "Nueva Temporada",
        isRetro: false,
        price: 969,
        originalPrice: 1220,
        rating: 4.8,
        reviewsCount: 67,
        stockRemaining: 5,
        viewersCount: 12,
        image: "imagenes/camisetas/inter-2025.jpg",
        description: "Histórica camiseta nerazzurra coronada con la prestigiosa Segunda Estrella en el pecho por la 20ª Serie A. Rayas vanguardistas verticales y diagonales.",
        badge: "SEGUNDA ESTRELLA",
        featured: false,
        tags: ["Lautaro 10", "Barella 23", "Thuram 9"],
        theme: {
            bg: "repeating-linear-gradient(90deg, #00529f 0px, #00529f 30px, #000000 30px, #000000 60px)",
            color: "#ffffff",
            numColor: "#ffcc00",
            collarColor: "#000000"
        },
        specs: {
            tejido: "Dri-FIT transpirable de microestructura diamantada",
            tecnologia: "Nike Dri-FIT Pro",
            corte: "Ajuste estándar confortable",
            cuello: "Cuello moderno cerrado nerazzurro"
        }
    }
];

// Configuración Multimoneda Dinámica
const CURRENCIES = {
    MXN: { symbol: '$', rate: 1.0, suffix: 'MXN', name: 'Pesos Mexicanos' },
    USD: { symbol: '$', rate: 0.054, suffix: 'USD', name: 'Dólares (USD)' },
    EUR: { symbol: '€', rate: 0.049, suffix: 'EUR', name: 'Euros (EUR)' },
    GBP: { symbol: '£', rate: 0.042, suffix: 'GBP', name: 'Libras Esterlinas (£)' },
    ARS: { symbol: '$', rate: 52.0, suffix: 'ARS', name: 'Pesos Argentinos' },
    COP: { symbol: '$', rate: 215.0, suffix: 'COP', name: 'Pesos Colombianos' }
};

function formatMoney(amountInMXN) {
    const code = AppState.currentCurrency || 'MXN';
    const cur = CURRENCIES[code] || CURRENCIES.MXN;
    const converted = Math.round(amountInMXN * cur.rate);
    return `${cur.symbol}${converted.toLocaleString()} ${cur.suffix}`;
}

// Estado global de la tienda
const AppState = {
    cart: JSON.parse(localStorage.getItem('zonafutbol_cart') || '[]'),
    favorites: JSON.parse(localStorage.getItem('zonafutbol_favs') || '[]'),
    currentFilter: 'todas',
    currentLeague: 'all',
    searchQuery: '',
    sortBy: 'destacados',
    appliedCoupon: null,
    discountPercentage: 0,
    currentCurrency: localStorage.getItem('zonafutbol_currency') || 'MXN',
    soundEnabled: localStorage.getItem('zonafutbol_sound') !== 'false'
};

// Cupones de descuento válidos (incluye GOLAZO15 del minijuego)
const COUPONS = {
    'ZONAFUTBOL10': 0.10,
    'RETRO2026': 0.15,
    'PRIMERACOMPRA': 0.10,
    'FUTBOLRETRO': 0.12,
    'GOLAZO15': 0.15
};

// Social sales feed
const SOCIAL_SALES_FEED = [
    { name: "Alejandro G.", city: "Guadalajara", jersey: "Real Madrid 2002 Retro", time: "hace 3 min" },
    { name: "Carlos M.", city: "CDMX", jersey: "Argentina 1986 Maradona", time: "hace 6 min" },
    { name: "Santiago L.", city: "Monterrey", jersey: "FC Barcelona 125 Años", time: "hace 11 min" },
    { name: "Diego R.", city: "Puebla", jersey: "México 1998 Calendario Azteca", time: "hace 15 min" },
    { name: "Andrés B.", city: "Querétaro", jersey: "AC Milan 2007 Kaká Retro", time: "hace 18 min" }
];

// ==========================================
// INICIALIZACIÓN DE TEMA & MONEDA
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initThemeMode() {
    const savedTheme = localStorage.getItem('zonafutbol_theme') || 'light';
    const icon = document.getElementById('theme-toggle-icon');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (icon) icon.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        if (icon) icon.textContent = '🌙';
    }
}

function toggleThemeMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('zonafutbol_theme', isDark ? 'dark' : 'light');

    const icon = document.getElementById('theme-toggle-icon');
    if (icon) {
        icon.textContent = isDark ? '☀️' : '🌙';
    }

    playStoreSound('click');
    showToast(isDark ? '🌙 Modo Noche Estadio Activado' : '☀️ Modo Día Activado');
}

function syncCurrencySelectUI() {
    const select = document.getElementById('currency-select');
    if (select) {
        select.value = AppState.currentCurrency;
    }
}

function changeStoreCurrency(newCurrency) {
    if (!CURRENCIES[newCurrency]) return;
    AppState.currentCurrency = newCurrency;
    localStorage.setItem('zonafutbol_currency', newCurrency);

    renderProducts();
    updateCartUI();
    setupCustomizerLivePreview();
    playStoreSound('click');
    showToast(`💱 Moneda cambiada a ${CURRENCIES[newCurrency].name}`);
}

function initApp() {
    initThemeMode();
    syncCurrencySelectUI();
    renderProducts();
    updateCartUI();
    updateFavoritesBadge();
    setupEventListeners();
    setupCustomizerLivePreview();
    setupCustomizer3D();
    initCountdownTimer();
    initHeroParticles();
    initThreeJSArena();
    updateSoundIcon();

    // Calibración inmediata del viewport 3D
    setTimeout(() => {
        if (typeof onThreeWindowResize === 'function') {
            onThreeWindowResize();
        }
    }, 100);
}

// ==========================================
// CINEMÁTICA DE ENTRADA (DESACTIVADA)
// ==========================================
let introDismissed = true;

function initIntroCinematic() {
    // Desactivada a petición del usuario para acceso directo
}

function dismissIntroCinematic() {
    introDismissed = true;
    document.body.style.overflow = '';
    if (typeof onThreeWindowResize === 'function') {
        onThreeWindowResize();
    }
}

// ==========================================
// PARTICULAS FLOTANTES DE ESTADIO (HERO CANVAS)
// ==========================================
function initHeroParticles() {
    const canvas = document.getElementById('hero-particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = [];
    const count = 45;

    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2.8 + 1,
            color: Math.random() > 0.4 ? 'rgba(0, 230, 118, ' : 'rgba(255, 183, 3, ',
            alpha: Math.random() * 0.6 + 0.2,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.8 - 0.2
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `${p.color}${p.alpha})`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#00e676';
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }
    animate();
}
// ==========================================
// SELECTOR INTERACTIVO DE VERSIÓN (FAN VS PLAYER)
// ==========================================
let currentSelectedJerseyVersion = 'fan';

function selectComparisonVersion(version) {
    currentSelectedJerseyVersion = version;
    const fanBox = document.getElementById('comp-box-fan');
    const playerBox = document.getElementById('comp-box-player');
    const pillFan = document.getElementById('pill-fan');
    const pillPlayer = document.getElementById('pill-player');
    const btnFan = document.getElementById('btn-select-fan');
    const btnPlayer = document.getElementById('btn-select-player');

    if (!fanBox || !playerBox) return;

    if (version === 'fan') {
        fanBox.classList.add('is-selected');
        playerBox.classList.remove('is-selected');

        if (pillFan) {
            pillFan.innerHTML = '<span class="pill-dot">✓</span> <span class="pill-label">Versión Marcada</span>';
        }
        if (pillPlayer) {
            pillPlayer.innerHTML = '<span class="pill-dot">○</span> <span class="pill-label">Clic para Marcar</span>';
        }

        if (btnFan) {
            btnFan.textContent = '✓ Versión Fan Marcada';
        }
        if (btnPlayer) {
            btnPlayer.textContent = 'Marcar Versión Jugador';
        }

        playStoreSound('click');
        showToast('✓ Has marcado la Versión Fan / Estadio (Corte estándar diario)');
    } else {
        playerBox.classList.add('is-selected');
        fanBox.classList.remove('is-selected');

        if (pillPlayer) {
            pillPlayer.innerHTML = '<span class="pill-dot">✓</span> <span class="pill-label">Versión Marcada</span>';
        }
        if (pillFan) {
            pillFan.innerHTML = '<span class="pill-dot">○</span> <span class="pill-label">Clic para Marcar</span>';
        }

        if (btnPlayer) {
            btnPlayer.textContent = '✓ Versión Jugador Marcada';
        }
        if (btnFan) {
            btnFan.textContent = 'Marcar Versión Fan';
        }

        playStoreSound('click');
        showToast('✓ Has marcado la Versión Jugador (Player / Authentic Slim Fit)');
    }
}
window.selectComparisonVersion = selectComparisonVersion;


// ==========================================
// VUELO FÍSICO AL CARRITO (FLY-TO-CART)
// ==========================================
function flyToCartAnimation(startImgElement) {
    const cartBtn = document.getElementById('header-cart-btn');
    if (!startImgElement || !cartBtn) return;

    const startRect = startImgElement.getBoundingClientRect();
    const endRect = cartBtn.getBoundingClientRect();

    const clone = document.createElement('img');
    clone.src = startImgElement.src;
    clone.className = 'flying-jersey-clone';
    clone.style.width = `${startRect.width}px`;
    clone.style.height = `${startRect.height}px`;
    clone.style.top = `${startRect.top}px`;
    clone.style.left = `${startRect.left}px`;
    document.body.appendChild(clone);

    // Animación física curva
    requestAnimationFrame(() => {
        clone.style.top = `${endRect.top + endRect.height / 4}px`;
        clone.style.left = `${endRect.left + endRect.width / 4}px`;
        clone.style.width = '30px';
        clone.style.height = '30px';
        clone.style.opacity = '0.4';
        clone.style.transform = 'rotate(720deg) scale(0.5)';
    });

    setTimeout(() => {
        clone.remove();
        cartBtn.style.transform = 'scale(1.25)';
        setTimeout(() => cartBtn.style.transform = '', 250);
    }, 750);
}

// ==========================================
// SISTEMA DE CONFETTI NATIVO CANVAS
// ==========================================
function launchConfettiCelebration() {
    const canvas = document.getElementById('confetti-canvas') || createConfettiCanvas();
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#00e676', '#ffb703', '#ffffff', '#38ef7d', '#ff3366', '#00d2ff'];
    const particles = [];
    const particleCount = 85;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: canvas.width / 2 + (Math.random() - 0.5) * 450,
            y: canvas.height * 0.4 + (Math.random() - 0.5) * 250,
            w: Math.random() * 11 + 6,
            h: Math.random() * 7 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 16,
            vy: Math.random() * -14 - 4,
            rotation: Math.random() * 360,
            vRot: (Math.random() - 0.5) * 12,
            opacity: 1
        });
    }

    let animationId;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let active = 0;

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.45;
            p.rotation += p.vRot;
            p.opacity -= 0.012;

            if (p.opacity > 0) {
                active++;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = Math.max(0, p.opacity);
                ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                ctx.restore();
            }
        });

        if (active > 0) {
            animationId = requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            cancelAnimationFrame(animationId);
        }
    }

    animate();
}

function createConfettiCanvas() {
    const c = document.createElement('canvas');
    c.id = 'confetti-canvas';
    document.body.appendChild(c);
    return c;
}

// ==========================================
// EFECTOS DE SONIDO WEB AUDIO API
// ==========================================
function toggleStoreAudio() {
    AppState.soundEnabled = !AppState.soundEnabled;
    localStorage.setItem('zonafutbol_sound', String(AppState.soundEnabled));
    updateSoundIcon();
    showToast(AppState.soundEnabled ? '🔊 Sonido y efectos activados' : '🔇 Sonido silenciado');
    if (AppState.soundEnabled) playStoreSound('click');
}

function updateSoundIcon() {
    const icon = document.getElementById('sound-icon');
    if (icon) {
        icon.textContent = AppState.soundEnabled ? '🔊' : '🔇';
    }
}

function playStoreSound(type = 'click') {
    if (!AppState.soundEnabled) return;
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();

        if (type === 'kick') {
            // Golpe seco y potente de balón de fútbol
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(140, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(35, ctx.currentTime + 0.15);
            gain.gain.setValueAtTime(0.35, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.18);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.18);
        } else if (type === 'cheer') {
            // Ovación de gol de estadio
            const bufferSize = ctx.sampleRate * 0.8;
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = Math.random() * 2 - 1;
            }
            const noise = ctx.createBufferSource();
            noise.buffer = buffer;
            const filter = ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(800, ctx.currentTime);
            filter.Q.setValueAtTime(3, ctx.currentTime);

            const gain = ctx.createGain();
            gain.gain.setValueAtTime(0.01, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.2);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.8);

            noise.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);
            noise.start();
            noise.stop(ctx.currentTime + 0.8);
        } else if (type === 'whistle') {
            // Silbato arbitral
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(2600, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(2900, ctx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.2, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.35);
        } else {
            // Pop de selección
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(540, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12);
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.15);
        }
    } catch (e) {
        // En caso de bloqueo por política de navegador
    }
}

// ==========================================
// RENDERIZADO DEL CATÁLOGO & EFECTOS 3D
// ==========================================
function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    let filtered = [...PRODUCTS];

    if (AppState.currentFilter === 'nuevas') {
        filtered = filtered.filter(p => !p.isRetro);
    } else if (AppState.currentFilter === 'retro') {
        filtered = filtered.filter(p => p.isRetro);
    } else if (AppState.currentFilter === 'selecciones') {
        filtered = filtered.filter(p => p.league === 'selecciones');
    } else if (AppState.currentFilter === 'europeos') {
        filtered = filtered.filter(p => ['laliga', 'premier', 'seriea', 'ligue1'].includes(p.league));
    }

    if (AppState.currentLeague !== 'all') {
        filtered = filtered.filter(p => p.league === AppState.currentLeague);
    }

    if (AppState.searchQuery.trim() !== '') {
        const query = AppState.searchQuery.toLowerCase();
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.era.toLowerCase().includes(query) ||
            p.tags.some(t => t.toLowerCase().includes(query))
        );
    }

    if (AppState.sortBy === 'precio-menor') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (AppState.sortBy === 'precio-mayor') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (AppState.sortBy === 'calificacion') {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (AppState.sortBy === 'nombre') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else {
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #ffffff; border-radius: var(--radius-lg); border: 1px dashed var(--border-light);">
                <div style="font-size: 3.5rem; margin-bottom: 12px;">⚽🔍</div>
                <h3 style="font-family: var(--font-heading); color: var(--primary); margin-bottom: 6px;">No encontramos camisetas con ese criterio</h3>
                <p style="color: var(--text-muted-dark); margin-bottom: 18px;">Intenta con "Madrid", "Barcelona", "Retro", "1986" o "Zidane".</p>
                <button class="btn btn-primary" onclick="resetFilters()">Ver Todas las Camisetas</button>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(product => {
        const isFav = AppState.favorites.includes(product.id);
        const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

        return `
            <article class="product-card" data-id="${product.id}" id="card-${product.id}">
                <!-- Reflejo Holográfico Panini / FUT Specular Foil -->
                <div class="card-hologram-glare" id="glare-${product.id}"></div>

                <div class="card-visual-container">
                    <div class="card-img-flipper" id="flipper-${product.id}">
                        <!-- Cara Frontal -->
                        <div class="card-img-front">
                            <img src="${product.image}" id="img-front-${product.id}" alt="${product.name}" loading="lazy" onerror="this.src='imagenes/camisetas/tienda-camisetas.jpg'">
                        </div>

                        <!-- Cara Trasera 3D (Dorsal con nombre y número) -->
                        <div class="card-img-back" style="background: ${product.theme.bg}; color: ${product.theme.color};">
                            <div class="dorsal-preview-player">
                                ${product.tags[0].split(' ')[0]}
                            </div>
                            <div class="dorsal-preview-number" style="color: ${product.theme.numColor};">
                                ${product.tags[0].split(' ')[1] || '10'}
                            </div>
                            <span class="dorsal-auth-label">
                                TIPOGRAFÍA OFICIAL
                            </span>
                        </div>
                    </div>

                    <!-- Badge de Temporada / Archivo -->
                    <span class="card-tag-badge ${product.isRetro ? 'tag-retro-gold' : 'tag-new-season'}">
                        ${product.isRetro ? 'ARCHIVO HISTÓRICO' : 'TEMPORADA 24/25'}
                    </span>

                    <!-- Botón Girar Camiseta (Dorsal) -->
                    <button type="button" class="btn-flip-jersey" onclick="toggleCardFlip('${product.id}')" title="Girar y ver dorsal">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="23 4 23 10 17 10"></polyline>
                            <polyline points="1 20 1 14 7 14"></polyline>
                            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                        </svg>
                        <span>Dorsal</span>
                    </button>

                    <!-- Botón Favorito -->
                    <button class="btn-favorite-heart ${isFav ? 'active' : ''}" onclick="toggleFavorite('${product.id}')" title="Guardar en lista de deseos" aria-label="Favorito">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? '#ef4444' : 'none'}" stroke="${isFav ? '#ef4444' : '#f8fafc'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>

                    <!-- Overlay Vista Rápida -->
                    <div class="card-quick-overlay">
                        <button class="btn-action-quickview" onclick="openQuickView('${product.id}')">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            Ficha Técnica & Zoom
                        </button>
                    </div>
                </div>

                <div class="card-content-body">
                    <div class="card-meta-top">
                        <span class="era-badge">ED. ${product.era}</span>
                        <div class="rating-badge">
                            <span class="star-icon">★</span> ${product.rating} <span class="rating-count">(${product.reviewsCount})</span>
                        </div>
                    </div>

                    <div class="card-club-label">[${product.specs?.tecnologia?.split(' ')[0]?.toUpperCase() || 'OFFICIAL'} // ${product.type.toUpperCase()}]</div>
                    <h3 class="card-jersey-title">${product.name}</h3>
                    <p class="card-jersey-desc">${product.description.substring(0, 95)}...</p>

                    <div class="stock-urgency-badge">
                        <span class="stock-pulse-dot"></span>
                        <span>Disponibilidad en almacén: <strong>${product.stockRemaining} unidades</strong></span>
                    </div>

                    <div class="size-selection-row" id="size-group-${product.id}">
                        <label>Talla:</label>
                        <div class="sizes-btn-group">
                            ${['S', 'M', 'L', 'XL', 'XXL'].map((size, idx) => `
                                <button type="button" class="size-pill-btn ${idx === 1 ? 'selected' : ''}" 
                                        onclick="selectInlineSize('${product.id}', '${size}', this)">
                                    ${size}
                                </button>
                            `).join('')}
                        </div>
                    </div>

                    <div class="card-price-bottom">
                        <div class="price-flex-row">
                            <span class="price-current">${formatMoney(product.price)}</span>
                            <span class="price-old">${formatMoney(product.originalPrice)}</span>
                            <span class="discount-tag">-${discountPercent}%</span>
                        </div>
                    </div>

                    <button class="btn-card-add-cart" onclick="quickAddToCart('${product.id}', this)">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        Añadir a la Cesta
                    </button>
                </div>
            </article>
        `;
    }).join('');

    const resultsCounter = document.getElementById('results-counter');
    if (resultsCounter) {
        resultsCounter.textContent = `Mostrando ${filtered.length} camiseta${filtered.length === 1 ? '' : 's'}`;
    }

    attachCardTiltAndGlareParallax();
}

// Giro 3D Frontal / Trasero de camiseta
function toggleCardFlip(productId) {
    const flipper = document.getElementById(`flipper-${productId}`);
    if (flipper) {
        flipper.classList.toggle('flipped');
        playStoreSound('click');
    }
}

// Efecto de contorno iluminado en tarjetas
function attachCardTiltAndGlareParallax() {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// Selección de talla en tarjeta
function selectInlineSize(productId, size, btn) {
    const group = document.getElementById(`size-group-${productId}`);
    if (!group) return;
    group.querySelectorAll('.size-pill-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    playStoreSound('click');
}

function getSelectedInlineSize(productId) {
    const group = document.getElementById(`size-group-${productId}`);
    if (!group) return 'M';
    const selected = group.querySelector('.size-pill-btn.selected');
    return selected ? selected.textContent.trim() : 'M';
}

// ==========================================
// CARRITO DE COMPRAS & STORAGE
// ==========================================
function quickAddToCart(productId, triggerBtn) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    // Disparar animación de vuelo de la camiseta
    const imgFront = document.getElementById(`img-front-${productId}`);
    if (imgFront) {
        flyToCartAnimation(imgFront);
    }

    const size = getSelectedInlineSize(productId);
    addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: size,
        isRetro: product.isRetro,
        era: product.era,
        customName: '',
        customNumber: '',
        patch: 'Sin parches adicionales'
    });
}

function addToCart(item) {
    const cartKey = `${item.id}_${item.size}_${item.customName}_${item.customNumber}_${item.patch}`;
    const existingIndex = AppState.cart.findIndex(i => i.cartKey === cartKey);

    if (existingIndex > -1) {
        AppState.cart[existingIndex].quantity += 1;
    } else {
        AppState.cart.push({
            ...item,
            cartKey: cartKey,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    playStoreSound('whistle');
    launchConfettiCelebration();
    showToast(`¡Agregado al carrito: ${item.name} (${item.size})!`);
    openCartDrawer();
}

function updateCartQuantity(cartKey, change) {
    const itemIndex = AppState.cart.findIndex(i => i.cartKey === cartKey);
    if (itemIndex === -1) return;

    AppState.cart[itemIndex].quantity += change;

    if (AppState.cart[itemIndex].quantity <= 0) {
        AppState.cart.splice(itemIndex, 1);
        showToast('Producto eliminado del carrito');
    }

    saveCart();
    updateCartUI();
    playStoreSound('click');
}

function removeCartItem(cartKey) {
    AppState.cart = AppState.cart.filter(i => i.cartKey !== cartKey);
    saveCart();
    updateCartUI();
    showToast('Camiseta eliminada del carrito');
    playStoreSound('click');
}

function saveCart() {
    localStorage.setItem('zonafutbol_cart', JSON.stringify(AppState.cart));
}

function calculateCartTotals() {
    const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountAmount = Math.round(subtotal * AppState.discountPercentage);
    const freeShippingThreshold = 999;
    const shipping = subtotal === 0 ? 0 : (subtotal >= freeShippingThreshold ? 0 : 120);
    const total = Math.max(0, subtotal - discountAmount + shipping);

    return {
        subtotal,
        discountAmount,
        shipping,
        total,
        freeShippingRemaining: Math.max(0, freeShippingThreshold - subtotal)
    };
}

function updateCartUI() {
    const totalItems = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
    const badges = document.querySelectorAll('.cart-badge-count');
    badges.forEach(badge => {
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? 'inline-flex' : 'none';
    });

    const itemsContainer = document.getElementById('cart-drawer-items');
    const emptyState = document.getElementById('cart-empty-message');
    const summaryBlock = document.getElementById('cart-drawer-summary');

    if (!itemsContainer) return;

    if (AppState.cart.length === 0) {
        itemsContainer.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        if (summaryBlock) summaryBlock.style.display = 'none';
        return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (summaryBlock) summaryBlock.style.display = 'block';

    const totals = calculateCartTotals();

    itemsContainer.innerHTML = AppState.cart.map(item => `
        <div class="cart-product-row">
            <img src="${item.image}" alt="${item.name}" class="cart-product-img" onerror="this.src='imagenes/camisetas/tienda-camisetas.jpg'">
            <div class="cart-product-info">
                <div class="cart-product-title-row">
                    <h4>${item.name}</h4>
                    <button class="cart-item-delete-btn" onclick="removeCartItem('${item.cartKey}')" title="Eliminar">&times;</button>
                </div>
                <div class="cart-item-specs-pills">
                    <span class="pill-size-tag">Talla: <strong>${item.size}</strong></span>
                    ${item.customName && item.customNumber ? `
                        <span class="pill-custom-tag">⚽ #${item.customNumber} ${item.customName}</span>
                    ` : item.customNumber ? `
                        <span class="pill-custom-tag">⚽ Dorsal #${item.customNumber}</span>
                    ` : item.customName ? `
                        <span class="pill-custom-tag">⚽ Nombre: ${item.customName}</span>
                    ` : (item.name && item.name.includes('Lisa')) ? `
                        <span class="pill-custom-tag" style="background:#f1f5f9;color:#475569;border-color:#cbd5e1;">✨ Lisa (Sin estampado)</span>
                    ` : ''}
                    ${item.patch && item.patch !== 'Sin parches adicionales' ? `
                        <span class="pill-patch-tag">🏆 ${item.patch}</span>
                    ` : ''}
                </div>
                <div class="cart-bottom-actions">
                    <div class="qty-counter-control">
                        <button class="qty-adjust-btn" onclick="updateCartQuantity('${item.cartKey}', -1)">-</button>
                        <span class="qty-display-number">${item.quantity}</span>
                        <button class="qty-adjust-btn" onclick="updateCartQuantity('${item.cartKey}', 1)">+</button>
                    </div>
                    <span class="cart-item-subtotal-price">${formatMoney(item.price * item.quantity)}</span>
                </div>
            </div>
        </div>
    `).join('');

    document.getElementById('cart-subtotal').textContent = formatMoney(totals.subtotal);
    document.getElementById('cart-shipping').textContent = totals.shipping === 0 ? '¡GRATIS!' : formatMoney(totals.shipping);
    document.getElementById('cart-total').textContent = formatMoney(totals.total);

    const discountRow = document.getElementById('cart-discount-row');
    if (discountRow) {
        if (totals.discountAmount > 0) {
            discountRow.style.display = 'flex';
            document.getElementById('cart-discount').textContent = `-${formatMoney(totals.discountAmount)}`;
        } else {
            discountRow.style.display = 'none';
        }
    }

    const shippingBar = document.getElementById('shipping-progress-bar');
    const shippingText = document.getElementById('shipping-progress-text');
    if (shippingBar && shippingText) {
        const percent = Math.min(100, Math.round((totals.subtotal / 999) * 100));
        shippingBar.style.width = `${percent}%`;
        if (totals.freeShippingRemaining <= 0) {
            shippingText.innerHTML = `🎉 <strong>¡Felicidades! Tienes ENVÍO GRATIS garantizado</strong>`;
        } else {
            shippingText.innerHTML = `Te faltan <strong>${formatMoney(totals.freeShippingRemaining)}</strong> para <strong>Envío Gratis</strong>`;
        }
    }
}

// Cupón de descuento
function applyCoupon() {
    const input = document.getElementById('coupon-input');
    if (!input) return;
    const code = input.value.trim().toUpperCase();

    if (COUPONS[code]) {
        AppState.appliedCoupon = code;
        AppState.discountPercentage = COUPONS[code];
        updateCartUI();
        launchConfettiCelebration();
        playStoreSound('click');
        showToast(`¡Cupón ${code} aplicado! (${Math.round(COUPONS[code] * 100)}% de descuento)`);
    } else {
        showToast('Cupón no válido. Prueba: ZONAFUTBOL10 o GOLAZO15', 'error');
    }
}

// Cupón relámpago de barra superior (Top Ticker)
function applySpecialPenaltyCoupon() {
    const couponCode = 'RETRO2026';
    AppState.appliedCoupon = couponCode;
    AppState.discountPercentage = COUPONS[couponCode] || 0.15;

    const input = document.getElementById('coupon-input');
    if (input) input.value = couponCode;

    updateCartUI();
    openCartDrawer();
    launchConfettiCelebration();
    playStoreSound('cheer');
    showToast('🎉 ¡Cupón RETRO2026 activado! Tienes 15% de descuento en tu pedido.');
}

// ==========================================
// CHECKOUT Y ENVÍO A WHATSAPP
// ==========================================
function prepareWhatsAppOrder() {
    if (AppState.cart.length === 0) {
        showToast('Tu carrito está vacío', 'error');
        return;
    }
    const checkoutModal = document.getElementById('modal-checkout');
    if (checkoutModal) {
        checkoutModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function submitOrderToWhatsApp(event) {
    if (event) event.preventDefault();

    const name = document.getElementById('order-name')?.value.trim() || 'Cliente Zona Fútbol';
    const phone = document.getElementById('order-phone')?.value.trim() || 'No especificado';
    const city = document.getElementById('order-city')?.value.trim() || 'México';
    const address = document.getElementById('order-address')?.value.trim() || 'Entrega a acordar';
    const paymentMethod = document.getElementById('order-payment')?.value || 'Transferencia / Tarjeta';
    const notes = document.getElementById('order-notes')?.value.trim() || '';

    const totals = calculateCartTotals();

    let itemsList = AppState.cart.map((item, index) => {
        let text = `${index + 1}. *${item.name}*\n   - Talla: ${item.size} | Cantidad: ${item.quantity} | $${(item.price * item.quantity).toLocaleString()} MXN`;
        if (item.customName && item.customNumber) {
            text += `\n   - Estampado: Dorsal #${item.customNumber} | Nombre: ${item.customName}`;
        } else if (item.customNumber && !item.customName) {
            text += `\n   - Estampado: Solo Dorsal #${item.customNumber} (Sin nombre en espalda)`;
        } else if (item.customName && !item.customNumber) {
            text += `\n   - Estampado: Solo Nombre: ${item.customName} (Sin dorsal)`;
        } else if (item.name && item.name.includes('Lisa')) {
            text += `\n   - Estampado: Versión Lisa Original (Sin dorsal ni nombre)`;
        }
        if (item.patch && item.patch !== 'Sin parches adicionales') {
            text += `\n   - Parches: ${item.patch}`;
        }
        return text;
    }).join('\n\n');

    let msg = `👋 *¡HOLA ZONA FÚTBOL! QUIERO CONFIRMAR UN PEDIDO:* ⚽\n\n`;
    msg += `👤 *Cliente:* ${name}\n`;
    msg += `📱 *Teléfono:* ${phone}\n`;
    msg += `📍 *Ciudad/Estado:* ${city}\n`;
    msg += `🏠 *Dirección de Entrega:* ${address}\n`;
    msg += `💳 *Método de Pago Preferido:* ${paymentMethod}\n\n`;
    msg += `🛒 *RESUMEN DE PRODUCTOS:*\n${itemsList}\n\n`;
    msg += `💵 *Subtotal:* $${totals.subtotal.toLocaleString()} MXN\n`;
    if (totals.discountAmount > 0) {
        msg += `🏷️ *Descuento (${AppState.appliedCoupon}):* -$${totals.discountAmount.toLocaleString()} MXN\n`;
    }
    msg += `🚚 *Envío:* ${totals.shipping === 0 ? 'GRATIS' : '$' + totals.shipping + ' MXN'}\n`;
    msg += `💰 *TOTAL A PAGAR:* $${totals.total.toLocaleString()} MXN\n\n`;
    if (notes) {
        msg += `📝 *Notas del pedido:* ${notes}\n\n`;
    }
    msg += `¿Me confirman disponibilidad y los datos bancarios para realizar el pago? ¡Muchas gracias!`;

    const waNumber = "525512345678";
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;

    // Sincronizar pedido con el Panel Administrativo (ERP / Dashboard)
    try {
        const adminOrders = JSON.parse(localStorage.getItem('zonafutbol_admin_orders') || '[]');
        const newOrderId = `ZF-${1050 + adminOrders.length}`;
        AppState.cart.forEach((cItem, idx) => {
            adminOrders.unshift({
                id: idx === 0 ? newOrderId : `${newOrderId}-${idx + 1}`,
                date: new Date().toISOString().replace('T', ' ').slice(0, 16),
                timestamp: Date.now(),
                client: name,
                phone: phone.replace(/\D/g, '') || '525512345678',
                city: city,
                address: address,
                branch: "Tienda Online",
                productId: cItem.id,
                productName: cItem.name,
                size: cItem.size,
                customName: cItem.customName || '',
                customNumber: cItem.customNumber || '',
                patch: cItem.patch || 'Sin parches adicionales',
                mode: (cItem.customName && cItem.customNumber) ? 'full' : (cItem.customNumber ? 'number-only' : (cItem.customName ? 'name-only' : 'plain')),
                price: cItem.price * cItem.quantity,
                paymentMethod: paymentMethod,
                status: (cItem.customName || cItem.customNumber) ? "En Taller" : "Pendiente"
            });
        });
        localStorage.setItem('zonafutbol_admin_orders', JSON.stringify(adminOrders));
    } catch (e) {
        console.error('Error sincronizando orden con panel admin:', e);
    }

    playStoreSound('cheer');
    launchConfettiCelebration();
    closeAllModals();
    window.open(waUrl, '_blank');
    showToast('¡Redirigiendo a WhatsApp oficial para finalizar tu pedido!');
}

// ==========================================
// ESTUDIO DE PERSONALIZACIÓN DINÁMICO
// ==========================================
let currentCustomizerMode = 'full'; // 'full' | 'number-only' | 'name-only' | 'plain'

function setCustomizerMode(mode) {
    currentCustomizerMode = mode;

    const nameInput = document.getElementById('cust-name-input');
    const numberInput = document.getElementById('cust-number-input');
    const noNameChk = document.getElementById('cust-no-name-chk');
    const noNumberChk = document.getElementById('cust-no-number-chk');

    // Actualizar botones de modo
    const pills = document.querySelectorAll('.cust-mode-pill');
    pills.forEach(pill => {
        if (pill.dataset.mode === mode) {
            pill.classList.add('active');
        } else {
            pill.classList.remove('active');
        }
    });

    if (mode === 'full') {
        if (nameInput) {
            nameInput.disabled = false;
            if (!nameInput.value.trim()) nameInput.value = 'ZIDANE';
        }
        if (numberInput) {
            numberInput.disabled = false;
            if (!numberInput.value.trim()) numberInput.value = '5';
        }
        if (noNameChk) noNameChk.checked = false;
        if (noNumberChk) noNumberChk.checked = false;
    } else if (mode === 'number-only') {
        if (nameInput) nameInput.disabled = true;
        if (numberInput) {
            numberInput.disabled = false;
            if (!numberInput.value.trim()) numberInput.value = '10';
        }
        if (noNameChk) noNameChk.checked = true;
        if (noNumberChk) noNumberChk.checked = false;
    } else if (mode === 'name-only') {
        if (nameInput) {
            nameInput.disabled = false;
            if (!nameInput.value.trim()) nameInput.value = 'MESSI';
        }
        if (numberInput) numberInput.disabled = true;
        if (noNameChk) noNameChk.checked = false;
        if (noNumberChk) noNumberChk.checked = true;
    } else if (mode === 'plain') {
        if (nameInput) nameInput.disabled = true;
        if (numberInput) numberInput.disabled = true;
        if (noNameChk) noNameChk.checked = true;
        if (noNumberChk) noNumberChk.checked = true;
    }

    updateCustomizerPreview();
}

function toggleCustomizerCheckbox(field, isChecked) {
    const noNameChk = document.getElementById('cust-no-name-chk');
    const noNumberChk = document.getElementById('cust-no-number-chk');
    const nameInput = document.getElementById('cust-name-input');
    const numberInput = document.getElementById('cust-number-input');

    const noName = noNameChk ? noNameChk.checked : false;
    const noNumber = noNumberChk ? noNumberChk.checked : false;

    if (nameInput) nameInput.disabled = noName;
    if (numberInput) numberInput.disabled = noNumber;

    let targetMode = 'full';
    if (noName && noNumber) {
        targetMode = 'plain';
    } else if (noName && !noNumber) {
        targetMode = 'number-only';
    } else if (!noName && noNumber) {
        targetMode = 'name-only';
    } else {
        targetMode = 'full';
    }

    currentCustomizerMode = targetMode;

    const pills = document.querySelectorAll('.cust-mode-pill');
    pills.forEach(pill => {
        if (pill.dataset.mode === targetMode) {
            pill.classList.add('active');
        } else {
            pill.classList.remove('active');
        }
    });

    updateCustomizerPreview();
}

function updateCustomizerPreview() {
    const jerseySelect = document.getElementById('cust-jersey-select');
    const nameInput = document.getElementById('cust-name-input');
    const numberInput = document.getElementById('cust-number-input');
    const patchSelect = document.getElementById('cust-patch-select');
    const noNameChk = document.getElementById('cust-no-name-chk');
    const noNumberChk = document.getElementById('cust-no-number-chk');

    if (!jerseySelect) return;

    const product = PRODUCTS.find(p => p.id === jerseySelect.value) || PRODUCTS[0];
    const isNoName = noNameChk ? noNameChk.checked : false;
    const isNoNumber = noNumberChk ? noNumberChk.checked : false;

    const rawName = nameInput ? nameInput.value.trim().toUpperCase() : '';
    const rawNumber = numberInput ? numberInput.value.trim() : '';

    const nameVal = isNoName ? '' : rawName;
    const numVal = isNoNumber ? '' : rawNumber;
    const patchVal = patchSelect ? patchSelect.value : 'Sin parches adicionales';

    const previewName = document.getElementById('preview-player-name');
    const previewNumber = document.getElementById('preview-player-number');
    const previewPlain = document.getElementById('preview-plain-indicator');
    const previewJerseyImg = document.getElementById('preview-jersey-img');
    const previewTeamTitle = document.getElementById('preview-team-title');
    const previewPatchBadge = document.getElementById('preview-patch-badge');
    const canvasBack = document.querySelector('.jersey-back-canvas');

    // Nombre en espalda
    if (previewName) {
        if (isNoName || !nameVal) {
            previewName.textContent = '';
            previewName.style.display = 'none';
        } else {
            previewName.textContent = nameVal;
            previewName.style.display = 'block';
        }
    }

    // Número / dorsal
    if (previewNumber) {
        if (isNoNumber || !numVal) {
            previewNumber.textContent = '';
            previewNumber.style.display = 'none';
        } else {
            previewNumber.textContent = numVal;
            previewNumber.style.display = 'block';
        }
    }

    // Indicador edición lisa
    if (previewPlain) {
        if (isNoName && isNoNumber) {
            previewPlain.style.display = 'block';
        } else {
            previewPlain.style.display = 'none';
        }
    }

    if (previewJerseyImg) previewJerseyImg.src = product.image;
    if (previewTeamTitle) previewTeamTitle.textContent = `${product.name} (${product.era})`;
    if (previewPatchBadge) {
        if (patchVal === 'Sin parches adicionales') {
            previewPatchBadge.style.display = 'none';
        } else {
            previewPatchBadge.style.display = 'block';
            previewPatchBadge.textContent = patchVal.replace(' (+ $80)', '').replace(' (+ $50)', '');
        }
    }

    if (canvasBack && product.theme) {
        canvasBack.style.background = product.theme.bg;
        if (previewName) previewName.style.color = product.theme.color;
        if (previewNumber) previewNumber.style.color = product.theme.numColor;
    }

    // Cálculo de suplementos y desglose
    let custFee = 0;
    let feeLabel = `+${formatMoney(0)} (Lisa)`;
    if (!isNoName && !isNoNumber) {
        custFee = 120;
        feeLabel = `+${formatMoney(120)} (Completo)`;
    } else if (!isNoName && isNoNumber) {
        custFee = 70;
        feeLabel = `+${formatMoney(70)} (Solo Nombre)`;
    } else if (isNoName && !isNoNumber) {
        custFee = 70;
        feeLabel = `+${formatMoney(70)} (Solo Dorsal)`;
    } else {
        custFee = 0;
        feeLabel = `+${formatMoney(0)} (Sin estampado)`;
    }

    let patchFee = 0;
    if (patchVal.includes('Champions') || patchVal.includes('Mundial')) patchFee = 80;
    else if (patchVal.includes('Liga')) patchFee = 50;

    const basePriceEl = document.getElementById('cust-base-price');
    const feeDisplayEl = document.getElementById('cust-fee-display');
    const patchRowEl = document.getElementById('cust-patch-row');
    const patchFeeEl = document.getElementById('cust-patch-fee-display');
    const totalPriceEl = document.getElementById('cust-total-price');
    const btnTextEl = document.getElementById('cust-btn-text');

    const totalJerseyPrice = product.price + custFee + patchFee;

    if (basePriceEl) basePriceEl.textContent = formatMoney(product.price);
    if (feeDisplayEl) feeDisplayEl.textContent = feeLabel;
    if (patchRowEl) {
        if (patchFee > 0) {
            patchRowEl.style.display = 'flex';
            if (patchFeeEl) patchFeeEl.textContent = `+${formatMoney(patchFee)}`;
        } else {
            patchRowEl.style.display = 'none';
        }
    }
    if (totalPriceEl) totalPriceEl.textContent = formatMoney(totalJerseyPrice);

    if (btnTextEl) {
        if (isNoName && isNoNumber) {
            btnTextEl.textContent = `Agregar Camiseta Lisa al Carrito (${formatMoney(totalJerseyPrice)})`;
        } else if (!isNoName && isNoNumber) {
            btnTextEl.textContent = `Agregar Camiseta (Solo Nombre) (${formatMoney(totalJerseyPrice)})`;
        } else if (isNoName && !isNoNumber) {
            btnTextEl.textContent = `Agregar Camiseta (Solo Dorsal) (${formatMoney(totalJerseyPrice)})`;
        } else {
            btnTextEl.textContent = `Agregar Camiseta Personalizada (${formatMoney(totalJerseyPrice)})`;
        }
    }
}

function setupCustomizerLivePreview() {
    const jerseySelect = document.getElementById('cust-jersey-select');
    const nameInput = document.getElementById('cust-name-input');
    const numberInput = document.getElementById('cust-number-input');
    const patchSelect = document.getElementById('cust-patch-select');

    if (!jerseySelect || !nameInput || !numberInput) return;

    jerseySelect.innerHTML = PRODUCTS.map(p => `
        <option value="${p.id}">${p.name} - ${formatMoney(p.price)} (${p.isRetro ? 'Retro' : 'Nueva'})</option>
    `).join('');

    jerseySelect.addEventListener('change', updateCustomizerPreview);
    nameInput.addEventListener('input', updateCustomizerPreview);
    numberInput.addEventListener('input', updateCustomizerPreview);
    if (patchSelect) patchSelect.addEventListener('change', updateCustomizerPreview);

    updateCustomizerPreview();
}

function addCustomizedJerseyToCart() {
    const jerseySelect = document.getElementById('cust-jersey-select');
    const nameInput = document.getElementById('cust-name-input');
    const numberInput = document.getElementById('cust-number-input');
    const sizeSelect = document.getElementById('cust-size-select');
    const patchSelect = document.getElementById('cust-patch-select');
    const noNameChk = document.getElementById('cust-no-name-chk');
    const noNumberChk = document.getElementById('cust-no-number-chk');

    if (!jerseySelect) return;

    const product = PRODUCTS.find(p => p.id === jerseySelect.value);
    if (!product) return;

    const isNoName = noNameChk ? noNameChk.checked : false;
    const isNoNumber = noNumberChk ? noNumberChk.checked : false;

    const name = isNoName ? '' : (nameInput ? nameInput.value.trim().toUpperCase() : '');
    const number = isNoNumber ? '' : (numberInput ? numberInput.value.trim() : '');
    const size = sizeSelect ? sizeSelect.value : 'L';
    const patch = patchSelect ? patchSelect.value : 'Sin parches adicionales';

    let customizationFee = 0;
    let itemTitleSuffix = '';
    let toastMessage = '';

    if (!isNoName && !isNoNumber) {
        customizationFee = 120;
        itemTitleSuffix = `[Personalizada #${number || '10'} ${name || 'OFICIAL'}]`;
        toastMessage = `¡Camiseta personalizada #${number || '10'} ${name || 'OFICIAL'} añadida!`;
    } else if (isNoName && !isNoNumber) {
        customizationFee = 70;
        itemTitleSuffix = `[Solo Dorsal #${number || '10'}]`;
        toastMessage = `¡Camiseta con dorsal #${number || '10'} (sin nombre) añadida!`;
    } else if (!isNoName && isNoNumber) {
        customizationFee = 70;
        itemTitleSuffix = `[Solo Nombre ${name || 'OFICIAL'}]`;
        toastMessage = `¡Camiseta con nombre ${name || 'OFICIAL'} (sin dorsal) añadida!`;
    } else {
        customizationFee = 0;
        itemTitleSuffix = `[Lisa Original]`;
        toastMessage = `¡Camiseta lisa original (sin estampado) añadida!`;
    }

    let patchFee = 0;
    if (patch.includes('Champions') || patch.includes('Mundial')) patchFee = 80;
    else if (patch.includes('Liga')) patchFee = 50;

    addToCart({
        id: product.id,
        name: `${product.name} ${itemTitleSuffix}`,
        price: product.price + customizationFee + patchFee,
        image: product.image,
        size: size,
        isRetro: product.isRetro,
        era: product.era,
        customName: name,
        customNumber: number,
        patch: patch
    });

    showToast(toastMessage);
}

// ==========================================
// VISTA RÁPIDA (MODAL ZOOM)
// ==========================================
function openQuickView(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('modal-quickview');
    const content = document.getElementById('quickview-content');
    if (!modal || !content) return;

    const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    content.innerHTML = `
        <div class="quickview-grid">
            <div class="qv-media">
                <div class="qv-main-img-box" id="qv-zoom-box">
                    <img id="qv-hero-img" src="${product.image}" alt="${product.name}" onerror="this.src='imagenes/camisetas/tienda-camisetas.jpg'">
                    <span class="qv-badge ${product.isRetro ? 'badge-retro' : 'badge-new'}">
                        ${product.isRetro ? 'HISTÓRICA RETRO' : 'NUEVA TEMPORADA'}
                    </span>
                </div>
                <div class="qv-thumbnails">
                    <button class="qv-thumb active" onclick="changeQvImage('${product.image}', this)">
                        <img src="${product.image}" alt="Vista 1" onerror="this.src='imagenes/camisetas/tienda-camisetas.jpg'">
                    </button>
                    <button class="qv-thumb" onclick="changeQvImage('imagenes/camisetas/tienda-camisetas.jpg', this)">
                        <img src="imagenes/camisetas/tienda-camisetas.jpg" alt="Vista Detalle">
                    </button>
                </div>
            </div>

            <div class="qv-details">
                <div class="qv-tag-row">
                    <span class="badge-pill">${product.era}</span>
                    <span class="badge-pill-accent">${product.type}</span>
                    <span class="qv-stars">★★★★★ <strong>${product.rating}</strong> (${product.reviewsCount} reseñas)</span>
                </div>

                <h2 class="qv-title">${product.name}</h2>

                <div class="qv-pricing">
                    <span class="qv-current-price">${formatMoney(product.price)}</span>
                    <span class="qv-old-price">${formatMoney(product.originalPrice)}</span>
                    <span class="discount-badge">-${discountPercent}% AHORRO</span>
                </div>

                <p class="qv-desc">${product.description}</p>

                <div class="qv-specs-box">
                    <h4>Especificaciones Oficiales:</h4>
                    <ul>
                        <li><strong>Tejido:</strong> ${product.specs.tejido}</li>
                        <li><strong>Tecnología:</strong> ${product.specs.tecnologia}</li>
                        <li><strong>Corte:</strong> ${product.specs.corte}</li>
                        <li><strong>Cuello:</strong> ${product.specs.cuello}</li>
                    </ul>
                </div>

                <div class="qv-options-block">
                    <label class="block-label">Selecciona tu Talla:</label>
                    <div class="qv-sizes" id="qv-sizes-group">
                        ${['S', 'M', 'L', 'XL', 'XXL'].map((size, idx) => `
                            <button type="button" class="qv-size-btn ${idx === 1 ? 'selected' : ''}" onclick="selectQvSize(this, '${size}')">${size}</button>
                        `).join('')}
                    </div>
                </div>

                <div class="qv-options-block">
                    <label class="block-label">Parche Oficial en Manga (Opcional):</label>
                    <select id="qv-patch-select" class="custom-select" style="width: 100%;">
                        <option value="Sin parches adicionales">Sin parche adicional (Limpia)</option>
                        <option value="Parche Champions League Starball + Respect">Parche UEFA Champions League (+$80)</option>
                        <option value="Parche FIFA World Champions Badge">Parche Campeón Mundial FIFA (+$90)</option>
                        <option value="Parche Oficial de Liga Nacional">Parche Oficial de Liga (+$60)</option>
                    </select>
                </div>

                <div class="qv-actions">
                    <button class="btn btn-primary btn-lg" onclick="addQvToCart('${product.id}')">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        Añadir al Carrito
                    </button>
                    <button class="btn btn-outline-white" style="color: var(--primary); border-color: var(--border-light);" onclick="goToCustomizerWithProduct('${product.id}')">
                        Estampar Dorsal
                    </button>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    setupMercadoLibreZoom();
}

function setupMercadoLibreZoom() {
    const box = document.getElementById('qv-zoom-box');
    const img = document.getElementById('qv-hero-img');
    if (!box || !img) return;

    box.addEventListener('mousemove', (e) => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xPercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
        const yPercent = Math.max(0, Math.min(100, (y / rect.height) * 100));

        img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
        img.style.transform = 'scale(2.5)';
        box.classList.add('is-zooming');
    });

    box.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
        img.style.transformOrigin = 'center center';
        box.classList.remove('is-zooming');
    });
}

function changeQvImage(url, thumbBtn) {
    const mainImg = document.getElementById('qv-hero-img');
    if (mainImg) {
        mainImg.src = url;
        mainImg.style.transform = 'scale(1)';
        mainImg.style.transformOrigin = 'center center';
    }
    document.querySelectorAll('.qv-thumb').forEach(t => t.classList.remove('active'));
    thumbBtn.classList.add('active');
}

function selectQvSize(btn, size) {
    document.querySelectorAll('#qv-sizes-group .qv-size-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}

function addQvToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const sizeBtn = document.querySelector('#qv-sizes-group .qv-size-btn.selected');
    const size = sizeBtn ? sizeBtn.textContent.trim() : 'M';
    const patchSelect = document.getElementById('qv-patch-select');
    const patch = patchSelect ? patchSelect.value : 'Sin parches adicionales';

    let extraPrice = 0;
    if (patch.includes('+$80')) extraPrice = 80;
    if (patch.includes('+$90')) extraPrice = 90;
    if (patch.includes('+$60')) extraPrice = 60;

    addToCart({
        id: product.id,
        name: product.name,
        price: product.price + extraPrice,
        image: product.image,
        size: size,
        isRetro: product.isRetro,
        era: product.era,
        customName: '',
        customNumber: '',
        patch: patch
    });

    closeAllModals();
}

function goToCustomizerWithProduct(productId) {
    closeAllModals();
    const section = document.getElementById('personalizador');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        const select = document.getElementById('cust-jersey-select');
        if (select) {
            select.value = productId;
            select.dispatchEvent(new Event('change'));
        }
    }
}

// ==========================================
// CALCULADOR Y GUÍA DE TALLAS
// ==========================================
function calculateRecommendedSize() {
    const height = parseInt(document.getElementById('size-calc-height')?.value || '175');
    const weight = parseInt(document.getElementById('size-calc-weight')?.value || '75');
    const fitStyle = document.querySelector('input[name="fit-style"]:checked')?.value || 'regular';

    let recommended = 'M';

    if (weight < 65 && height < 170) {
        recommended = 'S';
    } else if (weight <= 75 && height <= 178) {
        recommended = fitStyle === 'loose' ? 'L' : 'M';
    } else if (weight <= 85 && height <= 184) {
        recommended = fitStyle === 'loose' ? 'XL' : 'L';
    } else if (weight <= 98) {
        recommended = fitStyle === 'loose' ? 'XXL' : 'XL';
    } else {
        recommended = 'XXL';
    }

    const resultBox = document.getElementById('size-calc-result');
    if (resultBox) {
        resultBox.innerHTML = `
            <div style="background: #ffffff; padding: 18px; border-radius: var(--radius-md); border-left: 4px solid var(--accent); box-shadow: var(--shadow-card); animation: badgePop 0.4s ease;">
                <span style="font-size: 1.15rem; color: var(--accent-dark); display: block; margin-bottom: 4px; font-weight: 800;">
                    ⚽ Tu Talla Ideal Sugerida: <strong>${recommended}</strong>
                </span>
                <p style="font-size: 0.92rem; color: var(--text-dark);">
                    Calculado para ${height} cm de estatura, ${weight} kg de peso y preferencia de corte ${fitStyle === 'loose' ? 'Holgado Retro' : 'Regular Atlético'}.
                </p>
                <small style="color: var(--text-muted-dark);">En camisetas retro te sugerimos 1 talla adicional si te gusta el estilo oversize urbano.</small>
            </div>
        `;
        playStoreSound('click');
    }
}

// ==========================================
// FAVORITOS (WISHLIST)
// ==========================================
function toggleFavorite(productId) {
    const idx = AppState.favorites.indexOf(productId);
    if (idx > -1) {
        AppState.favorites.splice(idx, 1);
        showToast('Camiseta retirada de tus favoritos');
    } else {
        AppState.favorites.push(productId);
        showToast('¡Camiseta guardada en tus favoritos! ❤️');
        playStoreSound('click');
    }

    localStorage.setItem('zonafutbol_favs', JSON.stringify(AppState.favorites));
    updateFavoritesBadge();
    renderProducts();
}

function updateFavoritesBadge() {
    const count = AppState.favorites.length;
    const badges = document.querySelectorAll('.fav-badge-count');
    badges.forEach(b => {
        b.textContent = count;
        b.style.display = count > 0 ? 'inline-flex' : 'none';
    });
}

function openFavoritesModal() {
    const modal = document.getElementById('modal-favorites');
    const list = document.getElementById('favorites-list');
    if (!modal || !list) return;

    const favProducts = PRODUCTS.filter(p => AppState.favorites.includes(p.id));

    if (favProducts.length === 0) {
        list.innerHTML = `
            <div style="text-align: center; padding: 40px 10px;">
                <div style="font-size: 3.5rem; margin-bottom: 10px;">🤍</div>
                <h4>Aún no has guardado favoritas</h4>
                <p style="color: var(--text-muted-dark); font-size: 0.88rem;">Haz clic en el corazón de cualquier camiseta retro o nueva para guardarla.</p>
            </div>
        `;
    } else {
        list.innerHTML = favProducts.map(p => `
            <div style="display: flex; align-items: center; gap: 14px; padding: 12px 0; border-bottom: 1px solid var(--border-light);">
                <img src="${p.image}" alt="${p.name}" style="width: 60px; height: 70px; object-fit: cover; border-radius: var(--radius-sm); background: #080d1a;" onerror="this.src='imagenes/camisetas/tienda-camisetas.jpg'">
                <div style="flex-grow: 1;">
                    <h4 style="font-family: var(--font-heading); font-size: 0.95rem; font-weight: 800;">${p.name}</h4>
                    <span style="font-weight: 800; color: var(--accent-dark); font-size: 0.9rem; margin-right: 8px;">$${p.price.toLocaleString()} MXN</span>
                    <span style="background: var(--bg-alt-light); font-size: 0.72rem; padding: 2px 6px; border-radius: 4px;">${p.isRetro ? 'Retro' : 'Nueva'}</span>
                </div>
                <div style="display: flex; gap: 8px;">
                    <button class="btn btn-sm btn-primary" onclick="quickAddToCart('${p.id}'); closeAllModals();">Comprar</button>
                    <button class="btn btn-sm btn-outline-white" style="color: var(--primary); border-color: var(--border-light);" onclick="toggleFavorite('${p.id}'); openFavoritesModal();">Quitar</button>
                </div>
            </div>
        `).join('');
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ==========================================
// TOAST & SOCIAL PROOF LOOP
// ==========================================
function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast-item toast-${type}`;
    toast.innerHTML = `
        <span style="font-size: 1.2rem;">${type === 'success' ? '⚽' : '⚠️'}</span>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 350);
    }, 3200);
}

function startSocialSalesLoop() {
    // Notificaciones de ventas en vivo desactivadas
}

function initCountdownTimer() {
    const hoursElem = document.getElementById('timer-hours');
    const minsElem = document.getElementById('timer-mins');
    const secsElem = document.getElementById('timer-secs');
    if (!hoursElem) return;

    let targetTime = Date.now() + (14 * 3600 * 1000) + (42 * 60 * 1000);

    setInterval(() => {
        const remaining = Math.max(0, targetTime - Date.now());
        const h = Math.floor(remaining / (1000 * 60 * 60));
        const m = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((remaining % (1000 * 60)) / 1000);

        if (hoursElem) hoursElem.textContent = String(h).padStart(2, '0');
        if (minsElem) minsElem.textContent = String(m).padStart(2, '0');
        if (secsElem) secsElem.textContent = String(s).padStart(2, '0');
    }, 1000);
}

// ==========================================
// MODALES Y DRAWERS
// ==========================================
function openCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-drawer-overlay');
    if (drawer && overlay) {
        drawer.classList.add('open');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-drawer-overlay');
    if (drawer && overlay) {
        drawer.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function closeAllModals() {
    document.querySelectorAll('.modal-wrapper').forEach(m => m.classList.remove('active'));
    closeCartDrawer();
    document.body.style.overflow = '';
}

function resetFilters() {
    AppState.currentFilter = 'todas';
    AppState.currentLeague = 'all';
    AppState.searchQuery = '';
    AppState.sortBy = 'destacados';

    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';

    const leagueSelect = document.getElementById('league-filter');
    if (leagueSelect) leagueSelect.value = 'all';

    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) sortSelect.value = 'destacados';

    document.querySelectorAll('.filter-tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === 'todas');
    });

    renderProducts();
}

// ==========================================
// EVENT LISTENERS
// ==========================================
function setupEventListeners() {
    document.querySelectorAll('.filter-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            AppState.currentFilter = btn.dataset.filter;
            playStoreSound('click');
            renderProducts();
        });
    });

    const leagueFilter = document.getElementById('league-filter');
    if (leagueFilter) {
        leagueFilter.addEventListener('change', (e) => {
            AppState.currentLeague = e.target.value;
            renderProducts();
        });
    }

    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            AppState.sortBy = e.target.value;
            renderProducts();
        });
    }

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        let timer;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                AppState.searchQuery = e.target.value;
                renderProducts();
            }, 200);
        });
    }

    document.querySelectorAll('.faq-trigger-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-single-item');
            const isOpen = item.classList.contains('active');
            document.querySelectorAll('.faq-single-item').forEach(i => i.classList.remove('active'));
            if (!isOpen) item.classList.add('active');
            playStoreSound('click');
        });
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllModals();
    });
}

// ==========================================================================
// MÓDULO DE EXPERIENCIA 3D WEBGL (THREE.JS ARENA & INTERACTIVIDAD)
// ==========================================================================
let threeState = {
    initialized: false,
    scene: null,
    camera: null,
    renderer: null,
    currentView: 'ball', // 'ball', 'trophy', 'photo'
    ballMesh: null,
    trophyGroup: null,
    activeMesh: null,
    currentSkinIndex: 0,
    skins: [
        { name: "Zona Neón", primary: "#00e676", secondary: "#ffd700", base: "#ffffff", dark: "#0f172a" },
        { name: "Balón de Oro", primary: "#ffd700", secondary: "#fff8db", base: "#d4af37", dark: "#785304" },
        { name: "Champions", primary: "#00f0ff", secondary: "#ffffff", base: "#0a1931", dark: "#030a16" }
    ],
    isDragging: false,
    prevPointer: { x: 0, y: 0 },
    velocity: { x: 0.005, y: 0 },
    isKicking: false,
    kickProgress: 0
};

function initThreeJSArena() {
    if (typeof THREE === 'undefined') {
        console.warn("Three.js aún no está disponible.");
        return;
    }

    const container = document.getElementById('three-container');
    const canvas = document.getElementById('three-canvas');
    if (!container || !canvas) return;

    const width = container.clientWidth || 450;
    const height = container.clientHeight || 420;

    // 1. Escena y Cámara con perspectiva de estadio
    threeState.scene = new THREE.Scene();
    threeState.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    threeState.camera.position.set(0, 0, 6.2);

    // 2. Renderizador WebGL de alta precisión con antialiasing
    threeState.renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance"
    });
    threeState.renderer.setSize(width, height);
    threeState.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    threeState.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    threeState.renderer.toneMappingExposure = 1.25;

    // 3. Sistema de Iluminación de Estadio
    // Luz ambiental
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    threeState.scene.add(ambientLight);

    // Reflector principal de estadio (Key Light blanco brillante)
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(5, 8, 5);
    threeState.scene.add(keyLight);

    // Reflector de contra-luz verde neón (Rim Light)
    const rimLight = new THREE.DirectionalLight(0x00e676, 2.8);
    rimLight.position.set(-6, 3, -4);
    threeState.scene.add(rimLight);

    // Luz de relleno dorada cálida desde abajo
    const fillLight = new THREE.PointLight(0xffd700, 1.8, 12);
    fillLight.position.set(0, -4, 4);
    threeState.scene.add(fillLight);

    // 4. Creación del Balón 3D
    createSoccerBall3D();

    // 5. Creación del Trofeo 3D
    createTrophy3D();

    // Definir objeto activo inicial
    threeState.activeMesh = threeState.ballMesh;

    // 6. Listeners de interacción Mouse & Touch (Orbit rotatorio libre)
    setupThreePointerEvents(container);

    // 7. Resize dinámico
    window.addEventListener('resize', onThreeWindowResize);

    // 8. Bucle de renderizado a 60 FPS
    threeState.initialized = true;
    animateThreeScene();
}

// Generador procedural de textura de balón de fútbol en Canvas 2D
function generateBallTexture(skin) {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Fondo base
    ctx.fillStyle = skin.base;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Patrón geométrico de paneles y costuras de fútbol
    ctx.lineWidth = 4;
    ctx.strokeStyle = skin.dark;

    const cols = 8;
    const rows = 4;
    const stepX = canvas.width / cols;
    const stepY = canvas.height / rows;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const cx = (c + 0.5) * stepX;
            const cy = (r + 0.5) * stepY;
            const isPentagon = (c + r) % 2 === 0;

            ctx.save();
            ctx.translate(cx, cy);

            if (isPentagon) {
                // Pentágono coloreado con primario y resplandor
                ctx.fillStyle = skin.primary;
                ctx.beginPath();
                const radius = 34;
                for (let i = 0; i < 5; i++) {
                    const angle = (i * 2 * Math.PI / 5) - Math.PI / 2;
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);
                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.closePath();
                ctx.fill();
                ctx.stroke();

                // Estrella o detalle interior
                ctx.fillStyle = skin.secondary;
                ctx.beginPath();
                ctx.arc(0, 0, 9, 0, Math.PI * 2);
                ctx.fill();
            } else {
                // Hexágono blanco con costura interior
                ctx.fillStyle = skin.base;
                ctx.beginPath();
                const radius = 38;
                for (let i = 0; i < 6; i++) {
                    const angle = i * 2 * Math.PI / 6;
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);
                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.closePath();
                ctx.stroke();
            }

            ctx.restore();
        }
    }

    // Texto de marca oficial sobre el balón
    ctx.fillStyle = skin.dark;
    ctx.font = 'bold 28px "Montserrat", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText("ZONA FÚTBOL", canvas.width * 0.5, canvas.height * 0.28);
    ctx.fillText("★ MATCH PRO ★", canvas.width * 0.5, canvas.height * 0.35);

    return new THREE.CanvasTexture(canvas);
}

function createSoccerBall3D() {
    const geometry = new THREE.SphereGeometry(1.65, 64, 64);
    const texture = generateBallTexture(threeState.skins[threeState.currentSkinIndex]);
    
    const material = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.28,
        metalness: 0.15
    });

    threeState.ballMesh = new THREE.Mesh(geometry, material);
    threeState.scene.add(threeState.ballMesh);
}

function createTrophy3D() {
    threeState.trophyGroup = new THREE.Group();

    const goldMaterial = new THREE.MeshStandardMaterial({
        color: 0xffd700,
        roughness: 0.15,
        metalness: 0.95
    });

    const darkBaseMaterial = new THREE.MeshStandardMaterial({
        color: 0x0a101d,
        roughness: 0.35,
        metalness: 0.4
    });

    // 1. Pedestal de mármol/metal escalonado
    const baseBottom = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.25, 0.35, 32), darkBaseMaterial);
    baseBottom.position.y = -1.6;
    threeState.trophyGroup.add(baseBottom);

    const baseCollar = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 1.05, 0.2, 32), goldMaterial);
    baseCollar.position.y = -1.35;
    threeState.trophyGroup.add(baseCollar);

    // 2. Vástago central estilizado
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.45, 0.8, 32), goldMaterial);
    stem.position.y = -0.85;
    threeState.trophyGroup.add(stem);

    // 3. Copa principal / Cáliz
    const cup = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 0.4, 1.6, 32), goldMaterial);
    cup.position.y = 0.3;
    threeState.trophyGroup.add(cup);

    // 4. Anillo de la boca de la copa
    const rim = new THREE.Mesh(new THREE.TorusGeometry(1.12, 0.08, 16, 48), goldMaterial);
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 1.1;
    threeState.trophyGroup.add(rim);

    // 5. Asas curvadas (Orejonas de la copa)
    const handleGeo = new THREE.TorusGeometry(0.55, 0.08, 16, 32, Math.PI * 1.3);
    
    const leftHandle = new THREE.Mesh(handleGeo, goldMaterial);
    leftHandle.position.set(-1.15, 0.45, 0);
    leftHandle.rotation.z = Math.PI * 0.35;
    threeState.trophyGroup.add(leftHandle);

    const rightHandle = new THREE.Mesh(handleGeo, goldMaterial);
    rightHandle.position.set(1.15, 0.45, 0);
    rightHandle.rotation.z = -Math.PI * 0.35;
    rightHandle.rotation.y = Math.PI;
    threeState.trophyGroup.add(rightHandle);

    // 6. Balón de oro coronando el trofeo
    const crownBall = new THREE.Mesh(new THREE.SphereGeometry(0.38, 32, 32), goldMaterial);
    crownBall.position.y = 0.7;
    threeState.trophyGroup.add(crownBall);

    // Iniciar oculto (se muestra al cambiar de tab)
    threeState.trophyGroup.visible = false;
    threeState.scene.add(threeState.trophyGroup);
}

function setupThreePointerEvents(container) {
    let lastTime = Date.now();

    const onPointerDown = (e) => {
        threeState.isDragging = true;
        threeState.prevPointer = { x: e.clientX, y: e.clientY };
        lastTime = Date.now();
    };

    const onPointerMove = (e) => {
        if (!threeState.isDragging || !threeState.activeMesh) return;

        const deltaX = e.clientX - threeState.prevPointer.x;
        const deltaY = e.clientY - threeState.prevPointer.y;
        const now = Date.now();
        const dt = Math.max(1, now - lastTime);

        // Rotación según el arrastre
        threeState.activeMesh.rotation.y += deltaX * 0.01;
        threeState.activeMesh.rotation.x += deltaY * 0.01;

        // Inercia
        threeState.velocity.x = (deltaX / dt) * 0.12;
        threeState.velocity.y = (deltaY / dt) * 0.12;

        threeState.prevPointer = { x: e.clientX, y: e.clientY };
        lastTime = now;
    };

    const onPointerUp = () => {
        threeState.isDragging = false;
    };

    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // Doble click para patear balón
    container.addEventListener('dblclick', () => {
        if (threeState.currentView === 'ball') kick3DBall();
    });
}

function onThreeWindowResize() {
    if (!threeState.renderer || !threeState.camera) return;
    const container = document.getElementById('three-container');
    if (!container) return;
    const width = container.clientWidth || 460;
    const height = container.clientHeight || 420;
    if (width <= 0 || height <= 0) return;
    threeState.camera.aspect = width / height;
    threeState.camera.updateProjectionMatrix();
    threeState.renderer.setSize(width, height);
}

function animateThreeScene() {
    requestAnimationFrame(animateThreeScene);

    if (!threeState.activeMesh) return;

    const time = Date.now() * 0.0015;

    // Manejo de animación de patada
    if (threeState.isKicking) {
        threeState.kickProgress += 0.04;
        const p = threeState.kickProgress;

        if (p < 1) {
            // Curva de elevación parabólica y rotación ultra rápida
            threeState.activeMesh.position.y = Math.sin(p * Math.PI) * 0.8;
            threeState.activeMesh.rotation.y += 0.25;
            threeState.activeMesh.rotation.x += 0.15;
            threeState.activeMesh.scale.set(
                1 + Math.sin(p * Math.PI) * 0.15,
                1 - Math.sin(p * Math.PI) * 0.1,
                1 + Math.sin(p * Math.PI) * 0.15
            );
        } else {
            threeState.isKicking = false;
            threeState.activeMesh.position.y = 0;
            threeState.activeMesh.scale.set(1, 1, 1);
        }
    } else {
        // Flotación suave idle
        threeState.activeMesh.position.y = Math.sin(time) * 0.12;

        if (!threeState.isDragging) {
            // Aplicar inercia amortiguada
            threeState.activeMesh.rotation.y += threeState.velocity.x;
            threeState.activeMesh.rotation.x += threeState.velocity.y;

            threeState.velocity.x *= 0.94;
            threeState.velocity.y *= 0.94;

            // Rotación constante mínima para que siempre tenga vida
            threeState.activeMesh.rotation.y += 0.004;
        }
    }

    threeState.renderer.render(threeState.scene, threeState.camera);
}

// Acciones expuestas para botones del Hero 3D
function switch3DView(type) {
    playStoreSound('click');

    const tabBall = document.getElementById('tab-3d-ball');
    const tabTrophy = document.getElementById('tab-3d-trophy');
    const tabPhoto = document.getElementById('tab-3d-photo');
    const threeContainer = document.getElementById('three-container');
    const photoContainer = document.getElementById('photo-container');

    [tabBall, tabTrophy, tabPhoto].forEach(t => t && t.classList.remove('active'));

    threeState.currentView = type;

    if (type === 'photo') {
        if (tabPhoto) tabPhoto.classList.add('active');
        if (threeContainer) threeContainer.style.display = 'none';
        if (photoContainer) photoContainer.style.display = 'block';
        return;
    }

    if (photoContainer) photoContainer.style.display = 'none';
    if (threeContainer) threeContainer.style.display = 'flex';

    if (type === 'ball') {
        if (tabBall) tabBall.classList.add('active');
        if (threeState.ballMesh) threeState.ballMesh.visible = true;
        if (threeState.trophyGroup) threeState.trophyGroup.visible = false;
        threeState.activeMesh = threeState.ballMesh;
    } else if (type === 'trophy') {
        if (tabTrophy) tabTrophy.classList.add('active');
        if (threeState.ballMesh) threeState.ballMesh.visible = false;
        if (threeState.trophyGroup) threeState.trophyGroup.visible = true;
        threeState.activeMesh = threeState.trophyGroup;
    }

    onThreeWindowResize();
}

function kick3DBall() {
    if (threeState.isKicking) return;
    threeState.isKicking = true;
    threeState.kickProgress = 0;
    playStoreSound('kick');
    showToast("⚡ ¡Pase al ángulo en 3D ejecutado!");
}

function toggleBallSkin() {
    threeState.currentSkinIndex = (threeState.currentSkinIndex + 1) % threeState.skins.length;
    const skin = threeState.skins[threeState.currentSkinIndex];

    const badge = document.getElementById('skin-name-badge');
    if (badge) badge.textContent = skin.name;

    if (threeState.ballMesh) {
        const newTexture = generateBallTexture(skin);
        threeState.ballMesh.material.map = newTexture;
        if (skin.name === "Balón de Oro") {
            threeState.ballMesh.material.metalness = 0.95;
            threeState.ballMesh.material.roughness = 0.15;
        } else {
            threeState.ballMesh.material.metalness = 0.15;
            threeState.ballMesh.material.roughness = 0.28;
        }
        threeState.ballMesh.material.needsUpdate = true;
    }

    playStoreSound('click');
    showToast(`Diseño 3D cambiado a: ${skin.name}`);
}

// ==========================================================================
// ESTUDIO PERSONALIZADOR: INTERACCIÓN Y GIRO 3D DE CAMISETA
// ==========================================================================
let customizerIsFront = false;

function setupCustomizer3D() {
    const stage = document.getElementById('jersey-3d-stage');
    const card = document.getElementById('customizer-jersey-card');
    if (!stage || !card) return;

    stage.addEventListener('mousemove', (e) => {
        const rect = stage.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const rotX = -(y / (rect.height / 2)) * 14;
        const rotY = (x / (rect.width / 2)) * 18;

        card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;

        const glare = card.querySelector('.holo-sheen-glare');
        if (glare) {
            const pctX = ((e.clientX - rect.left) / rect.width) * 100;
            const pctY = ((e.clientY - rect.top) / rect.height) * 100;
            glare.style.background = `radial-gradient(circle at ${pctX}% ${pctY}%, rgba(255,255,255,0.28) 0%, transparent 60%)`;
        }
    });

    stage.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
}

function spinJersey3D() {
    const card = document.getElementById('customizer-jersey-card');
    if (!card) return;
    card.classList.remove('spinning-3d');
    void card.offsetWidth; // Trigger reflow
    card.classList.add('spinning-3d');
    playStoreSound('click');
    showToast("🔄 Inspección orbital 360° en curso");
}

function toggleJerseyFrontBack() {
    customizerIsFront = !customizerIsFront;
    const card = document.getElementById('customizer-jersey-card');
    const nameEl = document.getElementById('preview-player-name');
    const numEl = document.getElementById('preview-player-number');
    const patchEl = document.getElementById('preview-patch-badge');

    if (!card) return;

    spinJersey3D();

    setTimeout(() => {
        if (customizerIsFront) {
            if (nameEl) nameEl.style.opacity = '0';
            if (numEl) numEl.style.opacity = '0';
            if (patchEl) patchEl.textContent = 'Parche Frontal Oficial FIFA';
            showToast("Vista Frontal de la equipación");
        } else {
            if (nameEl) nameEl.style.opacity = '1';
            if (numEl) numEl.style.opacity = '1';
            const patchSelect = document.getElementById('cust-patch-select');
            if (patchEl && patchSelect) patchEl.textContent = patchSelect.value;
            showToast("Vista Dorsal de la equipación");
        }
    }, 450);
}

// ==========================================================================
// SEGURIDAD & AUTENTICACIÓN CORPORATIVA (PANEL ADMIN)
// ==========================================================================
function openAdminLoginModal() {
    const modal = document.getElementById('modal-admin-login');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function handleAdminLoginSubmit(e) {
    if (e) e.preventDefault();
    const user = document.getElementById('admin-login-user')?.value.trim();
    const pass = document.getElementById('admin-login-pass')?.value.trim();

    if ((user === 'admin@zonafutbol.com' || user === 'admin') && pass === 'admin2026') {
        sessionStorage.setItem('zonafutbol_admin_token', 'AUTH_TOKEN_ZONE_2026');
        sessionStorage.setItem('zonafutbol_admin_user', JSON.stringify({ name: 'Carlos Mendoza', role: 'ADMIN' }));
        closeAllModals();
        playStoreSound('cheer');
        showToast('🔓 ¡Autenticación exitosa! Abriendo Panel de Control ERP...');
        setTimeout(() => {
            window.location.href = 'admin.html';
        }, 500);
    } else {
        showToast('⚠️ Credenciales incorrectas. Verifica tu usuario y contraseña.', 'error');
    }
}

// Shortcut secreto: Ctrl + Shift + A abre el modal de administración
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        openAdminLoginModal();
    }
});
