<template>
  <v-container fluid>
    <v-layout align-center justify-center column>
      <v-flex>
        <v-avatar size=100><v-img :src="require('../assets/avatar.jpg')" /></v-avatar>
        <h3 class="display-3 font-weight-light mb-3">yumcyawiz</h3>
        <p>Hi, I am yumcyawiz.</p>
        <p>I am an undergraduate student at a university in Japan, where I major in Applied Mathematics.</p>
        <p>I like to use mathematics and programming in projects.</p>
        <p>If you want to contact me, you can use DM on twitter or send me an e-mail to <code>hashdolf1923@gmail.com</code></p>
      </v-flex>

      <v-timeline class="ma-3">
        <v-timeline-item v-for="timeline in timelines" :key="timeline.time" color="red lighten-3">
          <template v-slot:opposite>
            <span>{{timeline.time}}</span>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline font-weight-light">{{timeline.title}}</v-card-title>
            <v-card-text>{{timeline.desc}}</v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      timelines: [
        { time: '2016/03', title: 'Enrolled in Undergraduate', desc: 'I enrolled in a university in japan. I choose to major in Applied Mathematics.' },
        { time: '2016/12', title: 'Joined OSK', desc: 'OSK is a programming club in the university. I met a lot of cool guys there.' },
        { time: '2017/08', title: 'Joined C92', desc: 'I published a book called Signed Distance Field. It is an introduction of Ray Marching with GLSL.' },
        { time: '2018/03', title: 'AI Job', desc: 'I started working on a company as a machine-learning engineer. I made a facial recognition system there.'},
        { time: '2018/09', title: 'Fund Intern', desc: 'I started to intern on a quantitative hedge fund. I researched making a smart beta of NIKKEI225 stocks.'},
        { time: '2018/12', title: 'Joined C95', desc: 'I published a book called Photorealism. It is about the theory and implementation of Path Tracing.' },
        { time: '2019/01', title: 'Renderer Job', desc: 'I started working on a company as a graphics-programmer.' },
      ]
    }
  }
}
</script>
