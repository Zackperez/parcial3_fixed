import {modelo} from './modelo.js'
import {vista} from './vista.js'


const controlador = {
    init: function() {
      modelo.agregarDato()
        .then(() => vista.render(modelo.datos));
      this.setupEventListeners();
    },
  
    setupEventListeners: function() {
    const botonEnviar = document.getElementById('botonEnviar');
      botonEnviar.addEventListener('click', () => {
        const nuevoDato = {
            nombre: document.getElementById('nombre').value,
            apellido: document.getElementById('apellido').value,
            correo: document.getElementById('correo').value,
            titulo: document.getElementById('titulo').value,
            descripcion: document.getElementById('descripcion').value,
          };
        modelo.agregarDato(nuevoDato)
          .then(() => vista.render(modelo.datos));
      });
    }
  };
  
  controlador.init();