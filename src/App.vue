<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
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
</style>
