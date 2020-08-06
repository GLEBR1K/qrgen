<template>
  <button
    class="button primary"
    :title="$t('generate')"
    @click="$emit('click')"
  >
    <i class="fas fa-qrcode"></i>
    <span>{{$t('generate')}}</span>
  </button>
</template>

<script>
export default {
  name: 'Generate',
};
</script>
