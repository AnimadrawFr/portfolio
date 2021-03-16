<template>
  <div id="skills" class="panel">
    <h3>My skills</h3>
    <div id="skills-content" class="grid-2-3">
      <div class="skill">
        <i class="icon fab fa-html5"></i>
        <p class="skill-title">Html 5</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="skill">
        <i class="icon fab fa-js-square"></i>
        <p class="skill-title">Javascript</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="skill">
        <i class="icon fab fa-css3-alt"></i>
        <p class="skill-title">Css 3</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="skill">
        <i class="icon fas fa-mobile-alt"></i>
        <p class="skill-title">Mobile</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="skill">
        <i class="icon fab fa-wordpress"></i>
        <p class="skill-title">Wordpress</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="skill">
        <i class="icon fab fa-vuejs"></i>
        <p class="skill-title">Vue Js</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="skill">
        <i class="icon fab fa-php"></i>
        <p class="skill-title">Php</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="skill">
        <i class="icon fab fa-figma"></i>
        <p class="skill-title">Figma</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="skill">
        <i class="icon fas fa-fill-drip"></i>
        <p class="skill-title">Web design</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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