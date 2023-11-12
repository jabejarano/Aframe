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