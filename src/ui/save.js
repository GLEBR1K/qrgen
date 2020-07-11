import download from 'downloadjs';
import fileHelper from '../helpers/file';

const save = document.getElementById('save');

const addEventListeners = () => {
  save.addEventListener('click', () => {
    download(save.url, save.filename, 'image/png');
  });
};

save.setContentToDownload = (text, url) => {
  const filename = fileHelper.getQrCodeFilename(text);
  save.filename = filename;
  save.url = url;
};

save.init = () => {
  addEventListeners();
};

export default save;
