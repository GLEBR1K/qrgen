import historyModal from './historyModal';

const history = document.getElementById('history');

const addEventListeners = () => {
  history.addEventListener('click', () => {
    historyModal.open();
  });
};

history.init = (content, generateQrCode) => {
  addEventListeners();
  historyModal.init(content, generateQrCode);
};

export default history;
