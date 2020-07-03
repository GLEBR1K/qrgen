import fileHelper from '../helpers/file';

const save = document.getElementById('save');

save.setContentToDownload = (text, url) => {
  const filename = fileHelper.getQrCodeFilename(text);
  save.setAttribute('download', filename);
  save.setAttribute('href', url);
};

export default save;
