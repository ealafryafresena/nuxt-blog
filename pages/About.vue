<template>
  <div>
    <HeaderHero :hero-image="heroImage" :hero-caption="heroCaption">
      About this Project
    </HeaderHero>
    <div class="about mx-auto">
      <v-container>
        <HeadingTitle class="mt-12">About</HeadingTitle>

        <v-card class="mx-auto mt-12" max-width="800" outlined>
          <v-card-title class="headline mb-1"
            >Ingredients of this Application</v-card-title
          >
          <v-card-text
            >This project is made with
            <a href="https://nuxtjs.org/" target="_blank">NuxtJS</a>
            and <a href="https://vuetifyjs.com/en/" target="_blank">Vuetify</a>
          </v-card-text>
        </v-card>

        <v-card class="mx-auto mt-12" max-width="800" outlined>
          <v-card-title class="headline mb-1"
            >Built, tested and deployed by Netlify</v-card-title
          >
          <v-card-text
            >This project is prebuilt by
            <a href="https://www.netlify.com/" target="_blank">Netlify</a> and
            deployed to Netlify's <i>global edge network.</i></v-card-text
          >
        </v-card>

        <v-card class="mx-auto mt-12" max-width="800" outlined>
          <v-card-title class="headline mb-1">Miscellanea</v-card-title>
          <v-card-text>
            <ul>
              <li>
                Source Code:
                <a
                  href="https://github.com/ealafryafresena/nuxt-blog"
                  target="_blank"
                  >GitHub</a
                >
              </li>
              <li>
                Vue Framework:
                <a href="https://nuxtjs.org/" target="_blank">NuxtJS</a>
              </li>
              <li>
                UI Library:
                <a href="https://vuetifyjs.com/en/" target="_blank">Vuetify</a>
              </li>
              <li>
                CDN:
                <a href="https://www.netlify.com/" target="_blank">Netlify</a>
              </li>
              <li>
                Images:
                <a href="https://unsplash.com/" target="_blank">Unsplash</a>
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<script>
import HeaderHero from '@/components/HeaderHero.vue'
import HeadingTitle from '@/components/HeadingTitle.vue'

export default {
  components: {
    HeaderHero,
    HeadingTitle
  },
  data() {
    return {
      heroImage: 'images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg',
      heroCaption: 'Photo by Patrick Tomasso on Unsplash'
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  max-width: 800px;
}
.v-card__text,
.v-card__title {
  word-break: normal;
}
</style>
