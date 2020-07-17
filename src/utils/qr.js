import QRCode from 'qrcode';

const options = {
  margin: 3,
  width: 256,
};

export default {
  generate: (text, callback) => {
    const t = text;

    QRCode.toDataURL(t, options, (error, url) => {
      if (error || !url) { return; }
      callback(url);
    });
  },
};
