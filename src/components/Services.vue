<template>
  <div id="services" class="panel">
    <div id="inner-container">
      <h3>{{ $t('servicesTitle') }}</h3>
      <div class="tabs">
        <div class="grid-1-4">
          <div
            class="tabs-icon"
            v-for="(section, i) in services"
            :key="i"
            :class="{ 'is-active': $t(section.title) == showTab }"
            @click="switchTab($t(section.title))"
          >
            <a href="#" :class="$t(section.icon)"></a>
            <p class="section-title">{{ $t(section.title) }}</p>
          </div>
        </div>
        <div
          v-for="(section, i) in services"
          :key="i"
          class="grid-1-3"
          v-show="$t(section.title) === showTab"
        >
          <div class="col citation">
            {{ $t(section.citation) }}
            <p class="author" v-if="$t(section.author)">{{ $t(section.author) }}</p>
          </div>
          <div class="col">{{ $t(section.col_1) }}</div>
          <div class="col">{{ $t(section.col_2) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {services} from "@/js/services.js";

export default {
  data: () => {
    return {
      showTab: 'UX / UI',
      services
    };
  },
  methods: {
    switchTab(payload) {
      this.showTab = payload;
      console.log(this.showTab);
    },
  },
};
</script>

<style lang="scss">
@import "./src/assets/styles/variables.scss";

#services {
  background-color: $white;
  font-family: $medium;
  min-height: 80vh;
  padding: 40px 0;
  h3 {
    font-size: 25px;
    text-align: center;
    font-family: $regular;
  }
  .citation {
    color: $black;
    font-size: 20px;
  }
}
.tabs {
  .tabs-icon {
    position: relative;
    z-index: 1000;
    font-size: 3vw !important;
    @media (max-width: 820px) {
      font-size: 10vw !important;
    }
    text-align: center;
    color: $black;
    margin: 20px 0;

    cursor: pointer;
    &.is-active {
      color: $green;
    }
    a {
      text-decoration: none;
    }
    p {
      font-family: $medium;
      font-size: 16px;
    }
  }
  .grid-1-3 {
    margin-top: 40px;
    padding: 0 40px;
  }
}
</style>