import qr from '../qr';
import canvas from './canvas';
import content from './content';
import generate from './generate';
import save from './save';
import settings from './settings';
import themeHelper from '../helpers/theme';

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
  themeHelper.setTheme();

  canvas.init(generateQrCode);
  content.init();
  generate.init(generateQrCode);
  settings.init();
};

export default {
  elements,
  init,
  generateQrCode,
};
