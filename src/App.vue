<template>
  <div id="app">
    <router-view />
    <div class="counter d-none">
      counter : 0
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    async updateCounter() {
      const data = await fetch('https://api.countapi.xyz/hit/abstrakts-dp-counter-prod/visits')
      const count = await data.json()

      document.querySelector('.counter').innerHTML = 'counter : ' + count.value
    }
  },
  created() {
    this.updateCounter()
  },
  metaInfo() {
    return {
      title: 'Abstrakts.fr | Web developper & designer',
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        {
          name: 'description', 
          content: "Passionné depuis le plus jeune âge par la technologie et plus principalement je me suis très rapidement dit qu'il exisitai de multiples possibilité, presque infinie en terme de développement. Méticuleux, passionné et à l'écoute, je saurais vous accompagner dans vos divers projets."}
      ]
    }
  }
}
</script>

<style lang="scss">
@import "./src/assets/styles/global.scss";

body,
html {
  scroll-behavior: smooth;
}

.d-none {
  display: none
}
</style>
