window.addEventListener('load', function () {
    // Obtén la entidad de la esfera
    var sphereEntity = document.querySelector('a-sphere');
  
    // Cambia dinámicamente la propiedad 'event' del componente 'log3' en la esfera
    sphereEntity.setAttribute('log3', 'event', 'anotherEvent');

    
  });

  AFRAME.registerComponent('hello-world', {
    init: function () {
        console.log('Hello, World!1');
    }
});
  
AFRAME.registerComponent('log3', {
  schema: {
    event: {type: 'string', default: ''},
    message: {type: 'string', default: 'Hello, World!3'}
  },

  // Este es el lugar donde inicializamos nuestro componente cuando se adjunta.
  init: function () {
    // En lugar de recordar la palabra `this` dentro de la función, la guardamos en una variable llamada `self`.
    var self = this;

    // Guardamos esta función en `this.eventHandlerFn` para que podamos referenciarla más adelante.
    this.eventHandlerFn = function () {
      // Cuando ocurra algo (como un evento), hacemos algo específico.
    
      console.log(self.data.message);
    };
    console.log('punto1');
  },

  // Este método se llama cada vez que algo en nuestro componente cambia.
  update: function () {
    // Almacenamos en variables locales algunos valores importantes que usaremos a continuación.
    var data = this.data;  // Contiene los valores actuales de las propiedades del componente.
    var el = this.el;      // Hace referencia a la entidad a la que se adjuntó este componente.
    console.log('punto2');
    // Verificamos si la propiedad `event` tiene un valor.
    if (data.event) {
      // Si `event` tiene un valor, añadimos un escuchador de eventos a la entidad.
      // Cuando ocurra ese evento, ejecutaremos la función `this.eventHandlerFn`.
      el.addEventListener(data.event, this.eventHandlerFn);
      console.log("punto3")
    } else {
      // Si `event` no está especificado, simplemente mostramos el mensaje en la consola.
      console.log(data.message);
      console.log("punto4")
    }
  }
});