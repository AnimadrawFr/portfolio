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
      <h4>What people say ?</h4>
      <div
        class="item"
        v-for="(item, i) in slides"
        :key="i"
        v-show="item.index === current"
      >
        <p>{{ item.comment + " " + item.index }}</p>
        <i>{{ item.author }}</i>
      </div>
    </div>
    <img class="little-wave-two" src="../assets/SVG/little-wave.svg" alt="" />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      current: 0,
      slides: [
        {
          index: 0,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis.",
          author: "Author name",
        },
        {
          index: 1,
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis.",
          author: "Author test",
        },
      ],
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
        console.log("if", this.current);
      } else {
        this.current += 1;
        console.log("else", this.current);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/styles/variables.scss";

#testimonials {
  position: relative;
  min-height: 50vh;
  .little-wave-one {
    position: absolute;
    height: auto;
    left: 0;
    top: -40px;
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
    .quote {
      font-size: 1vw !important;
      border: 1px solid $white;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      padding: 15px;
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
        max-width: 55%;
        text-align: center;
        @media (max-width: 820px) {
          max-width: 85%;
        }
      }
    }
  }
}

@keyframes imageAnimateOpacity {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
  }
}
</style>