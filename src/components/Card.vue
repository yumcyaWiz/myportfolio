<template>
  <v-layout>
    <v-flex xs12>
      <v-card flat>
        <v-card-title primary-title>
          <v-flex>
            <h3 class="title mb-3 font-weight-light">{{title}}</h3>
            <p class="font-weight-light">{{desc}}</p>
          </v-flex>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
export default {
  props: {
    title: String,
    desc: String,
    image: String
  }
}
</script>
