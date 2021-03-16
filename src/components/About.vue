<template>
  <div id="about" class="panel">
    <div id="inner-container">
      <h3>About me</h3>
      <div id="aboutMe" class="grid-1-3">
        <div class="col citation">
          <p class="content">
            Design is not making beauty, beauty emerges from selection,
            affinities, integration, love.
          </p>
          <p class="author">LOUIS KAHN</p>
        </div>
        <div class="col">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus
            ligula semper metus pellentesque mattis. Maecenas volutpat, diam
            enim sagittis quam, id porta quam. Sed id dolor consectetur
            fermentum nibh volutpat, accumsan purus.
          </p>
        </div>
        <div class="col">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus
            ligula semper metus pellentesque mattis. Maecenas volutpat, diam
            enim sagittis quam, id porta quam. Sed id dolor consectetur
            fermentum nibh volutpat, accumsan purus.
          </p>
        </div>
      </div>
      <div id="projects" class="grid-1-3">
        <div
          class="col card"
          v-for="(project, i) in perso"
          :key="i"
          :class="`card-${i}`"
        >
          <img class="card-img" :src="project.picture" alt="" />
          <div class="card-description">
            <h4>{{ project.title }}</h4>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projects from "@/json/projects.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  data: () => {
    return {
      perso: projects,
    };
  },
};
</script>

<style lang="scss">
@import "./src/assets/styles/variables.scss";

#about {
  background-color: $white;
  #aboutMe {
    font-family: $medium;
    h3 {
      font-size: 25px;
    }
    .citation {
      color: $black;
      font-size: 20px;
    }
  }
  #projects {
    margin: 80px 0 0 0;
    .card {
      font-family: $medium;
      text-align: center;
      line-height: 5px;
      .card-description {
        h4 {
          font-size: 20px;
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>