<template>
  <div>
    <button
      class="button clear"
      :title="$t('save')"
      @click="isModalOpen = true">
      <i class="fas fa-cog"></i>
    </button>

    <transition name="fade">
      <SettingsModal
        v-if="isModalOpen"
        @close="isModalOpen = false" />
    </transition>
  </div>
</template>

<script>
import SettingsModal from '../Modals/SettingsModal.vue';

export default {
  name: 'SettingsButton',
  components: {
    SettingsModal,
  },
  data() {
    return {
      isModalOpen: false,
    };
  },
};
</script>
