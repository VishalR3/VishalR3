import { useEffect, useRef } from "react";
import { Container, makeStyles } from "@material-ui/core";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
//three.js
import * as THREE from "three";

const SideHouse = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const classes = useStyles();

  useEffect(() => {
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

    gltfLoader.load("/models/sideHouse2.glb", (gltf) => {
      gltf.scene.position.x = -5;
      gltf.scene.position.y = -3;
      gltf.scene.rotation.y -= Math.PI / 4;
      for (let i = 0; i < gltf.scene.children.length; i++) {
        if (gltf.scene.children[i].type === "Mesh") {
          gltf.scene.children[i].castShadow = true;
          gltf.scene.children[i].receiveShadow = true;
          gltf.scene.children[i].material.transparent = true;
          // console.log(gltf.scene.children[i]);

          if (
            gltf.scene.children[i].name === "Gate2" ||
            gltf.scene.children[i].name === "Gate1"
          ) {
            gltf.scene.children[i].material.color = new THREE.Color("#000000");
          }
        }
        if (gltf.scene.children[i].type === "Group") {
          let glassMaterial = gltf.scene.children[i].children.filter(
            (child) => child.material.name === "Glass"
          )[0].material;
          glassMaterial.color = new THREE.Color("#addce7");
        }
      }
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

    //Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;

    //Shadows
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

export default SideHouse;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    paddingBlock: "2rem",
  },
}));
