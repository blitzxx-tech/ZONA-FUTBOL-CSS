/**
 * ZONA FÚTBOL - MOTOR DEL PANEL ADMINISTRATIVO (ADMIN ERP / DASHBOARD)
 * Gestión Integral de:
 * 1. Perfiles de Usuario & Roles (ADMIN, VENDEDOR, TALLER, GERENTE)
 * 2. Control de Inventario por Tallas (S, M, L, XL, XXL) con Alertas de Stock Crítico
 * 3. Control de Ventas & Pedidos en Tiempo Real con Cambio de Estatus y WhatsApp Directo
 * 4. Estadísticas Dinámicas de Venta (Diaria, Semanal, Mensual, Histórica, por Sucursal)
 * 5. Cola de Producción del Taller de Estampados (Dorsales y Parches)
 */

// ==========================================================================
// 1. DATOS INICIALES (SEED DATA)
// ==========================================================================

const SEED_PRODUCTS = [
    {
        id: "rm-2025",
        name: "Real Madrid 2024/2025 - Local",
        category: "nuevas",
        league: "laliga",
        era: "2024/25",
        price: 999,
        image: "imagenes/camisetas/real-madrid.jpg",
        stock: { S: 3, M: 6, L: 8, XL: 4, XXL: 2 }
    },
    {
        id: "fcb-2025",
        name: "FC Barcelona 2024/2025 - 125 Aniversario",
        category: "nuevas",
        league: "laliga",
        era: "2024/25",
        price: 999,
        image: "imagenes/camisetas/barcelona.jpg",
        stock: { S: 2, M: 5, L: 7, XL: 3, XXL: 1 }
    },
    {
        id: "rm-2002",
        name: "Real Madrid 2001/2002 Retro - Novena Zidane",
        category: "retro",
        league: "laliga",
        era: "2001/02",
        price: 1149,
        image: "imagenes/camisetas/real-madrid-retro.jpg",
        stock: { S: 1, M: 2, L: 4, XL: 2, XXL: 0 }
    },
    {
        id: "boca-1981",
        name: "Boca Juniors 1981 Retro - Diego Maradona",
        category: "retro",
        league: "otras",
        era: "1981",
        price: 1299,
        image: "imagenes/camisetas/boca-1981.jpg",
        stock: { S: 2, M: 4, L: 5, XL: 2, XXL: 1 }
    },
    {
        id: "mex-1998",
        name: "Selección México 1998 Retro - Calendario Azteca",
        category: "retro",
        league: "selecciones",
        era: "1998",
        price: 1399,
        image: "imagenes/camisetas/mexico-1998.jpg",
        stock: { S: 2, M: 3, L: 3, XL: 2, XXL: 1 }
    },
    {
        id: "mcfc-2025",
        name: "Manchester City 2024/2025 - Local (0161)",
        category: "nuevas",
        league: "premier",
        era: "2024/25",
        price: 999,
        image: "imagenes/camisetas/mancity-2025.jpg",
        stock: { S: 4, M: 8, L: 9, XL: 5, XXL: 2 }
    },
    {
        id: "ars-2004",
        name: "Arsenal 2003/2004 Retro - 'The Invincibles'",
        category: "retro",
        league: "premier",
        era: "2003/04",
        price: 1249,
        image: "imagenes/camisetas/arsenal-retro-2004.jpg",
        stock: { S: 1, M: 2, L: 2, XL: 1, XXL: 0 }
    },
    {
        id: "mil-2007",
        name: "AC Milan 2006/2007 Retro - Champions Kaká",
        category: "retro",
        league: "seriea",
        era: "2006/07",
        price: 1099,
        image: "imagenes/camisetas/milan.jpg",
        stock: { S: 2, M: 4, L: 4, XL: 2, XXL: 1 }
    },
    {
        id: "arg-1986",
        name: "Selección Argentina 1986 Retro - Maradona Azteca",
        category: "retro",
        league: "selecciones",
        era: "1986",
        price: 1499,
        image: "imagenes/camisetas/argentina-1986.jpg",
        stock: { S: 1, M: 1, L: 2, XL: 1, XXL: 0 }
    },
    {
        id: "bra-2002",
        name: "Brasil 2002 Retro - Pentacampeón Ronaldo R9",
        category: "retro",
        league: "selecciones",
        era: "2002",
        price: 1399,
        image: "imagenes/camisetas/brazil-2002.jpg",
        stock: { S: 3, M: 6, L: 7, XL: 3, XXL: 2 }
    },
    {
        id: "psg-2025",
        name: "Paris Saint-Germain 2024/2025 - Local",
        category: "nuevas",
        league: "ligue1",
        era: "2024/25",
        price: 999,
        image: "imagenes/camisetas/psg.jpg",
        stock: { S: 2, M: 4, L: 5, XL: 3, XXL: 1 }
    },
    {
        id: "inter-2025",
        name: "Inter de Milán 2024/2025 - Segunda Estrella",
        category: "nuevas",
        league: "seriea",
        era: "2024/25",
        price: 999,
        image: "imagenes/camisetas/inter-2025.jpg",
        stock: { S: 2, M: 5, L: 6, XL: 3, XXL: 1 }
    }
];

const SEED_USERS = [
    {
        id: "usr-1",
        name: "Carlos Mendoza",
        email: "carlos.mendoza@zonafutbol.com",
        role: "ADMIN",
        branch: "Todas las Sedes",
        lastLogin: "Hoy, 09:15 AM",
        status: "Activo",
        avatar: "imagenes/camisetas/real-madrid.jpg",
        permissions: [
            "Control Total Financiero",
            "Gestión de Usuarios y Roles",
            "Edición de Precios e Inventario",
            "Aprobación de Descuentos",
            "Exportación de Reportes",
            "Supervisión Multisede"
        ]
    },
    {
        id: "usr-2",
        name: "Valeria Ramos",
        email: "valeria.ramos@zonafutbol.com",
        role: "VENDEDOR",
        branch: "Tienda Online",
        lastLogin: "Hoy, 08:45 AM",
        status: "Activo",
        avatar: "imagenes/camisetas/barcelona.jpg",
        permissions: [
            "Registro de Ventas en Mostrador",
            "Atención de Pedidos WhatsApp",
            "Consulta de Stock Disponible",
            "Generación de Tickets de Venta"
        ]
    },
    {
        id: "usr-3",
        name: "Mateo Silva",
        email: "mateo.silva@zonafutbol.com",
        role: "TALLER",
        branch: "Taller Central",
        lastLogin: "Ayer, 05:20 PM",
        status: "Activo",
        avatar: "imagenes/camisetas/real-madrid-retro.jpg",
        permissions: [
            "Cola de Impresión y Termosellado",
            "Marcar Estampado Completado",
            "Control de Vinilos y Parches",
            "Hojas de Ruta de Taller"
        ]
    },
    {
        id: "usr-4",
        name: "Jorge Castillo",
        email: "jorge.castillo@zonafutbol.com",
        role: "GERENTE",
        branch: "Sucursal Estadio Azteca",
        lastLogin: "Ayer, 07:10 PM",
        status: "Activo",
        avatar: "imagenes/camisetas/mexico-1998.jpg",
        permissions: [
            "Supervisión de Sucursal Estadio",
            "Control de Caja Diaria",
            "Gestión de Stock Local",
            "Reporte Semanal de Ventas"
        ]
    }
];

const SEED_BRANCHES = [
    {
        id: "online",
        name: "Tienda Online (Web)",
        code: "ZF-WEB",
        manager: "Valeria Ramos",
        phone: "+52 55 1234-5678",
        address: "Centro Logístico Norte, CDMX",
        icon: "🌐",
        type: "Digital & Envíos"
    },
    {
        id: "estadio",
        name: "Sucursal Estadio Azteca",
        code: "ZF-AZTECA",
        manager: "Jorge Castillo",
        phone: "+52 55 4567-8901",
        address: "Calzada de Tlalpan 3465, Santa Úrsula",
        icon: "🏟️",
        type: "Boutique Oficial"
    },
    {
        id: "centro",
        name: "Sucursal Centro Histórico",
        code: "ZF-CENTRO",
        manager: "Eduardo Peña",
        phone: "+52 55 7890-1234",
        address: "Calle Francisco I. Madero 42, Centro",
        icon: "🏛️",
        type: "Tienda y Taller"
    },
    {
        id: "polanco",
        name: "Sucursal Polanco Luxury",
        code: "ZF-POLANCO",
        manager: "Sofía Navas",
        phone: "+52 55 9876-5432",
        address: "Av. Presidente Masaryk 112, Polanco",
        icon: "💎",
        type: "Galería Retro & VIP"
    }
];

