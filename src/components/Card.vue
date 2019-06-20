<template>
  <v-layout>
    <v-flex xs12 offset-sm1>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="title mb-4 font-weight-light">{{title}}</h3>
            <p class="font-weight-light">{{desc}}</p>
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
