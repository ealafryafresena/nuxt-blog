<template>
  <v-app dark>
    <TopNav :pages="pages" :main-title="mainTitle" />
    <nuxt />
    <PageFooter class="mt-12" :pages="pages" :main-title="mainTitle" />
  </v-app>
</template>

<script>
import TopNav from '@/components/TopNav.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  components: {
    TopNav,
    PageFooter
  },
  data() {
    return {
      mainTitle: 'Eala Frya Fresena',
      heroImage: '/images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg',
      pages: [
        {
          title: 'Blog',
          icon: 'mdi-post',
          url: '/'
        },
        {
          title: 'About',
          icon: 'mdi-information',
          url: '/about'
        }
      ]
    }
  }
}
</script>
