<template>
  <v-app>
    <Header :views="views" />

    <v-content>
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>

    <v-footer app>
      <v-flex text-xs-center>
        <h4 class="font-weight-light">&copy; 2019 - yumcyawiz</h4>
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
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
