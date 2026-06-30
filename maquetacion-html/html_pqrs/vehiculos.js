
const db = {
    pqrs       : [],   // tabla pqrs
    reportes   : [],   // tabla reporte
    respuestas : []    // tabla respuesta
};


document.querySelectorAll('[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
        // Quitar "active" de todos los botones
        document.querySelectorAll('[data-tab]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Ocultar todos los paneles
        document.querySelectorAll('.tab-content-section').forEach(s => s.style.display = 'none');

        // Mostrar el panel correspondiente
        document.getElementById('tab-' + btn.dataset.tab).style.display = 'block';

        // Ocultar tabla de registros al cambiar de tab
        document.getElementById('seccion-tabla').style.display = 'none';
    });
});



function estadoBadge(val) {
    const map = {
        '0' : ['badge-pendiente', 'Pendiente'],
        '1' : ['badge-proceso',   'En proceso'],
        '2' : ['badge-resuelto',  'Resuelto'],
    };
    const [cls, txt] = map[val] ?? ['badge-pendiente', 'Desconocido'];
    return `<span class="badge-estado ${cls}">${txt}</span>`;
}


function mostrarAlerta(msg = '¡Registro guardado correctamente!') {
    const el = document.getElementById('alerta');
    el.querySelector('strong').textContent = msg;
    el.style.display = 'block';
    setTimeout(() => el.style.display = 'none', 4000);
}


/* GUARDAR PQRS*/
function guardarPQRS() {
    /* — Leer campos — */
    const asunto = document.getElementById('pqrs_asunto').value.trim();
    const cuerpo = document.getElementById('pqrs_cuerpo').value.trim();

    /* — Validación básica — */
    if (!asunto || !cuerpo) {
        alert('Asunto y cuerpo son obligatorios.');
        return;
    }

    /* — Construir objeto (equivale a un INSERT) — */
    const registro = {
        id         : db.pqrs.length + 1,
        id_usuario : document.getElementById('pqrs_id_usuario').value,
        asunto,
        cuerpo,
        estado     : document.getElementById('pqrs_estado').value,
        fecha_hora : new Date().toLocaleString('es-CO')
    };

    db.pqrs.push(registro);

    /* — Limpia formulario — */
    ['pqrs_asunto', 'pqrs_cuerpo'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('pqrs_estado').value = '';

    /* — Feedback visual y tabla — */
    mostrarAlerta('¡PQRS radicada correctamente!');
    renderTabla('pqrs');
}


/* GUARDAR REPORTE*/
function guardarReporte() {
    /* — Leer campos — */
    const celador = document.getElementById('rep_id_usuario_celador').value;
    const asunto  = document.getElementById('rep_asunto').value.trim();
    const cuerpo  = document.getElementById('rep_cuerpo').value.trim();

    /* — Validación básica — */
    if (!celador || !asunto || !cuerpo) {
        alert('ID Celador, asunto y cuerpo son obligatorios.');
        return;
    }

    /* — Construir objeto — */
    db.reportes.push({
        id                 : db.reportes.length + 1,
        id_usuario_celador : celador,
        fecha_hora         : document.getElementById('rep_fecha_hora').value
                             || new Date().toLocaleString('es-CO'),
        asunto,
        cuerpo,
        estado             : document.getElementById('rep_estado').value,
        id_entrada_salida  : document.getElementById('rep_id_entrada_salida').value || null
    });

    /* — Limpiar formulario — */
    ['rep_asunto', 'rep_cuerpo', 'rep_id_usuario_celador',
     'rep_id_entrada_salida', 'rep_fecha_hora']
        .forEach(id => document.getElementById(id).value = '');
    document.getElementById('rep_estado').value = '';

    mostrarAlerta('¡Reporte guardado!');
    renderTabla('reportes');
}


/* GUARDAR RESPUESTA */
function guardarRespuesta() {
    /* — Leer campos — */
    const id_pqrs = document.getElementById('res_id_pqrs').value;
    const admin   = document.getElementById('res_id_usuario_admin').value;
    const asunto  = document.getElementById('res_asunto').value.trim();
    const cuerpo  = document.getElementById('res_cuerpo').value.trim();

    /* — Validación básica — */
    if (!id_pqrs || !admin || !asunto || !cuerpo) {
        alert('Todos los campos marcados con * son obligatorios.');
        return;
    }

    /* — Construir objeto — */
    db.respuestas.push({
        id                       : db.respuestas.length + 1,
        id_pqrs,
        id_usuario_administrador : admin,
        asunto,
        cuerpo
    });

    /* — Limpiar formulario — */
    ['res_id_pqrs', 'res_asunto', 'res_cuerpo', 'res_id_usuario_admin']
        .forEach(id => document.getElementById(id).value = '');

    mostrarAlerta('¡Respuesta registrada!');
    renderTabla('respuestas');
}


/* TABLA DE REGISTROS*/
function renderTabla(tipo) {
    const seccion  = document.getElementById('seccion-tabla');
    const titulo   = document.getElementById('tabla-titulo');
    const cabecera = document.getElementById('tablaCabecera');
    const cuerpo   = document.getElementById('tablaCuerpo');

    /* — Configuración por tipo de tabla — */
    const configs = {
        pqrs: {
            titulo : 'PQRS registradas',
            cols   : ['ID', 'ID Usuario', 'Asunto', 'Estado', 'Fecha/Hora'],
            row    : r => `<td>${r.id}</td>
                           <td>${r.id_usuario}</td>
                           <td>${r.asunto}</td>
                           <td>${estadoBadge(r.estado)}</td>
                           <td>${r.fecha_hora}</td>`
        },
        reportes: {
            titulo : 'Reportes registrados',
            cols   : ['ID', 'Celador', 'Fecha/Hora', 'Asunto', 'Estado'],
            row    : r => `<td>${r.id}</td>
                           <td>${r.id_usuario_celador}</td>
                           <td>${r.fecha_hora}</td>
                           <td>${r.asunto}</td>
                           <td>${estadoBadge(r.estado)}</td>`
        },
        respuestas: {
            titulo : 'Respuestas registradas',
            cols   : ['ID', 'ID PQRS', 'Administrador', 'Asunto', 'Cuerpo'],
            row    : r => `<td>${r.id}</td>
                           <td>${r.id_pqrs}</td>
                           <td>${r.id_usuario_administrador}</td>
                           <td>${r.asunto}</td>
                           <td>${r.cuerpo.substring(0, 60)}…</td>`
        }
    };

    const cfg = configs[tipo];

    titulo.textContent   = cfg.titulo;
    cabecera.innerHTML   = '<tr>' + cfg.cols.map(c => `<th>${c}</th>`).join('') + '</tr>';
    cuerpo.innerHTML     = db[tipo].map(r => `<tr>${cfg.row(r)}</tr>`).join('');

    /* — Mostrar y hacer scroll — */
    seccion.style.display = 'block';
    seccion.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
