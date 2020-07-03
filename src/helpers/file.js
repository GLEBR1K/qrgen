const invalidFilenameRegex = /[^a-z0-9]/gi;
const invalidCharacterReplacement = '_';

const filenamePrefix = 'qrgen';
const extension = '.png';
const maxLength = 255 - filenamePrefix.length - extension.length;

const normalizeFilename = (filename) => filename
  .substring(0, maxLength)
  .replace(invalidFilenameRegex, invalidCharacterReplacement)
  .toLowerCase()
  .concat(extension);

const getQrCodeFilename = (text) => normalizeFilename(text === filenamePrefix
  ? text
  : `${filenamePrefix}${invalidCharacterReplacement}${text}`);

export default {
  getQrCodeFilename,
};
