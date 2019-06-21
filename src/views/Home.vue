<template>
  <div>
    <v-layout>
      <v-flex>
      <v-parallax :src="require('../assets/parallax.png')">
        <v-layout align-center column justify-center>
          <h1 class="display-3 font-weight-thin mb-3">Mathematics × Programming</h1>
          <h4 class="subheading font-weight-light">good balance of theory and implementation</h4>
        </v-layout>
      </v-parallax>
      </v-flex>
    </v-layout>

    <v-container fluid>
      <v-card flat>
        <v-card-title>
          <h2 class="diaplay-3 font-weight-light">I am interested in ...</h2>
        </v-card-title>

        <v-container xs12>
          <v-layout row justify-center wrap>
            <v-flex xs6 v-for="card in cards" :key="card.title">
              <Card :title="card.title" :desc="card.desc" :image="card.image" />
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-container>
  </div>
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
          desc: 'I am interested in various fields of Mathematics, such as Statistics, Computational Statistics, Probability, Real Analysis, Functional Analysis, Manifold, Numerical Analysis, Stochastic Differential Equation, Control theory, and Stochastic Control.',
          image: 'mathematics.png'
        },
        {
          title: 'Programming',
          desc: 'I like programming and making a cool stuff with it. Personally I like to use programming on some mathematical projects such as numerical analysis, machine learning, simulation.',
          image: 'programming.jpg'
        },
        { title: 'RayTracing',
          desc: 'RayTracing is a method to generate photorealistic CGs. I am especially interested in Montecarlo RayTracing algorithms such as Path Tracing, Bidirectional Path Tracing, Metropolis Light Transport.',
          image: 'raytracing.png'
        },
        {
          title: 'Mathematical Finance',
          desc: 'I like how probability and stochastic differential equation theories are applied in option pricing.',
          image: 'mathematical_finance.png'
        },
        {
          title: 'Quantitative Investment',
          desc: 'Quantitative Investment is a way to compose a financial portfolio with mathematics. I am interested in how to make a low risk portfolio with mathematics.',
          image: 'quantitative_investment.png'
        },
      ]
    }
  }
}
</script>
