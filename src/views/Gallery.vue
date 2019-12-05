<template>
  <v-layout row wrap>
    <v-flex v-for="item in items" :key="item.title" xs12 sm6 md3>
      <v-hover>
        <v-card tile slot-scope="{hover}">
            <v-img :src="require('@/assets/gallery/' + item.image)" aspect-ratio=1.0>
              <div class="fill-height" :class="hover ? 'bottom-gradient' : 'none'">
                <v-card-title v-if="hover" class="white--text headline font-weight-light">{{item.title}}</v-card-title>
                <v-card-text v-if="hover" class="white--text caption font-weight-light">{{item.desc}}</v-card-text>
                <v-card-actions v-if="item.link && hover">
                  <v-btn v-if="isExternal(item.link)" :href="item.link" small flat class="white--text font-weight-light">Link</v-btn>
                  <v-btn v-else :to="item.link" small flat class="white--text font-weight-light">Link</v-btn>
                </v-card-actions>
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
        { title: 'Mathematics Behind RayTracing', image: 'mathematics_behind_raytracing.png', desc: 'Published on C96'},
        { title: 'Photorealism', image: '1.png', desc: 'Published on C95', link:'https://yumcyawiz.booth.pm/items/1159865'},
        { title: 'Signed Distance Field', image: 'signed_distance_field.png', desc: 'Published on C92', link:'https://yumcyawiz.booth.pm/items/1159850' },
        { title: 'Earth Rendering', image: '2.png', desc: 'Volume Rendering' },
        { title: 'Atmosphere Rendering', image: '3.png', desc: 'Volume Rendering' },
        { title: 'Cornell Box', image: '4.png', desc: 'BVH + Next Event Estimation'},
        { title: 'Thin Lens Model', image: '5.png', desc: 'Thin Lens Camera Model' },
        { title: 'Diamond', image: '7.png', desc: 'Specular + Image Based Lighting'},
        { title: 'Stanford Dragon', image: '8.png', desc: 'BVH + Next Event Estimation'},
        { title: 'Glass Balls', image: '9.png', desc: 'Specular + Image Based Lighting'},
        { title: 'Mandelbrot', image: 'mandelbrot.png', desc: 'GLSL Distance Estimation', link:'/gallery/mandelbrot' },
      ]
    }
  },

  methods: {
    isExternal(link) {
      return link.includes('http') || link.includes('https')
    }
  }
}
</script>


<style scoped>
  .bottom-gradient {
    background-image: radial-gradient(circle at center, rgba(1, 1, 1, 0), rgba(1, 1, 1, 0.5) 100%);
  }
</style>
