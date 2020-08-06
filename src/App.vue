<template>
  <div id="app" class="is-center">
    <div class="container">
      <div class="row is-center">
        <div class="col">

          <Canvas
            :src="imageData"
            @restoreHistory="restoreHistory" />

          <Content v-model="text" />

          <div class="row">
            <div class="col is-center">

              <GenerateButton @click="generateQrCode()" />
              <SaveButton
                :filename="filename"
                :uri="imageData" />
              <SettingsButton />

            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import GenerateButton from './components/Buttons/GenerateButton.vue';
import SaveButton from './components/Buttons/SaveButton.vue';
import Canvas from './components/Canvas.vue';
import Content from './components/Content.vue';
import SettingsButton from './components/Buttons/SettingsButton.vue';
import Footer from './components/Footer.vue';
import i18n from './localization';
import qrHelper from './utils/qr';
import historyHelper from './utils/history';
import urlHelper from './utils/url';

export default {
  name: 'App',
  components: {
    GenerateButton,
    SaveButton,
    SettingsButton,
    Canvas,
    Content,
    Footer,
  },
  data() {
    return {
      text: '',
      imageData: '',
      filename: '',
    };
  },
  methods: {
    generateQrCode(text, bypassHistory) {
      const t = text || this.text;

      qrHelper.generate(t, (url) => {
        this.filename = t;
        this.imageData = url;

        if (!bypassHistory) {
          historyHelper.pushToHistory(t);
        }
      });
    },
    restoreHistory(text) {
      this.text = text;
      this.generateQrCode(text);
    },
  },
  mounted() {
    const t = urlHelper.getInitialTextFromUrl();

    if (t) {
      this.text = t;
      this.generateQrCode(t);
    } else {
      this.generateQrCode('qrgen', true);
    }

    i18n.init();
  },
};
</script>

<style lang="scss">
@import '~chota/src/chota.css';

@import '~fontawesome/css/fontawesome.css';
@import '~fontawesome/css/brands.css';
@import '~fontawesome/css/solid.css';

html,
body,
#app {
  height: 100%;
}

body {
  --color-primary: #377ae2;

  &.dark {
    --bg-color: #232327;
    --bg-secondary-color: #131316;
    --font-color: #f5f5f5;
    --color-grey: #ccc;
    --color-darkGrey: #777;
  }
}

.container {
  padding-top: 10px;
}

.button {
  padding: 0.8em 1em;

  &.clear {
    padding: 0.8em;
  }
}

.modal {
  display: flex;
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);

  .card {
    min-width: 300px;
    margin: 20px;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
