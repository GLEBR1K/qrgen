import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translator from './translator';
import { en, de, ru } from './locales';

const defaultLanguage = 'en';
const resources = {
  en: { translation: en },
  de: { translation: de },
  ru: { translation: ru },
};
const options = {
  fallbackLng: defaultLanguage,
  resources,
};

const i18n = {
  $: i18next,

  init: () => {
    i18next
      .use(LanguageDetector)
      .init(options, translator);
  },

  getLanguage: (fallback) => {
    const lang = i18next.language.substr(0, 2);
    if (!fallback) { return lang; }
    return lang in resources ? lang : defaultLanguage;
  },

  setLanguage: (value) => {
    i18next.changeLanguage(value, () => {
      i18n.init();
    });
  },
};

export default i18n;
