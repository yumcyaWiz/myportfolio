<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="heading mb-0">{{title}}</h3>
            <div>{{desc}}</div>
          </div>
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
