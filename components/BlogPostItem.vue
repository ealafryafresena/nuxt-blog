<template>
  <div class="blog-post-item mb-6">
    <div class="blog-post-item-container">
      <div class="blog-post-item-img">
        <img :src="post.image" />
      </div>
      <div class="blog-post-item-content">
        <div class="blog-post-item-text">
          <p class="blog-post-item-published caption mb-1">
            {{ post.published }}
          </p>
          <h2 class="headline mb-2">
            {{ post.title }}
          </h2>
          <p class="blog-post-item-teaser body-1">
            {{ post.teaser }}
          </p>
        </div>
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
.blog-post-item {
  width: 392px;
  height: 540px;

  @media (max-width: 800px) {
    width: 364px;
  }

  &-img {
    width: 100%;
    height: 240px;
    background-color: $primaryBase;

    img {
      object-fit: cover;
      width: 100%;
      height: 240px;
    }
  }

  &-published {
    color: $primaryBase;
  }

  &-content {
    width: 100%;
    height: 300px;
    padding: 15px;
    border-left: $primaryLight5 solid 3px;
    border-right: $primaryLight5 solid 3px;
    border-bottom: $primaryLight5 solid 3px;
  }

  &-text {
    height: 170px;
  }

  &-teaser {
    --lh: 2rem;
    line-height: var(--lh);
    --max-lines: 5;
    max-height: calc(var(--lh) * var(--max-lines));
    overflow: hidden;
  }
}
</style>
