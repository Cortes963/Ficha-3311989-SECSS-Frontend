// src/shared/constants/menuOptions.js
export const roleCardsData = {
  ADMINISTRADOR: {
    title: 'Administrador',
    headerClass: 'bg-admin',
    borderClass: 'border-admin',
    icon: 'bi-gear-fill',
    actions: [
      { label: 'Gestión de Usuarios', path: '/usuarios', icon: 'bi-people' },
      { label: 'Configuración del Sistema', path: '/configuracion', icon: 'bi-sliders' },
      { label: 'Auditoría de Accesos', path: '/auditoria', icon: 'bi-shield-lock' }
    ]
  },
  JEFE_SEGURIDAD: {
    title: 'Jefe de Seguridad',
    headerClass: 'bg-seguridad',
    borderClass: 'border-seguridad',
    icon: 'bi-shield-shaded',
    actions: [
      { label: 'Control de Novedades', path: '/novedades', icon: 'bi-exclamation-triangle' },
      { label: 'Reportes', path: '/reportes', icon: 'bi-file-earmark-text' },
      { label: 'Consultas Globales', path: '/consultas', icon: 'bi-search' }
    ]
  },
  CELADOR: {
    title: 'Celador',
    headerClass: 'bg-celador',
    borderClass: 'border-celador',
    icon: 'bi-person-badge',
    actions: [
      { label: 'Registrar Entrada/Salida', path: '/control-accesos', icon: 'bi-door-open' },
      { label: 'Consulta de Cupos', path: '/cupos', icon: 'bi-p-circle' }
    ]
  },
  APRENDIZ: {
    title: 'Aprendiz',
    headerClass: 'bg-aprendiz',
    borderClass: 'border-aprendiz',
    icon: 'bi-mortarboard',
    actions: [
      { label: 'Mis Vehículos', path: '/mis-vehiculos', icon: 'bi-bicycle' },
      { label: 'Mi Historial de Acceso', path: '/mi-historial', icon: 'bi-clock-history' }
    ]
  }
};