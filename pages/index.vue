<template>
  <div>
    <HeaderHero :hero-image="heroImage" :hero-caption="heroCaption">
      A Blog Made with NuxtJS
    </HeaderHero>
    <v-container>
      <div class="blog-posts-container mx-auto">
        <HeadingTitle class="mt-12">Latest Post</HeadingTitle>
        <div class="blog-posts-link">
          <div
            v-for="post in posts.slice(0, 1)"
            :key="post.id"
            class="blog-posts-link"
          >
            <nuxt-link :to="post.path">
              <BlogPostLatest :post="post" />
            </nuxt-link>
          </div>
        </div>
        <HeadingTitle class="mt-12">More Posts</HeadingTitle>
        <div class="blog-posts-list">
          <div
            v-for="post in posts.slice(1, posts.length)"
            :key="post.id"
            class="blog-posts-link"
          >
            <nuxt-link :to="`${post.path}`">
              <BlogPostItem :post="post" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import HeaderHero from '@/components/HeaderHero.vue'
import HeadingTitle from '@/components/HeadingTitle.vue'
import BlogPostLatest from '@/components/BlogPostLatest.vue'
import BlogPostItem from '@/components/BlogPostItem.vue'

export default {
  components: {
    HeaderHero,
    HeadingTitle,
    BlogPostLatest,
    BlogPostItem
  },
  async asyncData({ $content }) {
    const posts = await $content('posts')
      .only([
        'path',
        'slug',
        'title',
        'subline',
        'image',
        'published',
        'createdAt'
      ])
      .sortBy('published', 'desc')
      .fetch()
    return {
      posts
    }
  },
  data() {
    return {
      heroImage: 'images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg',
      heroCaption: 'Photo by Patrick Tomasso on Unsplash'
    }
  }
}
</script>

<style lang="scss">
.blog-posts {
  &-container {
    max-width: 800px;
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
      transform: scale(1.0075, 1.0075);
    }

    a {
      text-decoration: none;
    }
  }
}
</style>
