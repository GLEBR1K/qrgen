if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark');
}

var canvas = document.getElementById('canvas');
var content = document.getElementById('content');
var generate = document.getElementById('generate');
var save = document.getElementById('save');

generate.addEventListener('click', function () {
  var text = content.value;

  if (text) {
    generateQrCode(text);
  }
});

function generateQrCode(text) {
  var options = {
    margin: 3,
    width: 200
  };

  QRCode.toCanvas(canvas, text, options, function (error) {
    if (error) {
      console.error(error);
      return;
    }

    save.setAttribute('download', 'qrgen.png');
    save.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
  });
}

generateQrCode('qrgen');
