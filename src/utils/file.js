const invalidCharactersRegex = /[/\\*:?"<>| ]/gi;
const invalidCharacterReplacement = '_';

const filenamePrefix = 'qrgen';
const extension = '.png';
const maxLength = 255 - filenamePrefix.length - extension.length;

const helper = {
  normalizeFilename: (filename) => filename
    .substring(0, maxLength)
    .replace(invalidCharactersRegex, invalidCharacterReplacement)
    .toLowerCase()
    .concat(extension),

  getQrCodeFilename: (text) => {
    const t = text || filenamePrefix;

    return helper
      .normalizeFilename(t === filenamePrefix
        ? t
        : `${filenamePrefix}${invalidCharacterReplacement}${t}`);
  },
};

export default helper;
