<template>
  <div class="blog-post-latest">
    <div class="blog-post-latest-container">
      <div class="blog-post-latest-img">
        <img :src="post.image" />
      </div>
      <div class="blog-post-latest-content">
        <p class="blog-post-latest-published caption mb-2">
          {{ post.published }}
        </p>
        <h3 class="mb-3">
          {{ post.title }}
        </h3>
        <p class="blog-post-latest-subline">
          {{ post.subline }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-post-latest {
  width: 100%;
  height: 340px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0px 0px 4px 2px #f0f0f0;

  @media (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    height: 660px;
  }

  &-published {
    color: $primary;
  }

  &-container {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }
  }

  &-img {
    width: 44%;
    height: 340px;
    background-color: $primaryDark4;

    @media (max-width: 600px) {
      height: 240px;
      width: 100%;
    }

    img {
      object-fit: cover;
      width: 100%;
      height: 340px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;

      @media (max-width: 600px) {
        height: 240px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        border-bottom-left-radius: 0;
      }
    }
  }

  &-content {
    width: 56%;
    height: 340px;
    padding: 25px;

    @media (max-width: 600px) {
      width: 100%;
      height: 420px;
    }
  }

  &-subline {
    color: rgba(0, 0, 0, 0.6);
    --lh: 1.4rem;
    line-height: var(--lh);
    --max-lines: 4;
    max-height: calc(var(--lh) * var(--max-lines));
    overflow: hidden;
    font-size: 20px;
  }
}
</style>
