let scene, camera, renderer

function init() {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.set(0, 0, 50)
  camera.lookAt(scene.position)
  scene.add(camera)

  const axes = new THREE.AxesHelper(20)
  scene.add(axes)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0xffffff, 0.1);

  document.body.append(renderer.domElement)
}

function render() {
  renderer.render(scene, camera)
}

init()
render()