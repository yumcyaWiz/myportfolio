<template>
  <v-app>
    <v-layout>
      <v-flex>
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
      </v-flex>
    </v-layout>
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
        { title: 'Home', icon: 'dashboard', path: '/', external: false },
        { title: 'About', icon: 'account_circle', path: '/about', external: false },
        { title: 'Blog', icon: '', path: 'https://teastat.blogspot.com/', external: true },
        { title: 'Twitter', icon: '', path: 'https://twitter.com/yumcyawiz', external: true },
        { title: 'Github', icon: '', path: 'https://github.com/yumcyaWiz', external: true },
        { title: 'Pixiv BOOTH', icon: '', path: 'https://yumcyawiz.booth.pm/', external: true }
      ],
    }
  }
}
</script>
