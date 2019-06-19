<template>
  <v-container fluid>
    <v-parallax :src="require('../assets/shinkan2.png')">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">yumcyawiz</h1>
        <h4 class="subheading">a raytracing guy</h4>
      </v-layout>
    </v-parallax>

    <v-container>
      <h2>I am interested in ...</h2>
      <v-flex v-for="card in cards" :key="card.title">
        <Card :title="card.title" :desc="card.desc" />
      </v-flex>
    </v-container>
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
          desc: 'I am interested in various field of Mathematics, such as Statistics, Computational Statistics, Probability, Real Analysis, Functional Analysis, Manifold, Numerical Analysis, Stochastic Differential Equation, Control theory, and Stochastic Control.',
          image: 'cards/mathematics.png'
        },
        {
          title: 'Programming',
          desc: 'I like doing programming and making a cool stuff with it. Personally I like to use programming on some mathematical projects such as numerical analysis, machine learning, simulation.'
        },
        { title: 'RayTracing',
          desc: 'RayTracing is a method to generate photorealistic CGs. I am especially interested in Montecarlo RayTracing algorithms such as Path Tracing, Bidirectional Path Tracing, Metropolis Light Transport.',
          image: 'cards/raytracing.png'
        },
        {
          title: 'Mathematical Finance',
          desc: 'I like how probability and stochastic differential equation theories are applied in option pricing.',
        },
        {
          title: 'Quantitative Investment',
          desc: 'Quantitative Investment is a way to compose a financial portfolio with mathematics. I am interested in how to make a low risk portfolio with mathematics.'
        },
      ]
    }
  }
}
</script>
