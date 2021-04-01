<template>
  <div id="testimonials" class="panel">
    <img class="little-wave-one" src="../assets/SVG/little-wave.svg" alt="" />
    <div class="arrows left" @click="previousSlide()">
      <a href="#" class="fas fa-chevron-left"></a>
    </div>
    <div class="arrows right" @click="nextSlide()">
      <a href="#" class="fas fa-chevron-right"></a>
    </div>

    <div class="testimonials-slider">
      <i class="quote fas fa-quote-right"></i>
      <h4>{{ $t("testimonialsTitle") }}</h4>
      <div
        class="item"
        v-for="(item, i) in slides"
        :key="i"
        v-show="item.index === current"
      >
        <p>
          <a
            target="_blank"
            href="https://www.malt.fr/profile/dylanpiersanti"
            >{{ item.comment }}</a
          >
        </p>
        <i>{{ item.author }}</i>
      </div>
    </div>
    <img class="little-wave-two" src="../assets/SVG/little-wave.svg" alt="" />
  </div>
</template>

<script>
import { testimonials } from "@/js/testimonials.js";

export default {
  data: () => {
    return {
      current: 0,
      slides: testimonials,
    };
  },
  methods: {
    previousSlide() {
      if (this.current === 0) {
        this.current = this.slides.length - 1;
        console.log("if", this.current);
      } else {
        this.current -= 1;
        console.log("else", this.current);
      }
    },
    nextSlide() {
      if (this.current === this.slides.length - 1) {
        this.current = 0;
      } else {
        this.current += 1;
      }
    },
  },
  mounted() {
    setInterval(() => {
      this.nextSlide();
    }, 10000);
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/styles/variables.scss";

#testimonials {
  position: relative;
  min-height: 50vh;
  margin-top: -40px;
  @media (max-width: 720px) {
    min-height: 60px;
  }
  .little-wave-one {
    position: absolute;
    height: auto;
    left: 0;
    top: 0px;
  }
  .little-wave-two {
    position: absolute;
    transform: rotate(180deg);
    bottom: -1px;
    left: 0;
  }
  .arrows {
    margin: auto 0 auto 0;
    top: 45%;
    bottom: 0;
    position: absolute;
    color: $white;
    text-decoration: none;
    font-size: 1.5vw;
    @media (max-width: 820px) {
      font-size: 4vw;
    }
    cursor: pointer;
    z-index: 10;
    &.left {
      left: 20px;
    }
    &.right {
      right: 20px;
    }
    &:hover {
      color: $green;
    }
  }
  .testimonials-slider {
    color: $white;
    text-align: center;
    min-height: 50vh;
    .quote {
      font-size: 1vw !important;
      border: 1px solid $white;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      padding: 15px;
      margin-top:30px;
      @media(max-width: 720px) {
        display: none;
      }
    }
    h4 {
      font-size: 1.2vw;
      @media (max-width: 820px) {
        font-size: 4vw;
      }
    }
    .item {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: $white;
      animation: imageAnimateOpacity 1s ease;
      p {
         max-width: 65%;
        a {
          text-decoration: none;
          text-align: center;
          font-weight: bold;
          color: $white;
          @media (max-width: 820px) {
            max-width: 85%;
          }
        }
      }
    }
  }
}

@keyframes imageAnimateOpacity {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(20deg);
  }
  to {
    opacity: 1;
  }
}
</style>