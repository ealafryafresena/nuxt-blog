<template>
  <v-footer color="greyDark2" padless>
    <div class="footer-nav d-flex justify-center py-2">
      <v-btn
        v-for="page in pages"
        :key="page.title"
        :to="page.url"
        link
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ page.title }}
      </v-btn>
    </div>
    <div class="footer-nav greyDark3 py-6 text-center white--text">
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
