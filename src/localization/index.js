import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translator from './translator';
import { en, ru } from './locales';

const resources = {
  en: { translation: en },
  ru: { translation: ru },
};

const options = {
  fallbackLng: 'en',
  resources,
};

const i18n = {
  init: () => {
    i18next
      .use(LanguageDetector)
      .init(options, translator);
  },
};

export default i18n;