const SEED_SUPPLIES = [
    { name: "Vinil Termosellado Blanco", type: "Rollos 50m", stock: 18, color: "#ffffff" },
    { name: "Vinil Termosellado Negro", type: "Rollos 50m", stock: 12, color: "#000000" },
    { name: "Vinil Foil Oro Campeón", type: "Rollos 25m", stock: 6, color: "#d97706" },
    { name: "Parche Champions Starball", type: "Unidades", stock: 45, color: "#2563eb" },
    { name: "Parche Copa del Mundo FIFA", type: "Unidades", stock: 28, color: "#ffd700" },
    { name: "Parche Liga Nacional", type: "Unidades", stock: 60, color: "#dc2626" }
];

// Generador de órdenes de venta realistas distribuidas en fechas
function generateSeedOrders() {
    return [
        {
            id: "ZF-1048",
            date: "2026-09-30 09:12",
            timestamp: new Date("2026-09-30T09:12:00").getTime(),
            client: "Alejandro Morales",
            phone: "525543219876",
            city: "CDMX",
            address: "Av. Insurgentes Sur 1450, Del Valle",
            branch: "Tienda Online",
            productId: "rm-2002",
            productName: "Real Madrid 2001/2002 Retro",
            size: "L",
            customName: "ZIDANE",
            customNumber: "5",
            patch: "Champions League Starball + Respect",
            mode: "full",
            price: 1699,
            paymentMethod: "Transferencia SPEI",
            status: "En Taller"
        },
        {
            id: "ZF-1047",
            date: "2026-09-30 08:35",
            timestamp: new Date("2026-09-30T08:35:00").getTime(),
            client: "Sofía Villarreal",
            phone: "525511223344",
            city: "Guadalajara",
            address: "Col. Providencia, Calle Florencia 2200",
            branch: "Tienda Online",
            productId: "mex-1998",
            productName: "Selección México 1998 Retro",
            size: "M",
            customName: "HERNÁNDEZ",
            customNumber: "15",
            patch: "Copa del Mundo Campeón FIFA",
            mode: "full",
            price: 1699,
            paymentMethod: "Tarjeta Crédito/Débito",
            status: "Pagado"
        },
        {
            id: "ZF-1046",
            date: "2026-09-29 17:40",
            timestamp: new Date("2026-09-29T17:40:00").getTime(),
            client: "Mateo Cárdenas",
            phone: "525599887766",
            city: "CDMX",
            address: "Mostrador Estadio Azteca",
            branch: "Sucursal Estadio Azteca",
            productId: "rm-2025",
            productName: "Real Madrid 2024/2025 - Local",
            size: "XL",
            customName: "MBAPPÉ",
            customNumber: "9",
            patch: "Champions League Starball + Respect",
            mode: "full",
            price: 1199,
            paymentMethod: "Efectivo en Mostrador",
            status: "Entregado"
        },
        {
            id: "ZF-1045",
            date: "2026-09-29 14:15",
            timestamp: new Date("2026-09-29T14:15:00").getTime(),
            client: "Daniel Barajas",
            phone: "525533445566",
            city: "Monterrey",
            address: "San Pedro Garza García 105",
            branch: "Tienda Online",
            productId: "fcb-2025",
            productName: "FC Barcelona 2024/2025 - 125 Años",
            size: "L",
            customName: "",
            customNumber: "10",
            patch: "Sin parches adicionales",
            mode: "number-only",
            price: 1069,
            paymentMethod: "Transferencia SPEI",
            status: "Enviado"
        },
        {
            id: "ZF-1044",
            date: "2026-09-28 11:20",
            timestamp: new Date("2026-09-28T11:20:00").getTime(),
            client: "Rodrigo Navarro",
            phone: "525577665544",
            city: "Puebla",
            address: "Angelópolis Residencial Torre 2",
            branch: "Sucursal Centro Histórico",
            productId: "boca-1981",
            productName: "Boca Juniors 1981 Retro",
            size: "M",
            customName: "MARADONA",
            customNumber: "10",
            patch: "Sin parches adicionales",
            mode: "full",
            price: 1519,
            paymentMethod: "Tarjeta Crédito/Débito",
            status: "Entregado"
        },
        {
            id: "ZF-1043",
            date: "2026-09-27 16:50",
            timestamp: new Date("2026-09-27T16:50:00").getTime(),
            client: "Héctor Espinoza",
            phone: "525544556677",
            city: "Querétaro",
            address: "Juriquilla Santa Fe 404",
            branch: "Tienda Online",
            productId: "mcfc-2025",
            productName: "Manchester City 2024/2025",
            size: "L",
            customName: "",
            customNumber: "",
            patch: "Sin parches adicionales",
            mode: "plain",
            price: 999,
            paymentMethod: "Depósito OXXO",
            status: "Entregado"
        },
        {
            id: "ZF-1042",
            date: "2026-09-26 12:30",
            timestamp: new Date("2026-09-26T12:30:00").getTime(),
            client: "Emilio Zavala",
            phone: "525588776655",
            city: "CDMX",
            address: "Polanco Luxury Boutique",
            branch: "Sucursal Polanco Luxury",
            productId: "arg-1986",
            productName: "Selección Argentina 1986 Retro",
            size: "L",
            customName: "MARADONA",
            customNumber: "10",
            patch: "Copa del Mundo Campeón FIFA",
            mode: "full",
            price: 1799,
            paymentMethod: "Tarjeta Crédito/Débito",
            status: "Entregado"
        },
        {
            id: "ZF-1041",
            date: "2026-09-25 10:15",
            timestamp: new Date("2026-09-25T10:15:00").getTime(),
            client: "Fernando Ortiz",
            phone: "525522334455",
            city: "Mérida",
            address: "Col. Altabrisa, Calle 15 #230",
            branch: "Tienda Online",
            productId: "ars-2006",
            productName: "Arsenal 2005/2006 Retro",
            size: "S",
            customName: "HENRY",
            customNumber: "14",
            patch: "Champions League Starball + Respect",
            mode: "full",
            price: 1599,
            paymentMethod: "Transferencia SPEI",
            status: "Entregado"
        },
        {
            id: "ZF-1040",
            date: "2026-09-24 15:40",
            timestamp: new Date("2026-09-24T15:40:00").getTime(),
            client: "Guillermo Lozano",
            phone: "525566778899",
            city: "Toluca",
            address: "Metepec Providencia 12",
            branch: "Sucursal Estadio Azteca",
            productId: "mil-2007",
            productName: "AC Milan 2006/2007 Retro",
            size: "M",
            customName: "KAKÁ",
            customNumber: "22",
            patch: "Champions League Starball + Respect",
            mode: "full",
            price: 1599,
            paymentMethod: "Tarjeta Crédito/Débito",
            status: "Entregado"
        },
        {
            id: "ZF-1039",
            date: "2026-09-22 18:20",
            timestamp: new Date("2026-09-22T18:20:00").getTime(),
            client: "Mariana Sotomayor",
            phone: "525512344321",
            city: "CDMX",
            address: "Condesa, Amsterdam 85",
            branch: "Sucursal Polanco Luxury",
            productId: "liv-2025",
            productName: "Liverpool FC 2024/2025 - Local",
            size: "M",
            customName: "SALAH",
            customNumber: "11",
            patch: "Parche de Liga Nacional",
            mode: "full",
            price: 1169,
            paymentMethod: "Tarjeta Crédito/Débito",
            status: "Entregado"
        },
        {
            id: "ZF-1038",
            date: "2026-09-20 13:00",
            timestamp: new Date("2026-09-20T13:00:00").getTime(),
            client: "Ignacio Trejo",
            phone: "525533221100",
            city: "Cancún",
            address: "Zona Hotelera Km 12",
            branch: "Tienda Online",
            productId: "bay-2025",
            productName: "Bayern Múnich 2024/2025",
            size: "L",
            customName: "",
            customNumber: "",
            patch: "Sin parches adicionales",
            mode: "plain",
            price: 999,
            paymentMethod: "Depósito OXXO",
            status: "Pendiente"
        }
    ];
}

