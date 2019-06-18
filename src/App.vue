<template>
  <v-app>
    <v-navigation-drawer permanent floating light>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Portfolio
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-tile
          v-for="view in views"
          :key="view.title"
          :to="{path: view.path}"
        >
          <v-list-tile-action>
            <v-icon>{{ view.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ view.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      views: [
        { title: 'Home', icon: 'dashboard', path: '/' },
        { title: 'About', icon: 'question_answer', path:'/about' }
      ],
    }
  }
}
</script>
