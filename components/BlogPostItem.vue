<template>
  <div class="blog-post-item mb-6">
    <div class="blog-post-item-container">
      <div class="blog-post-item-img">
        <img :src="`../../${post.image}`" />
      </div>
      <div class="blog-post-item-content">
        <div class="d-flex justify-space-between align-center">
          <p class="blog-post-item-published caption my-0">
            {{ post.published }}
          </p>
          <nuxt-link
            class="blog-post-item-category"
            :to="`/posts/category/${post.category}`"
          >
            <v-chip class="ma-2" color="primary" small label>
              {{ post.category }}
            </v-chip>
          </nuxt-link>
        </div>
        <h4 class="mb-3">
          {{ post.title }}
        </h4>
        <p class="blog-post-item-subline subtitle-1">
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
.blog-post-item {
  width: 392px;
  min-height: 540px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0px 0px 4px 2px #f0f0f0;

  @media (max-width: 800px) {
    width: 364px;
  }

  &-img {
    width: 100%;
    height: 240px;
    background-color: $primaryDark4;

    img {
      object-fit: cover;
      width: 100%;
      height: 240px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }

  &-published {
    color: $primary;
  }

  &-category {
    &:hover {
      opacity: 0.7;
    }
    span {
      cursor: pointer;
    }
  }

  &-content {
    width: 100%;
    min-height: 300px;
    padding: 15px;
  }

  &-subline {
    color: rgba(0, 0, 0, 0.6);
    --lh: 1.4rem;
    line-height: var(--lh);
    --max-lines: 4;
    max-height: calc(var(--lh) * var(--max-lines));
    overflow: hidden;
  }
}
</style>