// ==========================================================================
// 2. ESTADO GLOBAL DE ADMINISTRACIÓN
// ==========================================================================
const AdminState = {
    products: [],
    orders: [],
    users: [],
    branches: SEED_BRANCHES,
    supplies: SEED_SUPPLIES,
    activeUser: null,
    selectedBranch: "todas",
    analyticsPeriod: "mensual", // 'diaria', 'semanal', 'mensual', 'historica'
    currentTab: "dashboard"
};

// Inicialización de la Aplicación
document.addEventListener('DOMContentLoaded', () => {
    checkAdminAuthGuard();
    initAdminData();
    initUI();
    renderAllViews();
});

function checkAdminAuthGuard() {
    const token = sessionStorage.getItem('zonafutbol_admin_token');
    const authOverlay = document.getElementById('admin-auth-barrier');

    if (token !== 'AUTH_TOKEN_ZONE_2026') {
        if (authOverlay) {
            authOverlay.style.display = 'flex';
        }
        return false;
    } else {
        if (authOverlay) {
            authOverlay.style.display = 'none';
        }
        return true;
    }
}

function handleAdminBarrierLoginSubmit(e) {
    if (e) e.preventDefault();
    const user = document.getElementById('barrier-user-input')?.value.trim();
    const pass = document.getElementById('barrier-pass-input')?.value.trim();

    if ((user === 'admin@zonafutbol.com' || user === 'admin') && pass === 'admin2026') {
        sessionStorage.setItem('zonafutbol_admin_token', 'AUTH_TOKEN_ZONE_2026');
        sessionStorage.setItem('zonafutbol_admin_user', JSON.stringify({ name: 'Carlos Mendoza', role: 'ADMIN' }));
        checkAdminAuthGuard();
        showToast('🔓 ¡Acceso concedido al Sistema ERP de Zona Fútbol!');
    } else {
        showToast('⚠️ Credenciales incorrectas. Prueba: admin@zonafutbol.com / admin2026');
    }
}

function logoutAdminSession() {
    sessionStorage.removeItem('zonafutbol_admin_token');
    sessionStorage.removeItem('zonafutbol_admin_user');
    window.location.href = 'index.html';
}

function initAdminData() {
    // 1. Productos / Inventario
    const savedProducts = localStorage.getItem('zonafutbol_admin_inventory');
    if (savedProducts) {
        try { AdminState.products = JSON.parse(savedProducts); } catch (e) { AdminState.products = SEED_PRODUCTS; }
    } else {
        AdminState.products = SEED_PRODUCTS;
        saveProducts();
    }

    // 2. Órdenes / Ventas
    const savedOrders = localStorage.getItem('zonafutbol_admin_orders');
    if (savedOrders) {
        try { AdminState.orders = JSON.parse(savedOrders); } catch (e) { AdminState.orders = generateSeedOrders(); }
    } else {
        AdminState.orders = generateSeedOrders();
        saveOrders();
    }

    // 3. Usuarios & Roles
    const savedUsers = localStorage.getItem('zonafutbol_admin_users');
    if (savedUsers) {
        try { AdminState.users = JSON.parse(savedUsers); } catch (e) { AdminState.users = SEED_USERS; }
    } else {
        AdminState.users = SEED_USERS;
        saveUsers();
    }

    // 4. Usuario Activo
    const activeUserId = localStorage.getItem('zonafutbol_active_user_id') || 'usr-1';
    AdminState.activeUser = AdminState.users.find(u => u.id === activeUserId) || AdminState.users[0];
}

function saveProducts() {
    localStorage.setItem('zonafutbol_admin_inventory', JSON.stringify(AdminState.products));
}

function saveOrders() {
    localStorage.setItem('zonafutbol_admin_orders', JSON.stringify(AdminState.orders));
}

function saveUsers() {
    localStorage.setItem('zonafutbol_admin_users', JSON.stringify(AdminState.users));
}

