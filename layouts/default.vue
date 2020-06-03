<template>
  <v-app dark>
    <MainNav :pages="pages" :main-title="mainTitle" />
    <v-content>
      <nuxt />
      <PageFooter class="mt-12" :pages="pages" :main-title="mainTitle" />
    </v-content>
  </v-app>
</template>

<script>
import MainNav from '@/components/MainNav.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  components: {
    MainNav,
    PageFooter
  },
  data() {
    return {
      mainTitle: 'Eala Frya Fresena',
      pages: [
        {
          title: '/blog',
          url: '/'
        },
        {
          title: '/about',
          url: '/about'
        }
      ]
    }
  }
}
</script>
