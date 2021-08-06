class Person {
    constructor(canvas, camera, options) {
        this.pointer_locked = false;


        this.rotation_x = 0;
        this.rotation_y = 0;
        this.sensitive_x = 0.3;
        this.sensitive_y = 0.3;


        this.canvas = canvas;
        this.camera = camera;
        this.initListeners();
    }

    initListeners() {
        document.addEventListener('pointerlockchange', (e) => {
            this.pointer_locked = !this.pointer_locked;
        });

        this.canvas.addEventListener('click', (e) => {
            if (!this.pointer_locked) {
                if (this.canvas.requestPointerLock) {
                    this.canvas.requestPointerLock();
                } else if (this.canvas.webkitRequestPointerLock) {
                    this.canvas.webkitRequestPointerLock();
                } else if (this.canvas.mozRequestPointerLock) {
                    this.canvas.mozRequestPointerLock();
                } else {
                    console.warn('Pointer Lock is not supported.');
                }
            }
        });

        this.canvas.addEventListener('mousemove', (e) => {
            if (this.pointer_locked) {
                this.rotation_x += e.movementY / this.canvas.clientHeight * Math.PI * 2 * this.sensitive_y;
                this.rotation_y += e.movementX / this.canvas.clientWidth * Math.PI * 2 * this.sensitive_x;
            }
        });

        let enabled_keys = ['w', 's', 'a', 'd'];
        this.canvas.addEventListener('keydown', (e) => {
            if ()
            console.log(e);
        });

        this.canvas.addEventListener('keyup', (e) => {
            console.log(e);
        });
    }

    update() {
        this.camera.rotation.x = this.rotation_x;
        this.camera.rotation.y = this.rotation_y;
    }
}

export { Person };