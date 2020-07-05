import settingsModal from './settingsModal';

const settings = document.getElementById('settings');

const addEventListeners = () => {
  settings.addEventListener('click', () => {
    settingsModal.open();
  });
};

settings.init = () => {
  addEventListeners();
  settingsModal.init();
};

export default settings;
