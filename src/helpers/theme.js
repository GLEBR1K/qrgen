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
      return themes.dark;
    }
    return themes.light;
  },

  setTheme: (theme) => {
    if (theme) {
      localStorage.setItem(localStorageKey, theme);
    }
    helper.refreshTheme();
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
