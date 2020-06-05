<template>
  <div class="blog-post-featured mb-6">
    <div class="blog-post-featured-container">
      <div class="blog-post-featured-img">
        <img :src="`../../${post.image}`" />
      </div>
      <div class="blog-post-featured-content">
        <p class="blog-post-featured-published caption mb-2">
          {{ post.published }}
        </p>
        <h5 class="mb-3">
          {{ post.title }}
        </h5>
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
.blog-post-featured {
  width: 252px;
  min-height: 300px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0px 0px 4px 2px #f0f0f0;

  @media (max-width: 800px) {
    width: 240px;
  }

  &-img {
    width: 100%;
    height: 120px;
    background-color: $primaryDark4;

    img {
      object-fit: cover;
      width: 100%;
      height: 120px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }

  &-published {
    color: $primary;
  }

  &-content {
    width: 100%;
    min-height: 180px;
    padding: 15px;
  }
}
</style>
