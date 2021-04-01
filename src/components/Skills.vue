<template>
  <div id="skills" class="panel">
    <h3>{{ $t('skills') }}</h3>
    <div id="skills-content" class="grid-2-3">
      <div class="skill" v-for="skill in skillList" :key="skill.title">
        <i class="icon" :class="$t(skill.icon)"></i>
        <p class="skill-title">{{ $t(skill.title) }}</p>
        <p>{{ $t(skill.description) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {skills} from "@/js/skills.js"

export default {
  data() {
    return {
      skillList: skills
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./src/assets/styles/variables.scss";

#skills {
  background-color: $white;
  #skills-content {
    margin: 40px 0;
    .skill {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: 20px 0;
      color: $black;
      &:hover {
        color: $green;
      }
      .skill-title {
        font-size: 1.5vw;
        font-weight: bold;
        text-transform: uppercase;
      }
      
      .icon {
        font-size: 4vw !important;
        @media (max-width: 820px) {
          font-size: 15vw !important;
        }
      }
      p {
        max-width: 50%;
        text-align: center;
        font-family: $medium;
        @media (max-width: 820px) {
          font-size: 4vw !important;
        }
      }
    }
  }
}
</style>