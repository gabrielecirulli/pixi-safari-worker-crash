import { Application, DOMAdapter, Graphics, WebWorkerAdapter } from 'pixi.js';

console.log('YOU SHOULD NEVER SEE THIS MESSAGE TWICE.');

DOMAdapter.set(WebWorkerAdapter);

const app = new Application();

self.onmessage = (event) => {
  console.log('Message received from main thread', JSON.stringify(event.data));

  const canvas = event.data.canvas;

  // COMMENT OUT THIS CALL AND YOU WILL ONLY SEE THE MESSAGE ONCE
  if (canvas) initApp(canvas);
};

function initApp(canvas: OffscreenCanvas) {
  app.init({
    width: 400,
    height: 400,
    canvas,
  });

  const graphic = new Graphics().rect(0, 0, 100, 100).fill('red');
  graphic.pivot.set(50, 50);
  graphic.position.set(200, 200);
  app.stage.addChild(graphic);
}
