<template>
  <button
    class="button clear"
    :title="$t('save')"
    @click="saveImage"
  >
    <i class="fas fa-arrow-alt-circle-down"></i>
    <span class="hide-xs">{{$t('save')}}</span>
  </button>
</template>

<script>
import download from 'downloadjs';
import fileHelper from '../../utils/file';

export default {
  name: 'SaveButton',
  props: {
    filename: String,
    uri: String,
  },
  methods: {
    saveImage() {
      const filename = fileHelper.getQrCodeFilename(this.filename);
      download(this.uri, filename, 'image/png');
    },
  },
};
</script>
