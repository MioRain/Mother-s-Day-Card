function init() {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.set(10, 10, 100)
  scene.add(camera)

  const axes = new THREE.AxesHelper(20)
  scene.add(axes)

  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0xffffff, 0.1);
  renderer.render(scene, camera)

  document.body.append(renderer.domElement)
}

init()