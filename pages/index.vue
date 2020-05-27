<template>
  <div class="blog-posts-container">
    <CategoryHeadline class="mt-12">Latest Post</CategoryHeadline>
    <div class="blog-posts-link">
      <div
        v-for="post in posts.slice(0, 1)"
        :key="post.id"
        class="blog-posts-link"
        @click="navigateToPost(post.path)"
      >
        <BlogPostLatest :post="post" />
      </div>
    </div>
    <CategoryHeadline class="mt-12">More Posts</CategoryHeadline>
    <div class="blog-posts-list">
      <div
        v-for="post in posts.slice(1, posts.length)"
        :key="post.id"
        class="blog-posts-link"
        @click="navigateToPost(post.path)"
      >
        <BlogPostItem :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import CategoryHeadline from '@/components/CategoryHeadline.vue'
import BlogPostLatest from '@/components/BlogPostLatest.vue'
import BlogPostItem from '@/components/BlogPostItem.vue'

export default {
  components: {
    CategoryHeadline,
    BlogPostLatest,
    BlogPostItem
  },
  async asyncData({ $content, params }) {
    const posts = await $content('posts')
      .only([
        'path',
        'slug',
        'title',
        'teaser',
        'createdAt',
        'image',
        'published'
      ])
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      posts
    }
  },
  methods: {
    navigateToPost(path) {
      this.$router.push({ path })
    }
  }
}
</script>

<style lang="scss">
.blog-posts {
  max-width: 800px;
  margin: 0 auto;

  &-container {
    max-width: 800px;
    margin: 0 auto;
  }

  &-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 600px) {
      justify-content: space-around;
    }
  }

  &-link {
    transition: all 0.15s ease-in-out;

    &:hover {
      cursor: pointer;
      transform: scale(1.01, 1.01);
    }
  }
}
</style>
