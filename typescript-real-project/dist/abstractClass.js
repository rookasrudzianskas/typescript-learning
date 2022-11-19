"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // some complex calculations
        return 9;
    }
}
class Instagram extends TakePhoto {
    // Abstract class can have concrete methods
    // It cannot create methods by itself
    // But it can have concrete methods
    // and it can have abstract methods
    // and other classes can inherit from it
    // and create the methods from it
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
// I can create object form the class which extends it
const rr = new Instagram("test", "test", 3);
rr.getReelTime();
