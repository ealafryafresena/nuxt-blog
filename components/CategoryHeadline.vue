<template>
  <h2 class="category-headline display-1 mb-8">
    <slot></slot>
  </h2>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.category-headline {
  &:after {
    content: '';
    display: block;
    height: 8px;
    width: 100%;
    background: rgb(26, 35, 126);
    background: linear-gradient(
      90deg,
      rgba(26, 35, 126, 1) 0%,
      rgba(232, 234, 246, 1) 100%
    );
    margin: 15px 0;
  }
}
</style>