// ==========================================================================
// 3. CONTROL DE PESTAÑAS (SPA ROUTING)
// ==========================================================================
function switchTab(tabId) {
    AdminState.currentTab = tabId;

    // Actualizar sidebar buttons
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(btn => {
        if (btn.dataset.tab === tabId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Actualizar vistas
    const views = document.querySelectorAll('.admin-view');
    views.forEach(view => {
        if (view.id === `view-${tabId}`) {
            view.classList.add('active');
        } else {
            view.classList.remove('active');
        }
    });

    // Actualizar títulos de topbar
    const titleEl = document.getElementById('topbar-view-title');
    const subEl = document.getElementById('topbar-view-subtitle');

    const titles = {
        dashboard: { title: "Dashboard & Estadísticas", sub: "Resumen ejecutivo y monitoreo en tiempo real" },
        inventario: { title: "Control de Inventario", sub: "Existencias físicas por tallas y alertas de reorden" },
        ventas: { title: "Control de Ventas & Pedidos", sub: "Registro de transacciones, folios y estatus logístico" },
        taller: { title: "Taller de Dorsales & Estampados", sub: "Cola de termosellado de vinilos y parches oficiales" },
        usuarios: { title: "Perfiles & Roles de Usuario", sub: "Gestión de accesos, permisos y personal de sucursal" },
        sucursales: { title: "Sucursales & Sedes", sub: "Puntos de venta físicos y centros de distribución" }
    };

    if (titles[tabId]) {
        titleEl.textContent = titles[tabId].title;
        subEl.textContent = titles[tabId].sub;
    }

    // Renderizar datos específicos según pestaña
    if (tabId === 'dashboard') renderDashboard();
    if (tabId === 'inventario') renderInventoryTable();
    if (tabId === 'ventas') renderSalesTable();
    if (tabId === 'taller') renderWorkshopQueue();
    if (tabId === 'usuarios') renderUsersSection();
    if (tabId === 'sucursales') renderBranchesCards();
}

function toggleSidebar() {
    const sidebar = document.getElementById('admin-sidebar');
    if (sidebar) sidebar.classList.toggle('collapsed');
}

// ==========================================================================
// 4. GESTIÓN DE ROLES Y USUARIO ACTIVO (SIMULACIÓN DE PERSPECTIVA)
// ==========================================================================
function changeActiveUserRole(role) {
    const targetUser = AdminState.users.find(u => u.role === role) || AdminState.users[0];
    AdminState.activeUser = targetUser;
    localStorage.setItem('zonafutbol_active_user_id', targetUser.id);

    // Actualizar botones de simulación
    const rolePills = document.querySelectorAll('.role-pill-btn');
    rolePills.forEach(p => {
        if (p.dataset.role === role) p.classList.add('active');
        else p.classList.remove('active');
    });

    updateActiveUserUI();
    showToast(`Sesión cambiada a perfil: ${targetUser.name} (${role})`);

    // Comportamiento inteligente según rol
    if (role === 'TALLER') {
        switchTab('taller');
    } else if (role === 'VENDEDOR') {
        switchTab('ventas');
    }
}

function updateActiveUserUI() {
    const user = AdminState.activeUser;
    if (!user) return;

    // Sidebar
    const sbName = document.getElementById('sb-user-name');
    const sbRole = document.getElementById('sb-user-role');
    const sbAvatar = document.getElementById('sb-user-avatar');

    if (sbName) sbName.textContent = user.name;
    if (sbRole) {
        sbRole.textContent = user.role;
        sbRole.className = `badge-role ${user.role.toLowerCase()}`;
    }
    if (sbAvatar) sbAvatar.src = user.avatar;

    // Perfil completo en vista Usuarios
    const pName = document.getElementById('profile-card-name');
    const pEmail = document.getElementById('profile-card-email');
    const pRole = document.getElementById('profile-card-role');
    const pBranch = document.getElementById('profile-card-branch');
    const pAvatar = document.getElementById('profile-card-avatar');
    const pPerms = document.getElementById('profile-card-permissions');

    if (pName) pName.textContent = user.name;
    if (pEmail) pEmail.textContent = user.email;
    if (pRole) {
        pRole.textContent = user.role;
        pRole.className = `badge-role ${user.role.toLowerCase()}`;
    }
    if (pBranch) pBranch.textContent = `📍 ${user.branch}`;
    if (pAvatar) pAvatar.src = user.avatar;

    if (pPerms) {
        pPerms.innerHTML = user.permissions.map(perm => `
            <div class="permission-badge-item">
                <span>✔</span> ${perm}
            </div>
        `).join('');
    }
}

// ==========================================================================
// 5. ESTADÍSTICAS & CONSULTAS (DÍA, SEMANA, MES, SUCURSAL)
// ==========================================================================
function setAnalyticsPeriod(period) {
    AdminState.analyticsPeriod = period;

    const periodPills = document.querySelectorAll('.period-pill');
    periodPills.forEach(p => {
        if (p.dataset.period === period) p.classList.add('active');
        else p.classList.remove('active');
    });

    renderDashboard();
    showToast(`Consulta de estadísticas actualizada: ${period.toUpperCase()}`);
}

function onGlobalBranchChange(branchId) {
    AdminState.selectedBranch = branchId;
    renderDashboard();
    renderSalesTable();
    showToast(`Filtro de sucursal aplicado: ${branchId.toUpperCase()}`);
}

// Filtra las órdenes según el período y sucursal seleccionada
function getFilteredOrders() {
    const now = new Date("2026-09-30T23:59:59").getTime();
    const period = AdminState.analyticsPeriod;
    const branch = AdminState.selectedBranch;

    return AdminState.orders.filter(order => {
        // Filtro por Sucursal
        if (branch !== 'todas') {
            if (branch === 'online' && !order.branch.includes('Online')) return false;
            if (branch === 'estadio' && !order.branch.includes('Estadio')) return false;
            if (branch === 'centro' && !order.branch.includes('Centro')) return false;
            if (branch === 'polanco' && !order.branch.includes('Polanco')) return false;
        }

        // Filtro por Período
        const orderTime = order.timestamp || new Date(order.date).getTime();
        const diffMs = now - orderTime;
        const diffDays = diffMs / (1000 * 60 * 60 * 24);

        if (period === 'diaria') {
            return diffDays <= 1; // Hoy / últimas 24h
        } else if (period === 'semanal') {
            return diffDays <= 7; // Últimos 7 días
        } else if (period === 'mensual') {
            return diffDays <= 30; // Este mes (30 días)
        }
        return true; // Histórico
    });
}

function renderDashboard() {
    const filteredOrders = getFilteredOrders();

    // 1. Cálculos de KPIs
    const totalRevenue = filteredOrders.reduce((sum, o) => sum + (o.status !== 'Cancelado' ? o.price : 0), 0);
    const validOrders = filteredOrders.filter(o => o.status !== 'Cancelado');
    const totalOrdersCount = validOrders.length;
    const avgTicket = totalOrdersCount > 0 ? Math.round(totalRevenue / totalOrdersCount) : 0;

    const customizedCount = validOrders.filter(o => o.customName || o.customNumber || (o.patch && o.patch !== 'Sin parches adicionales')).length;
    const customRate = totalOrdersCount > 0 ? Math.round((customizedCount / totalOrdersCount) * 100) : 0;

    // Actualizar tarjetas en pantalla
    document.getElementById('kpi-total-revenue').textContent = `$${totalRevenue.toLocaleString()} MXN`;
    document.getElementById('kpi-total-orders').textContent = `${totalOrdersCount} uds.`;
    document.getElementById('kpi-avg-ticket').textContent = `$${avgTicket.toLocaleString()} MXN`;
    document.getElementById('kpi-custom-rate').textContent = `${customRate}%`;

    const subtextEl = document.getElementById('kpi-custom-detail');
    if (subtextEl) subtextEl.textContent = `${customizedCount} con dorsal o parche`;

    // 2. Gráfico Dinámico de Evolución (SVG)
    renderSalesEvolutionChart(filteredOrders);

    // 3. Desglose de Ventas por Sucursal
    renderBranchBreakdown(validOrders, totalRevenue);

    // 4. Top Camisetas Más Vendidas
    renderTopProducts(validOrders);

    // 5. Métodos de Pago
    renderPaymentMethodsBreakdown(validOrders);

    // 6. Badges de conteo en Sidebar
    updateSidebarBadges();
}

function renderSalesEvolutionChart(orders) {
    const container = document.getElementById('sales-evolution-chart');
    if (!container) return;

    // Generar 7 puntos de datos representativos según el período
    let points = [];
    if (AdminState.analyticsPeriod === 'diaria') {
        points = [
            { label: '06:00', rev: 0 },
            { label: '09:00', rev: 1699 },
            { label: '12:00', rev: 2798 },
            { label: '15:00', rev: 3897 },
            { label: '18:00', rev: 4996 },
            { label: '21:00', rev: 6195 }
        ];
    } else if (AdminState.analyticsPeriod === 'semanal') {
        points = [
            { label: 'Jue 24', rev: 1599 },
            { label: 'Vie 25', rev: 1599 },
            { label: 'Sáb 26', rev: 1799 },
            { label: 'Dom 27', rev: 999 },
            { label: 'Lun 28', rev: 1519 },
            { label: 'Mar 29', rev: 2268 },
            { label: 'Mié 30', rev: 3398 }
        ];
    } else {
        // Mensual
        points = [
            { label: 'Sem 1', rev: 3597 },
            { label: 'Sem 2', rev: 4896 },
            { label: 'Sem 3', rev: 4197 },
            { label: 'Sem 4', rev: 6994 }
        ];
    }

    const maxRev = Math.max(...points.map(p => p.rev), 1000);
    const width = container.clientWidth || 600;
    const height = 240;
    const paddingX = 40;
    const paddingY = 30;

    const availableW = width - (paddingX * 2);
    const availableH = height - (paddingY * 2);

    const coords = points.map((p, i) => {
        const x = paddingX + (i * (availableW / (points.length - 1)));
        const y = height - paddingY - ((p.rev / maxRev) * availableH);
        return { x, y, label: p.label, rev: p.rev };
    });

    const pathD = coords.reduce((acc, c, i) => {
        return i === 0 ? `M ${c.x} ${c.y}` : `${acc} L ${c.x} ${c.y}`;
    }, '');

    const areaD = `${pathD} L ${coords[coords.length - 1].x} ${height - paddingY} L ${coords[0].x} ${height - paddingY} Z`;

    container.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 ${width} ${height}" style="overflow: visible;">
            <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#000000" stop-opacity="0.25"/>
                    <stop offset="100%" stop-color="#000000" stop-opacity="0.0"/>
                </linearGradient>
            </defs>

            <!-- Líneas de fondo -->
            <line x1="${paddingX}" y1="${paddingY}" x2="${width - paddingX}" y2="${paddingY}" stroke="#e2e8f0" stroke-dasharray="4"/>
            <line x1="${paddingX}" y1="${height / 2}" x2="${width - paddingX}" y2="${height / 2}" stroke="#e2e8f0" stroke-dasharray="4"/>
            <line x1="${paddingX}" y1="${height - paddingY}" x2="${width - paddingX}" y2="${height - paddingY}" stroke="#cbd5e1" stroke-width="1.5"/>

            <!-- Relleno sombreado -->
            <path d="${areaD}" fill="url(#chartGradient)" />

            <!-- Línea de tendencia suave -->
            <path d="${pathD}" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>

            <!-- Puntos interactivos con tooltip -->
            ${coords.map(c => `
                <g class="chart-point" style="cursor: pointer;">
                    <circle cx="${c.x}" cy="${c.y}" r="6" fill="#ffffff" stroke="#000000" stroke-width="3"/>
                    <text x="${c.x}" y="${height - 10}" font-size="11" font-weight="700" fill="#64748b" text-anchor="middle">${c.label}</text>
                    <text x="${c.x}" y="${c.y - 12}" font-size="11" font-weight="800" fill="#000000" text-anchor="middle">$${c.rev.toLocaleString()}</text>
                </g>
            `).join('')}
        </svg>
    `;
}

function renderBranchBreakdown(orders, totalRevenue) {
    const listEl = document.getElementById('branch-breakdown-list');
    if (!listEl) return;

    const branchTotals = {
        "Tienda Online": 0,
        "Sucursal Estadio Azteca": 0,
        "Sucursal Centro Histórico": 0,
        "Sucursal Polanco Luxury": 0
    };

    orders.forEach(o => {
        if (branchTotals[o.branch] !== undefined) {
            branchTotals[o.branch] += o.price;
        } else {
            branchTotals["Tienda Online"] += o.price;
        }
    });

    const colors = {
        "Tienda Online": "#000000",
        "Sucursal Estadio Azteca": "#2563eb",
        "Sucursal Centro Histórico": "#10b981",
        "Sucursal Polanco Luxury": "#d97706"
    };

    listEl.innerHTML = Object.keys(branchTotals).map(branchName => {
        const amt = branchTotals[branchName];
        const pct = totalRevenue > 0 ? Math.round((amt / totalRevenue) * 100) : 0;
        return `
            <div class="branch-stat-row">
                <div class="branch-stat-meta">
                    <span class="branch-name">${branchName} (${pct}%)</span>
                    <span class="branch-amt">$${amt.toLocaleString()} MXN</span>
                </div>
                <div class="progress-track">
                    <div class="progress-fill" style="width: ${pct}%; background: ${colors[branchName] || '#000000'};"></div>
                </div>
            </div>
        `;
    }).join('');
}

function renderTopProducts(orders) {
    const listEl = document.getElementById('top-products-list');
    if (!listEl) return;

    const productSales = {};

    orders.forEach(o => {
        if (!productSales[o.productId]) {
            productSales[o.productId] = {
                id: o.productId,
                name: o.productName,
                units: 0,
                revenue: 0
            };
        }
        productSales[o.productId].units += 1;
        productSales[o.productId].revenue += o.price;
    });

    const sorted = Object.values(productSales)
        .sort((a, b) => b.units - a.units)
        .slice(0, 5);

    if (sorted.length === 0) {
        listEl.innerHTML = `<p style="color: #64748b; font-size: 0.88rem; padding: 10px 0;">No hay ventas registradas en este período.</p>`;
        return;
    }

    listEl.innerHTML = sorted.map((p, index) => {
        const prodData = AdminState.products.find(prod => prod.id === p.id) || { image: "imagenes/camisetas/tienda-camisetas.jpg" };
        return `
            <div class="top-prod-row">
                <span class="top-prod-rank">#${index + 1}</span>
                <img src="${prodData.image}" alt="${p.name}" class="top-prod-img" onerror="this.src='imagenes/camisetas/tienda-camisetas.jpg'">
                <div class="top-prod-info">
                    <h4>${p.name}</h4>
                    <p>Colección Oficial Zona Fútbol</p>
                </div>
                <div class="top-prod-metric">
                    <div class="top-prod-units">${p.units} ${p.units === 1 ? 'unidad' : 'unidades'}</div>
                    <div class="top-prod-rev">$${p.revenue.toLocaleString()} MXN</div>
                </div>
            </div>
        `;
    }).join('');
}

function renderPaymentMethodsBreakdown(orders) {
    const container = document.getElementById('payment-methods-breakdown');
    if (!container) return;

    const counts = {
        "Transferencia SPEI": 0,
        "Tarjeta Crédito/Débito": 0,
        "Efectivo en Mostrador": 0,
        "Depósito OXXO": 0
    };

    orders.forEach(o => {
        if (counts[o.paymentMethod] !== undefined) counts[o.paymentMethod]++;
        else counts["Transferencia SPEI"]++;
    });

    const icons = {
        "Transferencia SPEI": "⚡",
        "Tarjeta Crédito/Débito": "💳",
        "Efectivo en Mostrador": "💵",
        "Depósito OXXO": "🏪"
    };

    container.innerHTML = Object.keys(counts).map(method => `
        <div class="pay-method-item">
            <div class="pay-method-left">
                <span>${icons[method] || '💰'}</span>
                <span>${method}</span>
            </div>
            <div class="pay-method-right">${counts[method]} ops.</div>
        </div>
    `).join('');
}

function updateSidebarBadges() {
    // 1. Stock Crítico
    let lowStockCount = 0;
    AdminState.products.forEach(p => {
        const total = Object.values(p.stock).reduce((a, b) => a + b, 0);
        if (total <= 5) lowStockCount++;
    });
    const lowEl = document.getElementById('sb-low-stock-count');
    if (lowEl) lowEl.textContent = lowStockCount;

    // 2. Pedidos Pendientes
    const pendingCount = AdminState.orders.filter(o => o.status === 'Pendiente' || o.status === 'Pagado').length;
    const pendingEl = document.getElementById('sb-pending-orders-count');
    if (pendingEl) pendingEl.textContent = pendingCount;

    // 3. Cola de Taller
    const workshopCount = AdminState.orders.filter(o => (o.customName || o.customNumber) && (o.status === 'En Taller' || o.status === 'Pagado')).length;
    const customEl = document.getElementById('sb-custom-orders-count');
    if (customEl) customEl.textContent = workshopCount;
}

// ==========================================================================
// 6. CONTROL DE INVENTARIO (DETALLE POR TALLAS & ALERTAS)
// ==========================================================================
function renderInventoryTable() {
    const tbody = document.getElementById('inventory-table-body');
    if (!tbody) return;

    const searchVal = (document.getElementById('inventory-search-input')?.value || '').toLowerCase().trim();
    const catVal = document.getElementById('inventory-category-filter')?.value || 'todas';
    const stockVal = document.getElementById('inventory-stock-filter')?.value || 'todos';

    let totalUnitsAll = 0;
    let lowStockModels = 0;
    let outOfStockModels = 0;
    let inventoryValue = 0;

    const filtered = AdminState.products.filter(p => {
        const totalStock = Object.values(p.stock).reduce((a, b) => a + b, 0);

        totalUnitsAll += totalStock;
        inventoryValue += totalStock * p.price;
        if (totalStock === 0) outOfStockModels++;
        else if (totalStock <= 5) lowStockModels++;

        if (searchVal && !p.name.toLowerCase().includes(searchVal)) return false;
        if (catVal !== 'todas') {
            if (catVal === 'retro' && p.category !== 'retro') return false;
            if (catVal === 'nuevas' && p.category !== 'nuevas') return false;
            if (['laliga', 'premier', 'seriea', 'selecciones'].includes(catVal) && p.league !== catVal) return false;
        }
        if (stockVal === 'bajo' && (totalStock > 5 || totalStock === 0)) return false;
        if (stockVal === 'agotado' && totalStock > 0) return false;
        if (stockVal === 'ok' && totalStock <= 5) return false;

        return true;
    });

    // Actualizar tirilla de métricas
    document.getElementById('inv-total-models').textContent = AdminState.products.length;
    document.getElementById('inv-total-units').textContent = `${totalUnitsAll} piezas`;
    document.getElementById('inv-low-models').textContent = lowStockModels;
    document.getElementById('inv-out-models').textContent = outOfStockModels;
    document.getElementById('inv-total-value').textContent = `$${inventoryValue.toLocaleString()} MXN`;

    tbody.innerHTML = filtered.map(p => {
        const total = Object.values(p.stock).reduce((a, b) => a + b, 0);

        let statusBadge = `<span class="status-badge in-stock">🟢 En Stock (${total})</span>`;
        if (total === 0) {
            statusBadge = `<span class="status-badge out-of-stock">🔴 Agotado</span>`;
        } else if (total <= 5) {
            statusBadge = `<span class="status-badge low-stock">⚠️ Stock Crítico (${total})</span>`;
        }

        const sizeBadge = (size) => {
            const count = p.stock[size] || 0;
            let cls = 'size-stock-badge';
            if (count === 0) cls += ' empty';
            else if (count <= 2) cls += ' low';
            return `<span class="${cls}">${count}</span>`;
        };

        return `
            <tr>
                <td>
                    <div class="table-product-cell">
                        <img src="${p.image}" alt="${p.name}" class="table-product-thumb" onerror="this.src='imagenes/camisetas/tienda-camisetas.jpg'">
                        <div class="table-product-meta">
                            <h4>${p.name}</h4>
                            <p>SKU: ZF-${p.id.toUpperCase()}</p>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="badge-subtle">${p.category === 'retro' ? 'Retro Histórica' : 'Temporada 24/25'}</span>
                    <span style="font-size: 0.76rem; color: #64748b; margin-left: 4px;">(${p.era})</span>
                </td>
                <td><strong>$${p.price.toLocaleString()} MXN</strong></td>
                <td class="center-col">${sizeBadge('S')}</td>
                <td class="center-col">${sizeBadge('M')}</td>
                <td class="center-col">${sizeBadge('L')}</td>
                <td class="center-col">${sizeBadge('XL')}</td>
                <td class="center-col">${sizeBadge('XXL')}</td>
                <td class="center-col"><strong>${total}</strong></td>
                <td>${statusBadge}</td>
                <td class="right-col">
                    <button class="btn btn-secondary-admin btn-sm" onclick="openEditStockModal('${p.id}')">
                        ✏️ Modificar
                    </button>
                </td>
            </tr>
        `;
    }).join('');

    renderSuppliesGrid();
}

function filterInventoryTable() {
    renderInventoryTable();
}

function renderSuppliesGrid() {
    const grid = document.getElementById('workshop-supplies-grid');
    if (!grid) return;

    grid.innerHTML = AdminState.supplies.map(sup => `
        <div class="supply-card">
            <div class="supply-info">
                <h4>${sup.name}</h4>
                <p>${sup.type}</p>
            </div>
            <div class="supply-qty">${sup.stock}</div>
        </div>
    `).join('');
}

function openEditStockModal(productId) {
    const product = AdminState.products.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('edit-stock-product-id').value = product.id;
    document.getElementById('stock-val-s').value = product.stock.S || 0;
    document.getElementById('stock-val-m').value = product.stock.M || 0;
    document.getElementById('stock-val-l').value = product.stock.L || 0;
    document.getElementById('stock-val-xl').value = product.stock.XL || 0;
    document.getElementById('stock-val-xxl').value = product.stock.XXL || 0;

    const previewEl = document.getElementById('edit-stock-preview');
    if (previewEl) {
        previewEl.innerHTML = `
            <div class="table-product-cell" style="margin-bottom: 14px;">
                <img src="${product.image}" class="table-product-thumb" alt="${product.name}" onerror="this.src='imagenes/camisetas/tienda-camisetas.jpg'">
                <div class="table-product-meta">
                    <h4>${product.name}</h4>
                    <p>Precio: $${product.price} MXN | Temporada: ${product.era}</p>
                </div>
            </div>
        `;
    }

    openModal('modal-edit-stock');
}

function handleEditStockSubmit(event) {
    event.preventDefault();
    const productId = document.getElementById('edit-stock-product-id').value;
    const product = AdminState.products.find(p => p.id === productId);
    if (!product) return;

    product.stock.S = parseInt(document.getElementById('stock-val-s').value) || 0;
    product.stock.M = parseInt(document.getElementById('stock-val-m').value) || 0;
    product.stock.L = parseInt(document.getElementById('stock-val-l').value) || 0;
    product.stock.XL = parseInt(document.getElementById('stock-val-xl').value) || 0;
    product.stock.XXL = parseInt(document.getElementById('stock-val-xxl').value) || 0;

    saveProducts();
    closeModal('modal-edit-stock');
    renderInventoryTable();
    updateSidebarBadges();
    showToast(`Stock actualizado con éxito para: ${product.name}`);
}

function openNewProductModal() {
    openModal('modal-new-product');
}

function handleNewProductSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('new-prod-name').value.trim();
    const era = document.getElementById('new-prod-era').value.trim();
    const price = parseInt(document.getElementById('new-prod-price').value) || 999;
    const category = document.getElementById('new-prod-category').value;
    const league = document.getElementById('new-prod-league').value;
    const image = document.getElementById('new-prod-image').value.trim() || 'imagenes/camisetas/tienda-camisetas.jpg';

    const stock = {
        S: parseInt(document.getElementById('new-stock-s').value) || 0,
        M: parseInt(document.getElementById('new-stock-m').value) || 0,
        L: parseInt(document.getElementById('new-stock-l').value) || 0,
        XL: parseInt(document.getElementById('new-stock-xl').value) || 0,
        XXL: parseInt(document.getElementById('new-stock-xxl').value) || 0
    };

    const newId = `custom-${Date.now().toString().slice(-4)}`;

    AdminState.products.unshift({
        id: newId,
        name: name,
        category: category,
        league: league,
        era: era,
        price: price,
        image: image,
        stock: stock
    });

    saveProducts();
    closeModal('modal-new-product');
    renderInventoryTable();
    showToast(`¡Camiseta "${name}" registrada en inventario!`);
}

function exportInventoryCSV() {
    let csv = "ID,Nombre,Categoria,Era,Precio,Stock_S,Stock_M,Stock_L,Stock_XL,Stock_XXL,Total_Stock\n";
    AdminState.products.forEach(p => {
        const total = Object.values(p.stock).reduce((a, b) => a + b, 0);
        csv += `"${p.id}","${p.name}","${p.category}","${p.era}",${p.price},${p.stock.S},${p.stock.M},${p.stock.L},${p.stock.XL},${p.stock.XXL},${total}\n`;
    });

    downloadCSV(csv, `ZonaFutbol_Inventario_${new Date().toISOString().slice(0, 10)}.csv`);
    showToast("Inventario exportado a CSV correctamente.");
}

// ==========================================================================
// 7. CONTROL DE VENTAS & PEDIDOS
// ==========================================================================
function renderSalesTable() {
    const tbody = document.getElementById('sales-table-body');
    if (!tbody) return;

    const searchVal = (document.getElementById('sales-search-input')?.value || '').toLowerCase().trim();
    const statusVal = document.getElementById('sales-status-filter')?.value || 'todos';
    const branchVal = document.getElementById('sales-branch-filter')?.value || 'todas';

    const filtered = AdminState.orders.filter(o => {
        if (searchVal && !o.id.toLowerCase().includes(searchVal) && !o.client.toLowerCase().includes(searchVal) && !o.phone.includes(searchVal)) return false;
        if (statusVal !== 'todos' && o.status !== statusVal) return false;
        if (branchVal !== 'todas' && !o.branch.includes(branchVal)) return false;
        return true;
    });

    tbody.innerHTML = filtered.map(o => {
        // Estampado tag
        let customBadge = '';
        if (o.customName && o.customNumber) {
            customBadge = `<span class="badge-subtle" style="background:#e0e7ff;color:#3730a3;">⚽ #${o.customNumber} ${o.customName}</span>`;
        } else if (o.customNumber) {
            customBadge = `<span class="badge-subtle" style="background:#e0e7ff;color:#3730a3;">⚽ Dorsal #${o.customNumber}</span>`;
        } else if (o.customName) {
            customBadge = `<span class="badge-subtle" style="background:#e0e7ff;color:#3730a3;">⚽ ${o.customName}</span>`;
        } else {
            customBadge = `<span class="badge-subtle" style="background:#f1f5f9;color:#64748b;">Lisa (Original)</span>`;
        }

        // Parche badge
        let patchBadge = '';
        if (o.patch && o.patch !== 'Sin parches adicionales') {
            patchBadge = `<span class="badge-subtle" style="background:#fef3c7;color:#92400e;">🏆 ${o.patch}</span>`;
        }

        // Status badge con dropdown interactivo
        const statusOptions = ['Pendiente', 'Pagado', 'En Taller', 'Enviado', 'Entregado', 'Cancelado'];
        const statusClass = o.status.toLowerCase().replace(/\s+/g, '-');

        return `
            <tr>
                <td><strong>${o.id}</strong></td>
                <td>
                    <div style="font-size: 0.82rem; font-weight: 700;">${o.date}</div>
                    <span style="font-size: 0.72rem; color: #94a3b8;">${o.city || 'México'}</span>
                </td>
                <td>
                    <div style="font-weight: 800;">${o.client}</div>
                    <a href="https://wa.me/${o.phone}" target="_blank" style="font-size: 0.76rem; color: #059669; text-decoration: none; font-weight: 700;">
                        📱 +${o.phone}
                    </a>
                </td>
                <td>
                    <span class="badge-branch">${o.branch}</span>
                </td>
                <td>
                    <div style="font-weight: 700; margin-bottom: 4px;">${o.productName} (Talla: ${o.size})</div>
                    <div style="display: flex; gap: 4px; flex-wrap: wrap;">
                        ${customBadge}
                        ${patchBadge}
                    </div>
                </td>
                <td><span style="font-size: 0.8rem; font-weight: 600;">${o.paymentMethod}</span></td>
                <td><strong style="font-size: 0.96rem;">$${o.price.toLocaleString()} MXN</strong></td>
                <td>
                    <select class="status-badge ${statusClass}" onchange="changeOrderStatus('${o.id}', this.value)" style="border: none; outline: none; cursor: pointer; font-weight: 800; font-family: inherit;">
                        ${statusOptions.map(opt => `
                            <option value="${opt}" ${opt === o.status ? 'selected' : ''}>${opt}</option>
                        `).join('')}
                    </select>
                </td>
                <td class="right-col">
                    <button class="btn btn-secondary-admin btn-sm" onclick="openOrderDetail('${o.id}')" title="Ver comprobante y dirección">
                        🔍 Detalle
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

function filterSalesTable() {
    renderSalesTable();
}

function changeOrderStatus(orderId, newStatus) {
    const order = AdminState.orders.find(o => o.id === orderId);
    if (!order) return;

    order.status = newStatus;
    saveOrders();
    renderDashboard();
    renderSalesTable();
    updateSidebarBadges();
    showToast(`Pedido ${orderId} actualizado a estado: "${newStatus}"`);
}

function openOrderDetail(orderId) {
    const order = AdminState.orders.find(o => o.id === orderId);
    if (!order) return;

    document.getElementById('modal-order-title').textContent = `Comprobante de Pedido ${order.id}`;

    const contentEl = document.getElementById('modal-order-content');
    contentEl.innerHTML = `
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px;">
                <div>
                    <h2 style="font-size: 1.3rem; font-weight: 900;">ZONA FÚTBOL // TICKET OFICIAL</h2>
                    <p style="font-size: 0.8rem; color: #64748b;">Folio: <strong>${order.id}</strong> | Fecha: ${order.date}</p>
                </div>
                <span class="status-badge ${order.status.toLowerCase().replace(/\s+/g, '-')}">${order.status}</span>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; font-size: 0.88rem; margin-bottom: 16px;">
                <div>
                    <span style="color: #64748b; display: block; font-size: 0.76rem;">DATOS DEL CLIENTE</span>
                    <strong>${order.client}</strong><br>
                    Teléfono: +${order.phone}<br>
                    Ciudad: ${order.city || 'México'}
                </div>
                <div>
                    <span style="color: #64748b; display: block; font-size: 0.76rem;">DIRECCIÓN DE ENTREGA</span>
                    ${order.address || 'Entrega en sucursal'}<br>
                    Canal: <strong>${order.branch}</strong>
                </div>
            </div>

            <div style="border-top: 1px dashed #cbd5e1; padding-top: 14px;">
                <div style="display: flex; justify-content: space-between; font-size: 0.95rem; font-weight: 800; margin-bottom: 6px;">
                    <span>${order.productName} (Talla ${order.size})</span>
                    <span>$${order.price.toLocaleString()} MXN</span>
                </div>
                <div style="font-size: 0.82rem; color: #475569;">
                    Estampado: ${order.customNumber || order.customName ? `#${order.customNumber || ''} ${order.customName || ''}` : 'Camiseta Lisa (Sin Estampado)'}<br>
                    Parche: ${order.patch || 'Sin parches adicionales'}<br>
                    Método de Pago: <strong>${order.paymentMethod}</strong>
                </div>
            </div>
        </div>
    `;

    // Configurar botón de WhatsApp
    const waBtn = document.getElementById('btn-wa-order-contact');
    if (waBtn) {
        waBtn.onclick = () => {
            const msg = `Hola ${order.client}, te saludamos de Zona Fútbol. Te contactamos respecto a tu orden ${order.id} (${order.productName}). Tu pedido se encuentra en estatus: *${order.status}*. ¿Te podemos apoyar con alguna duda?`;
            window.open(`https://wa.me/${order.phone}?text=${encodeURIComponent(msg)}`, '_blank');
        };
    }

    openModal('modal-order-detail');
}

