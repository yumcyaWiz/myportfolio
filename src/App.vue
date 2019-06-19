<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>yumcyawiz's portfolio</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-for="view in views" :key="view.title">
        <v-btn flat :to="view.path">{{view.title}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>

    <v-footer app>
      <v-flex text-xs-center> &copy; 2019 - yumcyawiz</v-flex>
    </v-footer>
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
