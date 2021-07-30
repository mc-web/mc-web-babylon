class Person {
    constructor(canvas, camera, options) {

        this.pointer_locked = false;
        document.addEventListener("pointerlockchange", (e) => {
            this.pointer_locked = !this.pointer_locked;
        });
        canvas.addEventListener("click", (e) => {
            if (!this.pointer_locked) {
                if (canvas.requestPointerLock) {
                    canvas.requestPointerLock();
                } else if (canvas.webkitRequestPointerLock) {
                    canvas.webkitRequestPointerLock();
                } else if (canvas.mozRequestPointerLock) {
                    canvas.mozRequestPointerLock();
                } else {
                    console.warn("Pointer Lock is not supported.");
                }
            }
        });
    }
}

export { Person };