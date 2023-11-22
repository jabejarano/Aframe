// Registrar componente básico
AFRAME.registerComponent('foo', {
    schema: {
      bar: {type: 'number'},
      baz: {type: 'string'}
    }
})


AFRAME.registerComponent('hello-world', {
    init: function () {
        console.log('Hello, World!1');
    }
});

//Esto por si solo no hace nada habría que implementar sus métodos "init", "uodate"...
AFRAME.registerComponent('log1', {
    // schema define las propiedades del componente
    schema: {
      mensaje: { tipo: 'cadena', predeterminado: '¡Hola mundo!' }
    },
    // Otros métodos del componente...
  });

//Componente log con una propiedad message y su método init 
AFRAME.registerComponent('log2', {
    schema: {
      message: {type: 'string', default: 'Hello, World!'}
    },
  
    init: function () {
      console.log(this.data.message);
    }
  });


  AFRAME.registerComponent('log4', {
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