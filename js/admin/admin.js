import config from '../supabase/keys.js';

document.addEventListener('DOMContentLoaded', function () {

    const ticketsGrilla = document.getElementById('ticketsGrilla');

    axios.get('https://mmphzayxvvhdtrtcvjsq.supabase.co/rest/v1/tickets?select=*', config)
        .then(function (response) {
            response.data.forEach(datos => {
                const ticket = document.createElement('div');
                ticket.classList.add('ticket')

                ticket.innerHTML = `
                    <div class="ticket-titulo">
                        <h2 class="ticket__titulo">${datos.titulo}</h2>
                    </div>
                    <div class="ticket-hora">
                        <p class="ticket__hora">${datos.created_at}</p>
                    </div>
                    <div class="ticket-descripcion">
                        <p class="ticket__descripcion">${datos.descripcion}</p>
                    </div>
                    <div class="ticket-usuario">
                        <p class="ticket__usuario">${datos.nombre}</p>
                    </div>
                `;

                ticketsGrilla.appendChild(ticket);
            });
        })
        .catch(function (error) {
            console.log(error);
        });
})