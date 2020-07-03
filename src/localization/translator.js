const i18nAttribute = 'data-i18n';
const elementsSelector = `[${i18nAttribute}]`;
const i18nConfigRegex = /(\[(?<type>\w+)\])?(?<key>\w+)/;

const types = {
  default: '',
  html: 'html',
  text: 'text',
};

const getI18nConfig = (element) => {
  const attribute = element.getAttribute(i18nAttribute);
  const { type, key } = attribute.match(i18nConfigRegex).groups;
  return { type: type || types.default, key };
};

const execute = (i18n) => {
  const elements = document.querySelectorAll(elementsSelector);

  elements.forEach((element) => {
    const el = element;
    const config = getI18nConfig(element);
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
};

const translator = (error, i18n) => {
  if (error) { return; }
  execute(i18n);
};

export default translator;
