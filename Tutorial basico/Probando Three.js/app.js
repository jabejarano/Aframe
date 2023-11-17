document.addEventListener("DOMContentLoaded", function () {

    // Accede a la escena de three.js
    var escena = document.querySelector('a-scene').object3D;

    // Acceder a la entidad <a-box> de three.js
    var entidad = document.querySelector('a-box').object3D;
  
    // Registrar un componente llamado 'foo'
    AFRAME.registerComponent('foo', {
        init: function () {
          var scene = this.el.sceneEl.object3D;  // THREE.Scene
          var boxEntity = this.el.object3D; 
        }
    });

    console.log(THREE);
  });
  