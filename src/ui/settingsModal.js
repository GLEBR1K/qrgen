import i18n from '../localization';
import themeHelper from '../helpers/theme';

const cssClassOpen = 'open';
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

  window.addEventListener('popstate', () => {
    settingsModal.close(true);
  });
};

settingsModal.open = () => {
  window.history.pushState('forward', null, '');
  settingsModal.classList.add(cssClassOpen);

  settingsModal.load();
};

settingsModal.close = (popstate) => {
  if (!popstate) {
    window.history.back();
  }
  settingsModal.classList.remove(cssClassOpen);
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

  themeHelper.setTheme(theme, true);
  i18n.setLanguage(language);

  settingsModal.close();
};

settingsModal.init = () => {
  addEventListeners();
};

export default settingsModal;
