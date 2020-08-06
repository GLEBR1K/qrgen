<template>
  <div class="row">
    <div class="col is-center">
      <textarea
        :value="value"
        :title="$t('typeHere')"
        :placeholder="$t('typeHere')"
        @input="$emit('input', $event.target.value)">
      </textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: String,
  },
};
</script>

<style lang="scss" scoped>
textarea {
  max-width: 350px;
  resize: vertical;
}
</style>
