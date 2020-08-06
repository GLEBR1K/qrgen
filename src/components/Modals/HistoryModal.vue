<template>
  <div class="is-center modal">
    <div class="card">
      <header>
        <h4 data-i18n="history">{{$t('history')}}</h4>
      </header>

      <div class="row">
        <div class="col placeholder">
          <div
            v-for="h in history"
            :key="h">
            <button
              class="button outline secondary"
              @click="restore(h)">
              {{h}}
            </button>
          </div>
        </div>
      </div>

      <div class="row">
        <footer class="col">
          <button
            class="button primary"
            :title="$t('clear')"
            @click="clear">
            {{$t('clear')}}
          </button>
          <button
            class="button clear"
            :title="$t('back')"
            @click="close">
            {{$t('back')}}
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import historyHelper from '../../utils/history';

export default {
  name: 'HistoryModal',
  data() {
    return {
      history: [],
    };
  },
  mounted() {
    this.open();
  },
  methods: {
    restore(text) {
      this.$emit('restore', text);
      this.close();
    },
    clear() {
      historyHelper.clearHistory();
      this.close();
    },
    open() {
      window.history.pushState('forward', null, '');
      window.addEventListener('popstate', () => {
        this.close(true);
      });

      this.history = historyHelper.getHistory();
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

<style lang="scss" scoped>
.placeholder {
  .card {
    max-width: 700px;
  }

  div:not(:last-child) {
    border-bottom: dashed 1px var(--color-darkGrey);
  }

  button {
    margin: 5px;
    padding: 0.5em;
    border: none;
    width: 100%;
    text-align: left;
    word-wrap: anywhere;
  }
}
</style>
