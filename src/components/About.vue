<template>
  <div id="about" class="panel">
    <div id="inner-container">
      <h3>{{ $t('aboutMe') }}</h3>
      <div id="aboutMe" class="grid-1-3">
        <div class="col citation">
          <p class="content">{{ $t('aboutMe-citation') }}</p>
          <p class="author">{{ $t('aboutMe-citation-author') }}</p>
        </div>
        <div class="col">
          <p>{{ $t('aboutMe-first-bloc') }}</p>
        </div>
        <div class="col">
          <p>{{ $t('aboutMe-second-bloc') }}</p>
        </div>
      </div>

      <h3>Personnals projects</h3>
      <div id="projects" class="grid-1-3">
        <div
          class="col card"
          v-for="(project, i) in perso"
          :key="i"
          :class="`card-${i}`"
        >
          <img class="card-img" :src="project.picture" alt="" />
          <div class="card-description">
            <h4>{{ $t(project.title) }}</h4>
            <p>{{ $t(project.description) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {projects} from "@/js/projects.js";
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
      filter: grayscale(1);
      &:hover {
        filter: grayscale(0);
        transition: 0.5s;
      };
      .card-description {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h4 {
          font-size: 20px;
          text-transform: uppercase;
        }
        p {
          line-height: 20px;
          width: 200px;
        }
      }
    }
  }
}
</style>