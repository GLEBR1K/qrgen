import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import titleHelper from '../utils/title';
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
const appSubtitleKey = 'qrCodeGenerator';

const i18n = {
  $: i18next,

  init: () => {
    i18next
      .use(LanguageDetector)
      .init(options, (e, t) => {
        if (e) return;
        titleHelper.setSubtitle(t(appSubtitleKey));
      });
  },

  getLanguage: (fallback) => {
    const lang = i18next.language.substr(0, 2);
    if (!fallback) { return lang; }
    return lang in resources ? lang : defaultLanguage;
  },

  setLanguage: (value) => {
    i18next
      .changeLanguage(value)
      .then((t) => {
        titleHelper.setSubtitle(t(appSubtitleKey));
      });
  },
};

export default i18n;
