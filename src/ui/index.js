import qr from '../qr';
import canvas from './canvas';
import content from './content';
import generate from './generate';
import save from './save';
import settings from './settings';
import themeHelper from '../helpers/theme';

const ui = {
  elements: {
    canvas,
    content,
    generate,
    save,
  },

  init: () => {
    themeHelper.setTheme();

    canvas.init(ui.generateQrCode);
    content.init();
    generate.init(ui.generateQrCode);
    settings.init();
  },

  generateQrCode: (text) => {
    qr.generate(text, (url) => {
      canvas.setSrc(url);
      save.setContentToDownload(text, url);
    });
  },
};

export default ui;
