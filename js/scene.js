class Scene {
  constructor(engine) {
    const scene = Scene.createScene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0));

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));

    const box = BABYLON.MeshBuilder.CreateBox("box", {});


    return scene;
  }

  static createScene(engine) {
    return new BABYLON.Scene(engine);
  }
}

export { Scene };