<template>
  <v-toolbar app>
    <v-toolbar-title>yumcyawiz's portfolio</v-toolbar-title>
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
