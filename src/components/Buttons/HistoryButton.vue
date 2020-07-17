<template>
  <div>
    <button
      class="button clear"
      :title="$t('history')"
      @click="isModalOpen = true"
    >
      <i class="fas fa-history"></i>
    </button>

    <transition name="fade">
      <HistoryModal
        v-if="isModalOpen"
        @restore="$emit('restore', $event)"
        @close="isModalOpen = false" />
    </transition>
  </div>
</template>

<script>
import HistoryModal from '../Modals/HistoryModal.vue';

export default {
  name: 'HistoryButton',
  components: {
    HistoryModal,
  },
  data() {
    return {
      isModalOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
button {
  position: relative;
  top: -90px;
  right: -20px;
  color: var(--color-lightGrey) !important;
  padding: 5px !important;
}
</style>
