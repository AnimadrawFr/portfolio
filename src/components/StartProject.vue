<template>
  <div id="startProject">
    <img class="little-wave-one" src="../assets/SVG/little-wave.svg" alt="" />
    <p>Like my creative works ?</p>
    <button class="btn btn-primary">Start project</button>
    <img class="little-wave-two" src="../assets/SVG/little-wave.svg" alt="" />
    <div class="planets">
      <img class="mercure parallax" src="../assets/mercure.png" alt="" />
      <img class="venus parallax" src="../assets/venus.png" alt="" />
      <img class="earth parallax" src="../assets/earth.png" alt="" />
      <img class="mars parallax" src="../assets/mars.png" alt="" />
    </div>
  </div>
</template>

<script>
import { gsap, TweenLite } from "gsap";

gsap.registerPlugin(TweenLite);

export default {
  data: () => {
    return {};
  },
  methods: {
    onMouseMove() {
      let parallaxContainer = document.querySelector("#startProject");
      let parallaxItems = document.querySelectorAll(".parallax");
      let fixer = 0.003;

      parallaxContainer.addEventListener("mousemove", (event) => {
        var pageX =
          event.pageX - parallaxContainer.getBoundingClientRect().width * 0.5;
        var pageY =
          event.pageY - parallaxContainer.getBoundingClientRect().height * 0.5;

        var speedX = 5;
        var speedY = 5;

        for(let i = 0; i < parallaxItems.length; i++) {
          let item = parallaxItems[i];
          TweenLite.set(item, {
          x: (item.offsetLeft + pageX * speedX) * fixer,
          y: (item.offsetTop + pageY * speedY) * fixer,
        });
        }
        
      });
    },
  },
  mounted() {
    this.onMouseMove()
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/styles/variables.scss";

#startProject {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: $white;
  padding: 0 0 30px 0;
  height: 40vh;
  .planets {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    @media (max-width: 820px) {
      display: none;
    }
    //border: 5px solid red;
    z-index: -1;
    .mercure {
      position: absolute;
      height: 25px;
      top: 25%;
      right: 5%;
      opacity: 0.8;
    }
    .venus {
      position: absolute;
      height: 70px;
      top: 25%;
      right: 15%;
      opacity: 0.5;
    }
    .earth {
      position: absolute;
      height: 300px;
      bottom: -35%;
      right: 15%;
      opacity: 0.5;
    }
    .mars {
      position: absolute;
      height: 200px;
      top: -25%;
      left: 10%;
      opacity: 0.5;
    }
  }
  .little-wave-one {
    position: absolute;
    top: 0;
  }
  .little-wave-two {
    position: absolute;
    transform: rotate(180deg);
    bottom: -1px;
    width: 100.01%;
  }
  p {
    font-family: $regular;
    color: $white;
    font-size: 2vw;
    @media (max-width: 820px) {
      font-size: 4vw;
    }
  }
}
</style>