<template>
  <v-container fluid>
    <v-parallax :src="require('../assets/shinkan2.png')">
      <v-layout align-center column justify-center>
        <h1 class="display-3 font-weight-thin mb-3 black--text">yumcyawiz</h1>
        <h4 class="subheading black--text">a raytracing guy</h4>
      </v-layout>
    </v-parallax>

    <v-card flat>
      <v-card-title>
        <h2 class="diaplay-3 font-weight-light">I am interested in ...</h2>
      </v-card-title>
        <v-container xs12 sm6 fluid>
          <v-layout row wrap>
            <v-flex xs4 v-for="card in cards" :key="card.title">
              <Card :title="card.title" :desc="card.desc" />
            </v-flex>
          </v-layout>
      </v-container>
    </v-card>
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
