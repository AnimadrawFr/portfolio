<template>
  <div id="heading" class="panel">
    <h1>Abstrakts</h1>
    <h2>Web developper & designer</h2>
    <button class="btn btn-primary">contact me</button>
    <div class="toAbout" v-animate-css="animations.toAbout">
      <i class="fas fa-chevron-down"></i>
    </div>
    <video autoplay loop id="bgvid">
      <source src="../assets/space.mp4" type="video/mp4" />
    </video>
    <img class="wave" src="../assets/SVG/wave.svg" alt="" />
  </div>
</template>

<script>
import {gsap, TweenLite} from 'gsap'
gsap.registerPlugin(TweenLite);

export default {
  data: () => {
    return {
      animations: {
        toAbout: {
          classes: "bounce",
          duration: 1000,
          iteration: "infinite",
        },
      },
    };
  },
  mounted() {
    TweenLite.fromTo('#heading h1', 4, 
    {y: -10, textShadow: '4px 10px 6px #242424',}, 
    {y: 10,  textShadow: '4px 2px 2px #242424', ease: 'Power1.easeIn', yoyo: true, repeat: -1}
    )
  }
};
</script>

<style lang="scss">
@import "./src/assets/styles/variables.scss";

#heading {
  position: relative;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: $white;
  video {
    top: 0;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
  }
  .wave {
    position: absolute;
    bottom: -1px;
    width: 100%;
  }
  h1 {
    font-size: 6vw;
    @media (max-width: 820px) {
      font-size: 12vw;
    }
    text-transform: uppercase;
    margin-bottom: 0;
    text-shadow: 2px 2px 2px $black;
  }
  h2 {
    font-size: 2vw;
    @media (max-width: 820px) {
      font-size: 4vw;
    }
  }
  .toAbout {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 40px;
    //background-color: $white;
    color: $white;
    z-index: 10;
    cursor: pointer;
    &::before {
      content: "";
      position: absolute;
      transform: rotate(45deg);
      height: 25px;
      width: 25px;
      background-color: $green;
      z-index: -1;
    }
  }
}
</style>