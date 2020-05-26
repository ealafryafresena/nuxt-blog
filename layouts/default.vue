<template>
  <v-app dark>
    <TopNav :pages="pages" :main-title="mainTitle" />
    <HeaderHero />
    <v-content class="mb-12">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <PageFooter class="mt-12" :pages="pages" :main-title="mainTitle" />
  </v-app>
</template>

<script>
import HeaderHero from '@/components/HeaderHero.vue'
import TopNav from '@/components/TopNav.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  components: {
    HeaderHero,
    TopNav,
    PageFooter
  },
  data() {
    return {
      mainTitle: 'Eala Frya Fresena',
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
