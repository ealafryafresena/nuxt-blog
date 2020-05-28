<template>
  <div>
    <HeaderHero
      :hero-image="post.image"
      :hero-caption="post.caption"
    ></HeaderHero>
    <v-content class="mb-12">
      <v-container>
        <div class="blog-posts-container">
          <p class="blog-post-latest-published caption mb-1">
            {{ post.published }}
          </p>
          <h1 class="display-1">{{ post.title }}</h1>
          <nuxt-content :document="post" />
        </div>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import HeaderHero from '@/components/HeaderHero.vue'

export default {
  layout: 'BlogPost',
  components: {
    HeaderHero
  },
  async asyncData({ $content, params }) {
    const post = await $content(`posts/${params.slug}`).fetch()
    return {
      post
    }
  }
}
</script>

<style lang="scss">
.blog-post-latest-published {
  color: $primaryBase;
}
</style>
