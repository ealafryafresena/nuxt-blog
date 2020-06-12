<template>
  <v-app dark>
    <v-container>
      <div class="error-page mx-auto text-center">
        <div v-if="error.statusCode === 404">
          <h1 class="display-4">
            {{ pageNotFound }}
          </h1>
          <p class="title mt-8">
            The page you were looking for doesn't exist!
          </p>
        </div>
        <h1 v-else class="display-3">
          {{ otherError }}
        </h1>
        <div class="mt-12 d-flex justify-center">
          <v-btn to="/" color="primary">
            <span class="text-capitalize">Back to Home</span>
          </v-btn>
        </div>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'error-layout',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404',
      otherError: 'An error occurred'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style lang="scss" scoped>
.error-page {
  max-width: 800px;
  margin-top: 100px;
}
</style>
