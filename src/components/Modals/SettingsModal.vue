<template>
  <div class="is-center modal">
    <div class="card">
      <header>
        <h4>{{$t('settings')}}</h4>
      </header>

      <div class="row">
        <form class="col">
          <label>{{$t('theme')}}</label>
          <p>
            <select v-model="theme">
              <option
                v-for="t in themes"
                :key="t.key"
                :value="t.key">
                {{$t(t.key)}}
              </option>
            </select>
          </p>

          <label>{{$t('language')}}</label>
          <div>
            <select v-model="language">
              <option
                v-for="l in languages"
                :key="l.key"
                :value="l.key">
                {{$t(l.value)}}
              </option>
            </select>
          </div>
        </form>
      </div>

      <div class="row">
        <footer class="col">
          <button
            class="button primary"
            :title="$t('apply')"
            @click="save"
          >
            {{$t('apply')}}
          </button>

          <a
            class="button clear"
            :title="$t('cancel')"
            @click="cancel">
            {{$t('cancel')}}
          </a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from '../../localization';
import themeHelper from '../../utils/theme';

export default {
  name: 'SettingsModal',
  data() {
    return {
      language: 'en',
      languages: [
        { key: 'de', value: 'german' },
        { key: 'en', value: 'english' },
        { key: 'ru', value: 'russian' },
      ],
      theme: 'light',
      themes: [
        { key: 'light', value: 'light' },
        { key: 'dark', value: 'dark' },
      ],
    };
  },
  mounted() {
    this.open();
  },
  methods: {
    save() {
      themeHelper.setTheme(this.theme, true);
      i18n.setLanguage(this.language);
      this.close();
    },
    cancel() {
      this.close();
    },
    open() {
      window.history.pushState('forward', null, '');
      window.addEventListener('popstate', () => {
        this.close(true);
      });

      this.theme = themeHelper.getCurrentTheme();
      this.language = i18n.getLanguage(true);
    },
    close(popstate) {
      if (!popstate) {
        window.history.back();
      }
      this.$emit('close');
    },
  },
};
</script>
