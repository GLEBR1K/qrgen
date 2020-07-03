import QRCode from 'qrcode';
import i18n from './localization';

import 'chota';
import './index.css';

const canvas = document.getElementById('canvas');
const content = document.getElementById('content');
const generate = document.getElementById('generate');
const save = document.getElementById('save');

function getFilename(text) {
  const filename = text || 'qrgen';
  return filename.substring(0, 251)
    .replace(/[^a-z0-9]/gi, '_')
    .toLowerCase()
    .concat('.png');
}

function generateQrCode(text) {
  const options = {
    margin: 3,
    width: 256,
  };

  QRCode.toDataURL(text, options, (error, url) => {
    if (error) {
      console.error(error);
      return;
    }

    if (url) {
      canvas.src = url;

      save.setAttribute('download', getFilename(text));
      save.setAttribute('href', url);
    }
  });
}

function initContent() {
  const url = new URL(window.location.href);
  const t = url.searchParams.get('t') || '';

  content.value = t;

  generateQrCode(t || 'qrgen');
}

generate.addEventListener('click', () => {
  const text = content.value;

  if (text) {
    generateQrCode(text);
  }
});

i18n.init();
initContent();
