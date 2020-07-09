const themeMediaElement = '(prefers-color-scheme: dark)';
const localStorageKey = 'theme';
const themes = {
  light: 'light',
  dark: 'dark',
};

const helper = {
  getCurrentTheme: () => {
    const savedTheme = localStorage.getItem(localStorageKey);
    if (savedTheme) { return savedTheme; }

    if (window.matchMedia && window.matchMedia(themeMediaElement).matches) {
      helper.setTheme(themes.dark);
      return themes.dark;
    }

    helper.setTheme(themes.light);
    return themes.light;
  },

  setTheme: (theme, refresh) => {
    if (theme) {
      localStorage.setItem(localStorageKey, theme);
    }

    if (refresh) {
      helper.refreshTheme();
    }
  },

  refreshTheme: () => {
    const theme = helper.getCurrentTheme();
    if (theme === themes.dark) {
      document.body.classList.add(themes.dark);
    } else {
      document.body.classList.remove(themes.dark);
    }
  },
};

export default helper;
