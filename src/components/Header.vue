<template>
  <v-toolbar app dark>
    <v-toolbar-title>
      <v-avatar><v-img :src="require('../assets/avatar.jpg')" /></v-avatar>
      yumcyawiz
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items v-for="view in views" :key="view.title" class="hidden-sm-and-down">
      <v-btn flat small :href="view.path" v-if="view.external">{{view.title}}</v-btn>
      <v-btn flat small :to="view.path" v-else>{{view.title}}</v-btn>
    </v-toolbar-items>

    <v-menu class="hidden-md-and-up" dark>
      <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
      <v-list dense>
        <v-list-tile v-for="view in views" :key="view.title" :to="view.external ? '' : view.path" :href="view.external ? view.path : ''">
          {{view.title}}
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>


<script>
export default {
  props: {
    views: Array
  }
}
</script>