// Modal Nueva Venta Manual
function openNewSaleModal() {
    const select = document.getElementById('sale-jersey-select');
    if (select) {
        select.innerHTML = AdminState.products.map(p => `
            <option value="${p.id}" data-price="${p.price}">${p.name} ($${p.price.toLocaleString()} MXN)</option>
        `).join('');
    }
    calculateNewSaleTotal();
    openModal('modal-new-sale');
}

function calculateNewSaleTotal() {
    const select = document.getElementById('sale-jersey-select');
    if (!select) return;

    const opt = select.selectedOptions[0];
    const basePrice = opt ? parseInt(opt.dataset.price) || 999 : 999;

    const name = document.getElementById('sale-custom-name')?.value.trim();
    const num = document.getElementById('sale-custom-number')?.value.trim();
    const patch = document.getElementById('sale-patch-select')?.value || '';

    let customFee = 0;
    if (name && num) customFee = 120;
    else if (name || num) customFee = 70;

    let patchFee = 0;
    if (patch.includes('Champions') || patch.includes('Mundial')) patchFee = 80;
    else if (patch.includes('Liga')) patchFee = 50;

    const total = basePrice + customFee + patchFee;
    const display = document.getElementById('sale-total-display');
    if (display) display.textContent = `$${total.toLocaleString()} MXN`;
    return total;
}

