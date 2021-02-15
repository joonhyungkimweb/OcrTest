
import { loadTessaract } from './ocr.js';
import { loadCamera } from './cam.js'

const container = document.querySelector(".container");
const parm = document.querySelector("#pa");

let cam;

const video = document.querySelector('video');
const canvas = window.canvas = document.querySelector('canvas');
canvas.width = 160;
canvas.height = 160;

const button = document.querySelector('button');

button.onclick =  async () => {
  
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

  const image = canvas.toDataURL();

  parm.innerHTML = await loadTessaract(image);


};

function handleSuccess(stream) {
  window.stream = stream; // make stream available to browser console
  video.srcObject = stream;
}

(
  async () => {
    const deviceEnum = await navigator.mediaDevices.enumerateDevices();
    cam = await loadCamera();
    handleSuccess(cam);


  }
)();



