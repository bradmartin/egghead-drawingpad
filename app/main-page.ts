import { DrawingPad } from 'nativescript-drawingpad';
import { topmost } from 'ui/frame';
import { Image } from 'ui/image';

export function erase() {
    let dpad = topmost().getViewById('myDrawing') as DrawingPad;
    dpad.clearDrawing();
}

export function getDrawing() {
    let dpad = topmost().getViewById('myDrawing') as DrawingPad;
    let myImg = topmost().getViewById('drawingImage') as Image;
    dpad.getDrawing().then((result) => {
        console.log(result);
        myImg.src = result;
    })
}

