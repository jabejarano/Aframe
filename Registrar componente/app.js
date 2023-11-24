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


  AFRAME.registerComponent('log', {
    schema: {
      event: {type: 'string', default: ''},
      message: {type: 'string', default: 'Hello, World!3'}
    },
  
    // Este es el lugar donde inicializamos nuestro componente cuando se adjunta.
    init: function () {
      // Aquí estamos creando algo como un "recordatorio" que podemos usar más adelante.
      // En lugar de recordar la palabra `this` dentro de la función, la guardamos en una variable llamada `self`.
      var self = this;
  
      // En este paso, creamos una función especial que solo conocemos nosotros.
      // Guardamos esta función en `this.eventHandlerFn` para que podamos referenciarla más adelante.
      this.eventHandlerFn = function () {
        // Cuando ocurra algo (como un evento), hacemos algo específico.
        // En este caso, simplemente mostramos un mensaje en la consola que viene de `self.data.message`.
        console.log(self.data.message);
      };
    },
  
    // Este método se llama cada vez que algo en nuestro componente cambia.
    update: function () {
      // Almacenamos en variables locales algunos valores importantes que usaremos a continuación.
      var data = this.data;  // Contiene los valores actuales de las propiedades del componente.
      var el = this.el;      // Hace referencia a la entidad a la que se adjuntó este componente.
  
      // Verificamos si la propiedad `event` tiene un valor.
      if (data.event) {
        // Si `event` tiene un valor, añadimos un escuchador de eventos a la entidad.
        // Cuando ocurra ese evento, ejecutaremos la función `this.eventHandlerFn`.
        el.addEventListener(data.event, this.eventHandlerFn);
      } else {
        // Si `event` no está especificado, simplemente mostramos el mensaje en la consola.
        console.log(data.message);
      }
    }
  });