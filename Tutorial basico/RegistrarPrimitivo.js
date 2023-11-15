AFRAME.registerPrimitive('a-cone', {
    // Componentes predeterminados que se adjuntarán a la entidad.
    defaultComponents: {
        cone: {},
      rotation: {x: -1, y: 0, z: -10}
    },
  
    // Asignaciones de atributos HTML a propiedades de componentes (usando puntos como delimitadores).
    mappings: {
        radiusBottom: 'cone.radiusBottom',
        radiusTop: 'cone.radiusTop',
        height: 'cone.height',
        density: 'cone.density',
        color: 'cone.color',
        opacity: 'cone.opacity'
    }
  });
// Registrar componente básico
AFRAME.registerComponent('foo', {
  schema: {
    bar: {type: 'number'},
    baz: {type: 'string'}
  },

  init: function () {
    // Hacer algo cuando se adjunta el componente por primera vez.
  },

  update: function () {
    // Hacer algo cuando se actualicen los datos del componente.
  },

  remove: function () {
    // Hacer algo cuando el componente o su entidad esté desconectado.
  },

  tick: function (time, timeDelta) {
    // Haz algo en cada tick o fotograma de la escena.
  }

  });