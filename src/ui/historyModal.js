import historyHelper from '../helpers/history';

const cssClassOpen = 'open';
const historyModal = document.getElementById('history-modal');
const historyPlaceholder = document.getElementById('history-placeholder');
const historyBack = document.getElementById('history-back');
const historyClear = document.getElementById('history-clear');

const ui = {};

const addEventListeners = () => {
  historyBack.addEventListener('click', () => {
    historyModal.close();
  });

  historyClear.addEventListener('click', () => {
    historyHelper.clearHistory();
    historyModal.close();
  });

  window.addEventListener('popstate', () => {
    historyModal.close();
  });
};

function appendHistoryRecord(entry) {
  const div = document.createElement('div');
  const btn = document.createElement('button');

  btn.innerText = entry;
  btn.classList.add('button', 'outline', 'secondary');

  btn.addEventListener('click', () => {
    ui.content.setValue(entry);
    ui.generateQrCode(entry);
    historyModal.close();
  });

  div.appendChild(btn);
  historyPlaceholder.appendChild(div);
}

historyModal.open = () => {
  window.history.pushState('forward', null, '');
  historyModal.classList.add(cssClassOpen);

  historyModal.load();
};

historyModal.close = () => {
  historyModal.classList.remove(cssClassOpen);
};

historyModal.load = () => {
  const history = historyHelper.getHistory();
  historyPlaceholder.innerHTML = '';

  history.forEach((entry) => {
    appendHistoryRecord(entry);
  });
};

historyModal.init = (content, generateQrCode) => {
  addEventListeners();
  ui.content = content;
  ui.generateQrCode = generateQrCode;
};

export default historyModal;
