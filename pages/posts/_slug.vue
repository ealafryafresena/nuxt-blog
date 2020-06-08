<template>
  <div>
    <HeaderHero
      :hero-image="`../../${post.image}`"
      :hero-caption="post.caption"
    ></HeaderHero>
    <v-container>
      <div class="blog-post mx-auto">
        <p class="blog-post-published caption mb-2">
          {{ post.published }}
        </p>
        <h2 class="mb-2">
          {{ post.title }}
        </h2>
        <nuxt-content :document="post" />
        <div class="blog-post-prev-next d-flex justify-space-between py-8">
          <nuxt-link v-if="prev" :to="prev.slug">
            <v-icon>mdi-chevron-left</v-icon>
            {{ prev.title }}
          </nuxt-link>
          <br />
          <nuxt-link v-if="next" :to="next.slug">
            {{ next.title }}
            <v-icon>mdi-chevron-right</v-icon>
          </nuxt-link>
        </div>
        <HeadingTitle class="mt-12 pt-12">Featured Posts</HeadingTitle>
        <div class="blog-post-list">
          <div
            v-for="post in postsFeatured"
            :key="post.id"
            class="blog-post-link"
          >
            <nuxt-link :to="post.path">
              <BlogPostFeatured :post="post" />
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
import BlogPostFeatured from '@/components/BlogPostFeatured.vue'

export default {
  components: {
    HeaderHero,
    HeadingTitle,
    BlogPostFeatured
  },
  async asyncData({ $content, params }) {
    const post = await $content(`posts/${params.slug}`).fetch()
    const posts = await $content('posts')
      .only(['path', 'title', 'image', 'published'])
      .fetch()
    const [prev, next] = await $content('posts')
      .only(['title', 'slug', 'published'])
      .sortBy('published', 'desc')
      .surround(params.slug, { before: 1, after: 1 })
      .fetch()

    const filteredPosts = posts.filter((p) => p.title !== post.title)
    const randomPosts = filteredPosts.sort(() => {
      return 0.5 - Math.random()
    })

    const postsFeatured =
      randomPosts.length < 4 ? randomPosts : randomPosts.slice(0, 3)

    return {
      postsFeatured,
      post,
      prev,
      next
    }
  }
}
</script>

<style lang="scss">
.blog-post {
  max-width: 800px;
  margin-top: 50px;

  &-published {
    color: $primary;
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
      transform: scale(1.015, 1.015);
    }

    a {
      text-decoration: none;
    }
  }

  &-prev-next {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    border-top: 1px solid rgba(0, 0, 0, 0.1);

    a {
      text-decoration: none;
      padding: 0 5px;
    }

    :nth-of-type(2) {
      text-align: right;
    }
  }
}

.nuxt-content {
  padding-bottom: 40px;
  &-highlight {
    pre[class*='language-'] {
      padding: 0 !important;
    }
  }

  code {
    padding: 20px;
    width: 100%;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 15px 0;
  }

  p {
    padding-bottom: 20px;
    font-size: 22px;
  }

  img {
    padding: 10px 0;
    width: 100%;
    height: auto;

    & ~ em {
      font-size: 16px;
    }
  }
}
</style>
