<template>
  <div class="row">
    <div class="col is-center">
      <a
        target="blank"
        :title="$t('openInNewTab')"
        :href="src">
        <img :src="src" />
      </a>
      <HistoryButton
        @restore="$emit('restoreHistory', $event)" />
    </div>
  </div>
</template>

<script>
import HistoryButton from './Buttons/HistoryButton.vue';

export default {
  name: 'Canvas',
  components: {
    HistoryButton,
  },
  props: {
    src: String,
  },
};
</script>

<style lang="scss" scoped>
img {
  background-color: white;
  border: 1px solid var(--color-lightGrey);
  border-radius: 4px;
  width: 200px;
  height: 200px;
}

a {
  position: relative;
  left: 14px;
}
</style>