function handleNewSaleSubmit(event) {
    event.preventDefault();

    const client = document.getElementById('sale-client-name').value.trim();
    const phone = document.getElementById('sale-client-phone').value.trim();
    const jerseySelect = document.getElementById('sale-jersey-select');
    const product = AdminState.products.find(p => p.id === jerseySelect.value);
    const size = document.getElementById('sale-size-select').value;
    const branch = document.getElementById('sale-branch-select').value;
    const payment = document.getElementById('sale-payment-select').value;

    const customName = document.getElementById('sale-custom-name').value.trim().toUpperCase();
    const customNumber = document.getElementById('sale-custom-number').value.trim();
    const patch = document.getElementById('sale-patch-select').value;

    const total = calculateNewSaleTotal();
    const newFolio = `ZF-${1050 + AdminState.orders.length}`;

    const newOrder = {
        id: newFolio,
        date: new Date().toISOString().replace('T', ' ').slice(0, 16),
        timestamp: Date.now(),
        client: client,
        phone: phone,
        city: "CDMX",
        address: "Venta en mostrador / direct",
        branch: branch,
        productId: product ? product.id : 'rm-2025',
        productName: product ? product.name : 'Camiseta Zona Fútbol',
        size: size,
        customName: customName,
        customNumber: customNumber,
        patch: patch,
        mode: (customName && customNumber) ? 'full' : (customNumber ? 'number-only' : (customName ? 'name-only' : 'plain')),
        price: total,
        paymentMethod: payment,
        status: (customName || customNumber) ? "En Taller" : "Pagado"
    };

    AdminState.orders.unshift(newOrder);
    saveOrders();

    // Descontar inventario de la talla
    if (product && product.stock[size] > 0) {
        product.stock[size] -= 1;
        saveProducts();
    }

    closeModal('modal-new-sale');
    renderDashboard();
    renderSalesTable();
    updateSidebarBadges();
    showToast(`¡Venta #${newFolio} registrada exitosamente por $${total.toLocaleString()} MXN!`);
}

