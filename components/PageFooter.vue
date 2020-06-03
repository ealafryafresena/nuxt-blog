<template>
  <v-footer color="grey lighten-3" padless>
    <div class="footer-nav d-flex justify-center py-2">
      <v-btn
        v-for="page in pages"
        :key="page.title"
        :to="page.url"
        link
        color="grey darken-3"
        text
        class="text-lowercase my-2"
      >
        {{ page.title }}
      </v-btn>
    </div>
    <div class="footer-nav grey lighten-3 py-6 text-center">
      {{ new Date().getFullYear() }} | <strong>{{ mainTitle }}</strong>
    </div>
  </v-footer>
</template>
<script>
export default {
  props: {
    pages: {
      type: Array,
      required: true
    },
    mainTitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  &-nav {
    width: 100%;
  }
}
</style>
