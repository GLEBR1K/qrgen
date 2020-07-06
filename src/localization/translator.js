import titleHelper from '../helpers/title';

const i18nAttribute = 'data-i18n';
const elementsSelector = `[${i18nAttribute}]`;
const valuesSeparator = '|';
const i18nConfigRegex = /(\[(?<type>\w+)\])?(?<key>\w+)/;
const appSubtitleKey = 'qrCodeGenerator';

const types = {
  default: '',
  html: 'html',
  text: 'text',
};

const getI18nConfig = (attribute) => {
  const { type, key } = attribute.match(i18nConfigRegex).groups;
  return { type: type || types.default, key };
};

const getAttributesToTranslate = (element) => {
  const value = element.getAttribute(i18nAttribute);
  return value.split(valuesSeparator);
};

const execute = (i18n) => {
  const elements = document.querySelectorAll(elementsSelector);

  elements.forEach((element) => {
    const el = element;
    const attributes = getAttributesToTranslate(element);

    attributes.forEach((attribute) => {
      const config = getI18nConfig(attribute);
      const translatedText = i18n(config.key);

      switch (config.type) {
        case types.default:
        case types.text: {
          el.innerText = translatedText;
          break;
        }
        case types.html: {
          el.innerHTML = translatedText;
          break;
        }
        default: {
          el.setAttribute(config.type, translatedText);
        }
      }
    });
  });
};

const translator = (error, i18n) => {
  if (error) { return; }
  execute(i18n);
  titleHelper.setSubtitle(i18n(appSubtitleKey));
};

export default translator;