function exportSalesCSV() {
    let csv = "Folio,Fecha,Cliente,Telefono,Sucursal,Camiseta,Talla,Dorsal,Nombre,Parche,MetodoPago,Total,Estatus\n";
    AdminState.orders.forEach(o => {
        csv += `"${o.id}","${o.date}","${o.client}","${o.phone}","${o.branch}","${o.productName}","${o.size}","${o.customNumber || ''}","${o.customName || ''}","${o.patch || ''}","${o.paymentMethod}",${o.price},"${o.status}"\n`;
    });

    downloadCSV(csv, `ZonaFutbol_Ventas_${new Date().toISOString().slice(0, 10)}.csv`);
    showToast("Ventas exportadas a CSV correctamente.");
}

// ==========================================================================
// 8. TALLER DE DORSALES (COLA DE PRODUCCIÓN)
// ==========================================================================
function renderWorkshopQueue() {
    const container = document.getElementById('workshop-queue-container');
    if (!container) return;

    const workshopOrders = AdminState.orders.filter(o => {
        return (o.customName || o.customNumber || (o.patch && o.patch !== 'Sin parches adicionales')) &&
               (o.status === 'En Taller' || o.status === 'Pagado');
    });

    if (workshopOrders.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; background: #ffffff; padding: 40px; border-radius: 16px; text-align: center; border: 1px dashed #cbd5e1;">
                <h3 style="font-size: 1.2rem; font-weight: 800; margin-bottom: 8px;">✅ ¡Mesa de Taller Despejada!</h3>
                <p style="color: #64748b;">No hay camisetas pendientes por estampar en este momento.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = workshopOrders.map(o => `
        <div class="workshop-card">
            <div class="workshop-card-header">
                <strong>${o.id}</strong>
                <span class="badge-role taller">EN TERMOSELLADO</span>
            </div>
            <div class="workshop-card-body">
                <div class="dorsal-visual-box">
                    <div class="dorsal-preview-name">${o.customName || '(SIN NOMBRE)'}</div>
                    <div class="dorsal-preview-num">${o.customNumber || '-'}</div>
                </div>
                <ul class="workshop-specs-list">
                    <li><span>Camiseta:</span> <strong>${o.productName}</strong></li>
                    <li><span>Talla:</span> <strong>${o.size}</strong></li>
                    <li><span>Cliente:</span> <strong>${o.client}</strong></li>
                    <li><span>Parche en Manga:</span> <strong>${o.patch || 'Ninguno'}</strong></li>
                    <li><span>Sucursal Destino:</span> <strong>${o.branch}</strong></li>
                </ul>
            </div>
            <div class="workshop-card-footer">
                <button class="btn btn-primary-admin" style="width: 100%;" onclick="completeWorkshopDorsal('${o.id}')">
                    ✨ Marcar Estampado Listo
                </button>
            </div>
        </div>
    `).join('');
}

function completeWorkshopDorsal(orderId) {
    const order = AdminState.orders.find(o => o.id === orderId);
    if (!order) return;

    order.status = "Enviado";
    saveOrders();
    renderWorkshopQueue();
    renderDashboard();
    updateSidebarBadges();
    showToast(`Camiseta ${orderId} marcada como estampada y lista para envío.`);
}

function printWorkshopWorksheet() {
    window.print();
}

// ==========================================================================
// 9. PERFILES DE USUARIO & SUCURSALES
// ==========================================================================
function renderUsersSection() {
    updateActiveUserUI();

    const tbody = document.getElementById('users-table-body');
    const countTag = document.getElementById('users-count-tag');
    if (countTag) countTag.textContent = `${AdminState.users.length} Usuarios Registrados`;

    if (!tbody) return;

    tbody.innerHTML = AdminState.users.map(u => `
        <tr>
            <td>
                <div class="table-product-cell">
                    <img src="${u.avatar}" class="table-product-thumb" alt="${u.name}">
                    <div class="table-product-meta">
                        <h4>${u.name}</h4>
                        <p>${u.id}</p>
                    </div>
                </div>
            </td>
            <td>${u.email}</td>
            <td><span class="badge-role ${u.role.toLowerCase()}">${u.role}</span></td>
            <td><span class="badge-branch">${u.branch}</span></td>
            <td>${u.lastLogin}</td>
            <td><span class="status-badge in-stock">🟢 ${u.status}</span></td>
            <td class="right-col">
                <button class="btn btn-secondary-admin btn-sm" onclick="changeActiveUserRole('${u.role}')">
                    👤 Asumir Rol
                </button>
            </td>
        </tr>
    `).join('');
}

function openNewUserModal() {
    openModal('modal-new-user');
}

function handleNewUserSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('new-user-name').value.trim();
    const email = document.getElementById('new-user-email').value.trim();
    const role = document.getElementById('new-user-role').value;
    const branch = document.getElementById('new-user-branch').value;

    const perms = {
        ADMIN: ["Control Total Financiero", "Gestión de Usuarios", "Edición de Precios", "Reportes Multisede"],
        VENDEDOR: ["Registro de Ventas Mostrador", "Atención WhatsApp", "Consulta de Stock"],
        TALLER: ["Cola de Estampados", "Control de Insumos Vinil", "Marcar Termosellado"],
        GERENTE: ["Supervisión Local", "Control de Caja", "Reporte Semanal"]
    };

    const newUser = {
        id: `usr-${AdminState.users.length + 1}`,
        name: name,
        email: email,
        role: role,
        branch: branch,
        lastLogin: "Recién Creado",
        status: "Activo",
        avatar: "imagenes/camisetas/real-madrid.jpg",
        permissions: perms[role] || ["Consulta de Catálogo"]
    };

    AdminState.users.push(newUser);
    saveUsers();
    closeModal('modal-new-user');
    renderUsersSection();
    showToast(`Empleado "${name}" agregado con rol ${role}.`);
}

