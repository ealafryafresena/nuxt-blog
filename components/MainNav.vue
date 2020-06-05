<template>
  <div>
    <v-app-bar class="main-nav" fixed dark color="primary darken-4">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        ><nuxt-link class="main-nav-branding title" :to="pages[0].url">
          {{ mainTitle }}
        </nuxt-link>
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      flat
      app
      class="v-navigation-drawer--fixed"
      hide-overlay
      dark
      color="primary darken-4"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="main-nav-drawer-title title">
            <nuxt-link class="main-nav-branding headline" :to="pages[0].url">
              Eala<br />Frya<br />Fresena
            </nuxt-link>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list class="main-nav-menu" dense nav>
        <v-list-item
          v-for="page in pages"
          :key="page.title"
          :to="page.url"
          link
        >
          <v-list-item-content>
            <v-list-item-title>{{ page.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
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
  },
  data() {
    return {
      drawer: true
    }
  }
}
</script>

<style lang="scss" scoped>
.main-nav {
  display: none;

  @media (max-width: 1264px) {
    display: block;
  }

  &-drawer-title {
    text-align: center;
    padding: 20px 0;
  }

  &-menu {
    margin-top: 40px;

    a {
      text-align: center;
    }
  }

  &-branding {
    color: white !important;
    text-decoration: none;

    &:hover {
      opacity: 0.7;
    }
  }
}

.v-list-item__content {
  padding: 8px 0 0 4px !important;
}
</style>
