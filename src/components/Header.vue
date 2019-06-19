<template>
  <v-toolbar app>
    <v-toolbar-title>
      <v-avatar><v-img :src="require('../assets/avatar.jpg')" /></v-avatar>
      yumcyawiz
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items v-for="view in views" :key="view.title">
      <v-btn flat :to="view.path">{{view.title}}</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>


<script>
export default {
  props: {
    views: Array
  }
}
</script>
