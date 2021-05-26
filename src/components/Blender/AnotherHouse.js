import { useEffect, useRef } from "react";
import { Container, makeStyles } from "@material-ui/core";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
//three.js
import * as THREE from "three";
// import * as dat from "dat.gui";

const AnotherHouse = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    // const gui = new dat.GUI();

    const sizes = {
      width: containerRef.current.getBoundingClientRect().width,
      height: 400,
    };

    //handleResize
    window.addEventListener("resize", () => {
      sizes.width = containerRef.current.getBoundingClientRect().width;

      //Update Camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      //Update Renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    //Scene
    const scene = new THREE.Scene();

    /*
     * Object
     *
     */

    // GLTFLoader
    const gltfLoader = new GLTFLoader();

    gltfLoader.load("/models/anotherHouse.glb", (gltf) => {
      gltf.scene.position.x = -3;
      gltf.scene.position.y = 1;
      // gltf.scene.position.z = 4;
      gltf.scene.rotation.y -= (2 * Math.PI) / 5;
      gltf.scene.traverse((child) => {
        if (
          child instanceof THREE.Mesh &&
          child.material instanceof THREE.MeshStandardMaterial
        ) {
          child.castShadow = true;
          child.receiveShadow = true;
          child.material.transparent = true;
          if (child.material.name === "Glass") {
            child.material.transparent = true;
            child.material.transmission = 0.5;
            child.material.color = new THREE.Color("#addce7");
          }
        }
      });
      scene.add(gltf.scene);
    });

    /*
     *  Lights
     */

    //Directional Light

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(11, 12, 17);
    directionalLight.lookAt(new THREE.Vector3(0, 0, 0));
    directionalLight.shadow.camera.far = 30;
    directionalLight.shadow.camera.zoom = 0.5;
    directionalLight.shadow.mapSize.set(1024, 1024);
    directionalLight.shadow.normalBias = 0.08;
    scene.add(directionalLight);

    // Directional Light Helper
    // const dlHelper = new THREE.DirectionalLightHelper(directionalLight);
    // scene.add(dlHelper);

    // gui.add(directionalLight.position, "x").min(-50).max(50).step(0.001);
    // gui.add(directionalLight.position, "y").min(-50).max(50).step(0.001);
    // gui.add(directionalLight.position, "z").min(-50).max(50).step(0.001);

    // //DL Camera Helper
    // const dlCameraHelper = new THREE.CameraHelper(
    //   directionalLight.shadow.camera
    // );
    // scene.add(dlCameraHelper);

    // //Axes Helper
    // const axesHelper = new THREE.AxesHelper(20);
    // scene.add(axesHelper);

    //Ambient Light

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    //Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = 10.285;
    camera.position.y = 1.534;
    camera.position.z = 13.943;
    scene.add(camera);

    // gui.add(camera.position, "x").min(-50).max(50).step(0.001);
    // gui.add(camera.position, "y").min(-50).max(50).step(0.001);
    // gui.add(camera.position, "z").min(-50).max(50).step(0.001);

    //Controls
    const controls = new OrbitControls(camera, canvasRef.current);
    controls.enableDamping = true;

    //Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;

    //Shadows
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    directionalLight.castShadow = true;

    //AnimationFrame
    const tick = () => {
      //Controls
      controls.update();

      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };
    tick();
  }, []);
  return (
    <div className={classes.wrapper}>
      <Container>
        <div ref={containerRef}>
          <canvas ref={canvasRef}></canvas>
        </div>
      </Container>
    </div>
  );
};

export default AnotherHouse;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    paddingBlock: "2rem",
  },
}));
