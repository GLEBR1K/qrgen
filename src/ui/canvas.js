import urlHelper from '../helpers/url';

const canvas = document.getElementById('canvas');
const initialText = 'qrgen';

canvas.setSrc = (src) => {
  canvas.src = src;
};

canvas.init = (generateQrCode) => {
  const param = urlHelper.getInitialTextFromUrl();
  generateQrCode(param || initialText, true);
};

export default canvas;
