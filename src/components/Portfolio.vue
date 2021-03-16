<template>
  <div id="portfolio" class="panel">
    <h3>Portfolio</h3>
    <p class="portfolio-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula
      semper metus pellentesque mattis. Maecenas volutpat, diam enim sagittis
      quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat,
      accumsan purus.
    </p>
    <div class="portfolio-categories">
      <p
        v-for="(category, i) in categories"
        :key="i"
        @click="filter(category)"
        :class="{ 'is-active': selectedCat === category }"
      >
        {{ category }}
      </p>
    </div>
    <div id="portfolio-grid" class="grid-2-3">
      <div
        class="portfolio-item"
        v-if="selectedCat === preview.category || selectedCat === 'All'"
        v-for="(preview, i) in previews"
        :key="i"
      >
        <img :src="preview.picture" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import portfolio from "@/json/portfolio.json";

export default {
  data: () => {
    return {
      selectedCat: "All",
      categories: [
        "All",
        "Web designs",
        "Web sites",
        "Web apps",
        "Mobile apps",
      ],
      previews: portfolio,
    };
  },
  methods: {
    filter(selection) {
      this.selectedCat = selection;
    },
  },
  mounted() {
    //this.previews = _.shuffle(this.previews);
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/styles/variables.scss";
#portfolio {
  background-color: $white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px 0px;
  .portfolio-categories {
    display: flex;
    align-items: center;
    font-family: $medium;
    cursor: pointer;
    p {
      color: $black;
      text-align: center;
      font-size: 20px;
      margin: 20px 10px;
      &.is-active {
        color: $green;
      }
    }
  }
  .portfolio-description {
    font-family: $medium;
    text-align: center;
    max-width: 80%;
    margin-bottom: 60px;
  }
  #portfolio-grid {
    .portfolio-item {
      animation: appear 0.5s ease-in-out forwards;
    }
    h3 {
      text-align: center;
    }
    img {
      width: 100%;
    }
  }
}

@keyframes appear {
  to {
    width: 100%;
    opacity: 1;
  }
}
</style>