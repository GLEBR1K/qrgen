import qr from '../qr';

import canvas from './canvas';
import content from './content';
import generate from './generate';
import save from './save';

const elements = {
  canvas,
  content,
  generate,
  save,
};

const generateQrCode = (text) => {
  qr.generate(text, (url) => {
    canvas.setSrc(url);
    save.setContentToDownload(text, url);
  });
};

const init = () => {
  canvas.init(generateQrCode);
  content.init();
  generate.init(generateQrCode);
};

export default {
  elements,
  init,
  generateQrCode,
};
