<template>
  <v-container>
    <v-parallax :src="require('../assets/shinkan2.png')">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">yumcyawiz</h1>
        <h4 class="subheading">a raytracing guy</h4>
      </v-layout>
    </v-parallax>

    <Card v-for="card in cards" :key="card.title" :title="card.title" :desc="card.desc" />
  </v-container>
</template>


<script>
import Card from '../components/Card.vue'

export default {
  components: {
    Card
  },

  data() {
    return {
      cards: [
        { title: 'Mathematics',
          desc: 'I am interested in various field of Mathematics, such as Statistics, Probability, Functional Analysis, Numerical Analysis, Stochastic Differential Equation, Control theory, and Stochastic Control.',
          image: 'cards/mathematics.png'
        },
        { title: 'RayTracing',
          desc: 'RayTracing is a method to generate photorealistic CGs. I am especially interested in Montecarlo RayTracing algorithms such as Path Tracing, Bidirectional Path Tracing, Metropolis Light Transport.',
          image: 'cards/raytracing.png'
        },
        {
          title: 'Quantitative Investment',
          desc: 'Quantitative Investment is a way to compose a financial portfolio with mathematics. I am interested in how to make a low risk portfolio with mathematics.'
        }
      ]
    }
  }
}
</script>
