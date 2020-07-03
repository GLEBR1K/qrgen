import content from './content';

const generate = document.getElementById('generate');

const addEventListeners = (generateQrCode) => {
  generate.addEventListener('click', () => {
    const text = content.value;
    if (text) {
      generateQrCode(text);
    }
  });
};

generate.init = (generateQrCode) => {
  addEventListeners(generateQrCode);
};

export default generate;
