let tareas = [];

window.onload = function() {
    renderizarTareas();
};

function renderizarTareas() {
    document.getElementById('tareas_general').innerHTML = '';
    document.getElementById('tareas_completadas').innerHTML = '';
    document.getElementById('tareas_pendientes').innerHTML = '';

    tareas.forEach(tarea => {
        const tareaElemento = document.createElement('div');
        tareaElemento.innerHTML = `
            <input type="checkbox" ${tarea.completada ? 'checked' : ''} onchange="cambio(this, '${tarea.texto}')">${tarea.texto}<br>
        `;

        document.getElementById('tareas_general').appendChild(tareaElemento);

        if (tarea.completada) {
            const completadaElemento = document.createElement('p');
            completadaElemento.textContent = tarea.texto;
            document.getElementById('tareas_completadas').appendChild(completadaElemento);
        } else {
            const pendienteElemento = document.createElement('p');
            pendienteElemento.textContent = tarea.texto;
            document.getElementById('tareas_pendientes').appendChild(pendienteElemento);
        }
    });
}

function cambio(checkbox, texto) {
    const tarea = tareas.find(t => t.texto === texto);

    if (checkbox.checked) {
        tarea.completada = true;
    } else {
        tarea.completada = false;
    }

    renderizarTareas();
}

function agregar() {
    const textoTarea = document.getElementById('texto').value.trim();
    
    if (textoTarea === '') {
        alert('Por favor, ingresa una tarea.');
        return;
    }

    tareas.push({ texto: textoTarea, completada: false });

    document.getElementById('texto').value = '';

    renderizarTareas();
}
