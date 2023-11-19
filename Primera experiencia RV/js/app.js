window.addEventListener('load', initScene)

const ovnis = [
    {x: 0, y: 0, z: -30 },
    {x: 0, y: 0, z: 30 },
    {x: 30, y: 0, z: 0 },
    {x: -30, y: 0, z: 0 },
    {x: 20, y: 0, z: 20 },
    {x: 20, y: 0, z: -20 },
    {x: -20, y: 0, z: -20 },
    {x: -20, y: 0, z: 20 },
]

let ovni, score = 0

function initScene(){

    let orbits = document.querySelectorAll('.orbit')

    orbits.forEach(orbit=> {
        ovnis.forEach(pos =>{
            let ovni = document.createElement('a-entity')
            ovni.setAttribute('geometry', {primitive: 'sphere', radius: Math.random() * 3 + 0.5})
            ovni.setAttribute('material', {shader: 'flat', src: '#ovni'})
            ovni.setAttribute('class', 'ovni')
            ovni.object3D.position.set(pos.x, pos.y, pos.z)
            ovni.setAttribute('shootable', 'ovni')

            orbit.appendChild(ovni)
        })
    })
}
// Registrar componente
AFRAME.registerComponent('shootable', {
    init: function () {
        this.el.addEventListener('click', () => {
            this.el.parentNode.removeChild(this.el)
            document.querySelector('[text]').setAttribute('value', `${++score} meteoritos cazados`)
        })
    }
})