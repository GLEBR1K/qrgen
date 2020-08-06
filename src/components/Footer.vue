<template>
  <div class="footer">
    <a class="button clear" href="https://github.com/GLEBR1K/qrgen" target="_blank">
      <i class="fab fa-github"></i> GitHub
    </a>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  padding: 10px;
  width: 100%;
  text-align: center;

  .button.clear {
    color: var(--font-color);
  }

  @media(max-height: 650px) {
    & {
      display: none;
    }
  }
}
</style>
