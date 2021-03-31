import { Scene } from "./scene.js";

const canvas = document.getElementById("canvas");
const engine = new BABYLON.Engine(canvas);

const scene = new Scene(engine);
engine.runRenderLoop(() => {
  scene.render();
});

window.addEventListener("resize", () => {
  engine.resize();
});