import qr from '../qr';
import canvas from './canvas';
import content from './content';
import generate from './generate';
import history from './history';
import open from './open';
import save from './save';
import settings from './settings';
import historyHelper from '../helpers/history';
import themeHelper from '../helpers/theme';

const ui = {
  elements: {
    canvas,
    content,
    generate,
    history,
    open,
    save,
  },

  init: () => {
    themeHelper.refreshTheme();

    canvas.init(ui.generateQrCode);
    content.init();
    generate.init(ui.generateQrCode);
    history.init(ui.elements.content, ui.generateQrCode);
    settings.init();
  },

  generateQrCode: (text, bypassHistory) => {
    qr.generate(text, (url) => {
      canvas.setSrc(url);

      open.setContentToOpen(url);
      save.setContentToDownload(text, url);

      if (!bypassHistory) {
        historyHelper.pushToHistory(text);
      }
    });
  },
};

export default ui;
