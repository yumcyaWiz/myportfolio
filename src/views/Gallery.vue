<template>
  <v-layout row wrap>
    <v-flex v-for="item in items" :key="item.title" xs3>
      <v-hover>
        <v-card tile slot-scope="{hover}">
          <v-img :src="require('@/assets/gallery/' + item.image)" aspect-ratio=1.0>
            <div class="fill-height" :class="hover ? 'bottom-gradient' : 'none'">
              <v-card-title v-if="hover" class="white--text headline font-weight-light">{{item.title}}</v-card-title>
              <v-card-text v-if="hover" class="white--text caption font-weight-light">{{item.desc}}</v-card-text>
            </div>
          </v-img>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</template>


<script>
export default {
  data() {
    return {
      items: [
        { title: 'Photorealism', image: '1.png', desc: 'Published on C95'},
        { title: 'Signed Distance Field', image: 'signed_distance_field.png', desc: 'Published on C92' },
        { title: 'Earth Rendering', image: '2.png', desc: 'Volume Rendering' },
        { title: 'Atmosphere Rendering', image: '3.png', desc: 'Volume Rendering' },
        { title: 'Cornell Box', image: '4.png', desc: 'BVH + Next Event Estimation'},
        { title: 'Thin Lens Model', image: '5.png', desc: 'Thin Lens Camera Model' },
        { title: 'Diamond', image: '7.png', desc: 'Specular + Image Based Lighting'},
        { title: 'Stanford Dragon', image: '8.png', desc: 'BVH + Next Event Estimation'},
        { title: 'Glass Balls', image: '9.png', desc: 'Specular + Image Based Lighting'},
      ]
    }
  }
}
</script>


<style scoped>
  .bottom-gradient {
    background-image: radial-gradient(circle at center, rgba(1, 1, 1, 0), rgba(1, 1, 1, 0.5) 100%);
  }
</style>
