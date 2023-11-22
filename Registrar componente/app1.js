window.addEventListener('load', function () {
    // Obtén la entidad de la esfera
    var sphereEntity = document.querySelector('a-sphere');
  
    // Cambia dinámicamente la propiedad 'event' del componente 'log3' en la esfera
    sphereEntity.setAttribute('log3', 'event', 'anotherEvent');
  });
  
AFRAME.registerComponent('log3', {
  schema: {
    event: {type: 'string', default: ''},
    message: {type: 'string', default: 'Hello, World!3'}
  },

  init: function () {
      // Este es el lugar para la lógica de inicialización específica cuando el componente se adjunta.
      console.log('El componente log3 se ha adjuntado a la entidad.');
    },

  update: function () {
    var data = this.data;  // Almacena los valores de las propiedades del componente en la variable data para un fácil acceso.
    var el = this.el;  // Guarda una referencia a la entidad a la que se ha adjuntado el componente.

      //Verifica si la propiedad event tiene un valor
    if (data.event) {
      // añade un escuchador de eventos a la entidad.Esto registra el `message` solo cuando la entidad emite el `event`.
      el.addEventListener(data.event, function () {
        console.log(data.message);
      });
    } else {
      // `event` not specified, just log the message.
      console.log(data.message);
    }
  }
});