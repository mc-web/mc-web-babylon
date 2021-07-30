import { Person } from "./Person.js";
/**
 * 控制所有的东西
 */
class Scene {
    constructor(canvas, engine) {
        const scene = Scene.createScene(engine);
        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2, 3, BABYLON.Vector3.Zero());
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));

        this.canvas = canvas;
        this.scene = scene;
        this.camera = camera;
        this.light = light;

        const box = BABYLON.MeshBuilder.CreateBox("box", {});
        return scene;
    }

    addPerson(options) {
        this.person = new Person(this.canvas, this.camera, options);
    }

    render() {
        this.scene.render();
    }

    static createScene(engine) {
        return new BABYLON.Scene(engine);
    }
}

export { Scene };