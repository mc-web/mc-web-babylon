import { Person } from "./Person.js";
/**
 * 控制所有的东西
 */
class World {
    constructor(canvas, engine) {
        const scene = World.createScene(engine);
        const camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 0, -5), scene);
        camera.setTarget(BABYLON.Vector3.Zero());
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

        this.canvas = canvas;
        this.scene = scene;
        this.camera = camera;
        this.light = light;

        const box = BABYLON.MeshBuilder.CreateBox("box", {});
        this.addPerson();
    }

    addPerson(options) {
        this.person = new Person(this.canvas, this.camera, options);
    }

    update() {
        this.person.update();
        this.scene.render();
    }

    static createScene(engine) {
        return new BABYLON.Scene(engine);
    }
}

export { World };