function renderBranchesCards() {
    const container = document.getElementById('branches-cards-grid');
    if (!container) return;

    container.innerHTML = AdminState.branches.map(b => {
        // Calcular órdenes de esta sucursal
        const branchOrders = AdminState.orders.filter(o => o.branch.includes(b.name.split(' ')[0]));
        const branchRev = branchOrders.reduce((sum, o) => sum + (o.status !== 'Cancelado' ? o.price : 0), 0);

        return `
            <div class="branch-card">
                <div class="branch-card-header">
                    <span class="branch-icon">${b.icon}</span>
                    <div>
                        <h3>${b.name}</h3>
                        <p>${b.type} • ${b.code}</p>
                    </div>
                </div>
                <div style="font-size: 0.82rem; color: #475569; margin-bottom: 12px;">
                    📍 ${b.address}<br>
                    👤 Gerente: <strong>${b.manager}</strong><br>
                    📞 ${b.phone}
                </div>
                <div class="branch-metrics-row">
                    <span>Ventas Acumuladas:</span>
                    <strong>$${branchRev.toLocaleString()} MXN</strong>
                </div>
                <div class="branch-metrics-row">
                    <span>Transacciones:</span>
                    <strong>${branchOrders.length} pedidos</strong>
                </div>
            </div>
        `;
    }).join('');
}

// ==========================================================================
// 10. MODALES & UTILIDADES
// ==========================================================================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function showToast(message) {
    const container = document.getElementById('admin-toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'admin-toast';
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-10px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

function downloadCSV(csvContent, filename) {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function exportAnalyticsReport() {
    exportSalesCSV();
}

function renderAllViews() {
    renderDashboard();
    renderInventoryTable();
    renderSalesTable();
    renderWorkshopQueue();
    renderUsersSection();
    renderBranchesCards();
}

function initUI() {
    // Cerrar modales con clic fuera
    document.querySelectorAll('.admin-modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal.id);
        });
    });
}
