<template>
  <h2 class="heading-title mb-8">
    <slot></slot>
  </h2>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.heading-title {
  &:after {
    content: '';
    display: block;
    height: 6px;
    width: 100%;
    background: linear-gradient(
      90deg,
      rgba(60, 60, 60, 1) 0%,
      rgba(241, 241, 241, 1) 100%
    );
    margin: 15px 0;
  }
}
</style>
