<template>
  <div id="services" class="panel">
    <div id="inner-container">
      <h3>Services</h3>
      <div class="tabs">
        <div class="grid-1-4">
          <div
            class="tabs-icon"
            v-for="(section, i) in sections"
            :key="i"
            :class="{ 'is-active': section.title == showTab }"
            @click="switchTab(section.title)"
          >
            <a href="#" :class="section.icon"></a>
            <p class="section-title">{{ section.title }}</p>
          </div>
        </div>
        <div
          v-for="(section, i) in sections"
          :key="i"
          class="grid-1-3"
          v-show="section.title === showTab"
        >
          <div class="col citation">
            {{ section.citation }}
            <p class="author" v-if="section.author">{{ section.author }}</p>
          </div>
          <div class="col">{{ section.description }}</div>
          <div class="col">{{ section.resume }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      showTab: "Web designs",
      sections: [
        {
          title: "Web designs",
          icon: "fas fa-fill-drip",
          citation:
            "Design is not making beauty, beauty emerges from selection, affinities, integration, love.",
          author: "LOUIS KAHN",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.",
          resume:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.",
        },
        {
          title: "Web sites",
          icon: "fas fa-code",
          citation:
            "Design is not making beauty, beauty emerges from selection, affinities, integration, love.",
          author: "LOUIS KAHN",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.",
          resume:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.",
        },
        {
          title: "Web apps",
          icon: "fas fa-layer-group",
          citation:
            "Design is not making beauty, beauty emerges from selection, affinities, integration, love.",
          author: "LOUIS KAHN",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.",
          resume:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.",
        },
        {
          title: "Mobile apps",
          icon: "fas fa-mobile-alt",
          citation:
            "Design is not making beauty, beauty emerges from selection, affinities, integration, love.",
          author: "LOUIS KAHN",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.",
          resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
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