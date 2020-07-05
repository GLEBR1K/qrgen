import i18n from '../localization';
import themeHelper from '../helpers/theme';

const cssOpen = 'flex';
const cssClosed = 'none';
const settingsModal = document.getElementById('settings-modal');
const settingsTheme = document.getElementById('settings-theme');
const settingsLanguage = document.getElementById('settings-language');
const settingsSave = document.getElementById('settings-save');
const settingsCancel = document.getElementById('settings-cancel');

const addEventListeners = () => {
  settingsSave.addEventListener('click', () => {
    settingsModal.save();
  });

  settingsCancel.addEventListener('click', () => {
    settingsModal.close();
  });
};

settingsModal.open = () => {
  settingsModal.style.display = cssOpen;
  settingsModal.load();
};

settingsModal.close = () => {
  settingsModal.style.display = cssClosed;
};

settingsModal.load = () => {
  const theme = themeHelper.getCurrentTheme();
  const language = i18n.getLanguage(true);

  settingsTheme.value = theme;
  settingsLanguage.value = language;
};

settingsModal.save = () => {
  const theme = settingsTheme.value;
  const language = settingsLanguage.value;

  themeHelper.setTheme(theme);
  i18n.setLanguage(language);

  settingsModal.close();
};

settingsModal.init = () => {
  addEventListeners();
};

export default settingsModal;
