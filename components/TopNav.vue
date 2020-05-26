<template>
  <div>
    <v-app-bar fixed dark color="primaryBase">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        ><nuxt-link class="app-bar-branding headline" :to="pages[0].url">
          {{ mainTitle }}
        </nuxt-link></v-toolbar-title
      >
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      class="v-navigation-drawer--fixed"
      hide-overlay
      absolute
      temporary
      dark
      color="primaryBase"
    >
      <v-list-item-content>
        <div>
          <v-app-bar-nav-icon
            height="48"
            width="48"
            @click.stop="drawer = !drawer"
          >
            <v-icon>mdi-close</v-icon>
          </v-app-bar-nav-icon>
        </div>
      </v-list-item-content>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            v-for="page in pages"
            :key="page.title"
            :to="page.url"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ page.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ page.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
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
      drawer: false
    }
  }
}
</script>

<style lang="scss" scoped>
.app-bar-branding {
  color: white !important;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
}

.v-list-item__content {
  padding: 8px 0 0 4px !important;
}
</style>
