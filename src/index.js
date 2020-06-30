const QRCode = require('qrcode');

import('chota');
import('./index.css');

const canvas = document.getElementById('canvas');
const content = document.getElementById('content');
const generate = document.getElementById('generate');
const save = document.getElementById('save');

function generateQrCode(text) {
  const options = {
    margin: 3,
    width: 200,
  };

  QRCode.toCanvas(canvas, text, options, (error) => {
    if (error) {
      console.error(error);
      return;
    }

    save.setAttribute('download', 'qrgen.png');
    save.setAttribute('href', canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream'));
  });
}

function initContent() {
  const url = new URL(window.location.href);
  const t = url.searchParams.get('t');

  if (t) {
    content.value = t;
    generateQrCode(t);
  } else {
    generateQrCode('qrgen');
  }
}

generate.addEventListener('click', () => {
  const text = content.value;

  if (text) {
    generateQrCode(text);
  }
});

initContent();
