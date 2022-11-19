// abstract class TakePhoto {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//     ) {}
//
//     abstract getSepia(): void;
//     getReelTime(): number {
//         // some complex calculations
//         return 9;
//     }
// }
//
//
// class Instagram extends TakePhoto {
//     // Abstract class can have concrete methods
//     // It cannot create methods by itself
//     // But it can have concrete methods
//     // and it can have abstract methods
//     // and other classes can inherit from it
//     // and create the methods from it
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number
//         ) {
//         super(cameraMode, filter);
//     }
//
//     getSepia(): void {
//         console.log("Sepia");
//     }
// }
// // I can create object form the class which extends it
// const rr = new Instagram("test", "test", 3);
//
// rr.getReelTime();
