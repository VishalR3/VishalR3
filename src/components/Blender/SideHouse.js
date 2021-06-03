import { useEffect, useRef } from "react";
import { Container, makeStyles } from "@material-ui/core";
// import * as dat from "dat.gui";

const SideHouse = ({ THREE, OrbitControls, GLTFLoader }) => {
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
      sizes.width = containerRef.current?.getBoundingClientRect().width;

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

    gltfLoader.load("/models/sideHouseBaked.glb", (gltf) => {
      gltf.scene.position.x = -5;
      gltf.scene.position.y = -3;
      gltf.scene.rotation.y -= Math.PI / 4;

      gltf.scene.traverse((child) => {
        if (
          child instanceof THREE.Mesh &&
          child.material instanceof THREE.MeshStandardMaterial
        ) {
          if (child.name === "Gate2" || child.name === "Gate1") {
            child.material.transparent = true;
            child.material.color = new THREE.Color("#000000");
          }
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
    directionalLight.position.set(11, 12, 4);
    directionalLight.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(directionalLight);

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
    camera.position.x = 6;
    camera.position.y = 3;
    camera.position.z = 16;
    scene.add(camera);
    //Controls
    const controls = new OrbitControls(camera, canvasRef.current);
    controls.enableDamping = true;
    controls.maxDistance = 25;
    controls.minDistance = 5;
    controls.maxPolarAngle = Math.PI / 2;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.75;

    //Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;

    //AnimationFrame
    const tick = () => {
      //Controls
      controls.update();

      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };
    tick();
  }, [
    GLTFLoader,
    OrbitControls,
    THREE.ACESFilmicToneMapping,
    THREE.AmbientLight,
    THREE.Color,
    THREE.DirectionalLight,
    THREE.Mesh,
    THREE.MeshStandardMaterial,
    THREE.PCFSoftShadowMap,
    THREE.PerspectiveCamera,
    THREE.Scene,
    THREE.Vector3,
    THREE.WebGLRenderer,
    THREE.sRGBEncoding,
    THREE.scene,
  ]);
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

export default SideHouse;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    paddingBlock: "2rem",
    "& canvas": {
      backgroundColor: theme.palette.primary.primary70,
    },
  },
}));
