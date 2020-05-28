<template>
  <div>
    <div
      class="header-hero bg-secondary text-light d-flex justify-content-center align-items-center text-center"
    >
      <img :src="heroImage" />
      <div class="header-hero-overlay">
        <h1 class="display-2">
          <slot></slot>
        </h1>
        <figcaption class="header-hero-caption">
          {{ heroCaption }}
        </figcaption>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heroImage: {
      type: String,
      required: true
    },
    heroCaption: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.header-hero {
  width: 100%;
  height: 50vh;
  position: relative;
  margin-top: 64px;

  @media (max-width: 800px) {
    margin-top: 56px;
  }

  img {
    object-fit: cover;
    width: 100%;
    display: block;
    height: 50vh;
  }

  &-overlay {
    position: absolute;
    margin: 0;
    top: 0;
    left: 0;
    z-index: 1;
    text-align: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  h1 {
    position: absolute;
    margin: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: white;
    text-align: center;
    line-height: 1;
    width: 100%;
  }

  &-caption {
    position: absolute;
    z-index: 3;
    bottom: 0;
    right: 20px;
    color: $greyLight2;
    font-size: 10px;
  }
}
</style>
