<template>
  <v-container>
    <v-layout align-center justify-center column>
      <v-flex>
        <v-card>
          <v-card-title>
            <h3 class="headline font-weight-light">Mandelbrot</h3>
          </v-card-title>

          <v-card-text>
            <v-slider label="scale" v-model.number="time" min="0" max="20" step="0.1" />
            <canvas id="canvas" :width="width" :height="height" />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import * as THREE from 'three';

export default {
  name: "Mandelbrot",

  data() {
    const scene = new THREE.Scene();
    const renderer = null;
    const camera = new THREE.OrthographicCamera(-1, 1, -1, 1, 0.1, 100);
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: this.time },
        resolution: { value: new THREE.Vector2(512, 512) }
      },

      vertexShader: `
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;
        uniform float time;
        uniform vec2 resolution;


        vec3 interpolate(vec3 x1, vec3 x2, float a) {
            float k = pow((1.0 - cos(a*3.14))/2.0, 1.0);
            return x1*(1.0 - k) + k*x2;
        }

        vec4 colormap(float x) {
            vec3 c1 = vec3(0, 7, 100)/255.0;
            vec3 c2 = vec3(32, 107, 203)/255.0;
            vec3 c3 = vec3(237, 255, 255)/255.0;
            vec3 c4 = vec3(255, 170, 0)/255.0;
            vec3 c5 = vec3(0, 2, 0)/255.0;
            
            if(x < 0.16) {
                float a = x/0.16;
                return vec4(interpolate(c1, c2, a), 1.0); 
            }
            else if(x < 0.42) {
                float a = (x - 0.16)/(0.42 - 0.16);
                return vec4(interpolate(c2, c3, a), 1.0);
            }
            else if(x < 0.6425) {
                float a = (x - 0.42)/(0.6425 - 0.42);
                return vec4(interpolate(c3, c4, a), 1.0);
            }
            else if(x < 0.8575) {
                float a = (x - 0.6425)/(0.8575 - 0.6425);
                return vec4(interpolate(c4, c5, a), 1.0);
            }
            else {
                float a = (x - 0.8575)/(1.0 - 0.8575);
                return vec4(interpolate(c5, c1, a), 1.0);
            }
        }


        vec2 cmult(vec2 z1, vec2 z2) {
          return vec2(z1.x*z2.x - z1.y*z2.y, z1.x*z2.y + z1.y*z2.x);
        }


        float mandelbrot(vec2 c) {
          vec2 z = vec2(0.0, 0.0);
          vec2 zd = vec2(0.0, 0.0);
          for(int i = 0; i < 100; i++) {
            if(length(z) > 2.0) break;
            zd = 2.0*cmult(z, zd) + vec2(1.0, 0.0);
            z = cmult(z, z) + c;
          }
          float d = 0.5*length(z)*log(length(z))/length(zd);
          return d;
        }


        void main() {
          vec2 uv = (2.0*gl_FragCoord.xy - resolution)/resolution;
          vec3 color = vec3(0.0);

          vec2 offset = vec2(-0.749, 0.101);
          float scale = pow(2.0, -time);

          vec2 c = scale*uv + offset;
          float d = mandelbrot(c);
          if(d > 0.0) {
            d = clamp(8.0*d/scale, 0.0, 1.0);
            d = pow(d, 0.05);
            color = colormap(1.0 - d).xyz;
          }

          gl_FragColor = vec4(color, 1.0);
        }
      `,
      side: THREE.DoubleSide
    });
    const plane = new THREE.Mesh(geometry, material);
    return {scene, renderer, camera, geometry, material, plane, time: 0.0, width: 512, height: 512}
  },

  mounted() {
    const $canvas = document.getElementById("canvas");
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: $canvas
    });

    this.camera.position.set(0, 0, 1);

    this.scene.add(this.plane);
    this.animate();
  },

  methods: {
    animate() {
      requestAnimationFrame(this.animate);

      this.material.uniforms.time.value = this.time;

      this.renderer.render(this.scene, this.camera);
    }
  }
}
</script>
