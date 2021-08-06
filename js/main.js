import { World } from './world.js';

const canvas = document.getElementById('canvas');

const engine = new BABYLON.Engine(canvas);
const world = new World(canvas, engine);

engine.runRenderLoop(() => {
    world.update();
});

window.addEventListener('resize', () => {
    engine.resize();
});