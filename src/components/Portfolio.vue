<template>
  <div id="portfolio" class="panel">
    <h3>{{ $t('portfolioTitle') }}</h3>
    <p class="portfolio-description">
      {{ $t('portfolioDescription') }}
    </p>
    <div class="portfolio-categories">
      <p
        v-for="(category, i) in categories"
        :key="i"
        @click="filter(category)"
        :class="{ 'is-active': selectedCat === category }"
      >
        {{ $t(category) }}
      </p>
    </div>
    <div id="portfolio-grid" class="grid-2-3">
      <div
        class="portfolio-item"
        v-if="selectedCat === preview.cat || selectedCat === categories[0]"
        v-for="(preview, i) in previews"
        :key="i"
      >
        <img :src="preview.picture" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import {portfolio, translatedCategories} from "@/js/portfolio.js";

export default {
  data: () => {
    return {
      selectedCat: null,
      categories: [],
      previews: portfolio,
    };
  },
  methods: {
    filter(selection) {
      this.selectedCat = selection;
    },
  },
  mounted() {
    for(let i = 0; i < translatedCategories.length; i++) {
      this.categories.push(translatedCategories[i])
    }
    this.selectedCat = this.categories[0]
    
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