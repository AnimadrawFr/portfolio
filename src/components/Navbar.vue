<template>
  <div id="navbar" class="animBar">
    <div class="logo">
      <img src="@/assets/logo.svg" alt="" />
    </div>
    <div class="menu">
      <img @click="setLang()" :src="require(`@/assets/${currentLang}.svg`)" alt="" />
      <!-- <a href="#"><img src="@/assets/githubIcon.svg" alt="" /></a> -->
    </div> 
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLang: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'fr_FR',
    }
  },
  methods: {
    setLang() {
      this.currentLang === 'fr_FR' ? this.currentLang = 'en_EN' : this.currentLang = 'fr_FR'
      localStorage.setItem('lang', this.currentLang)
      this.$i18n.locale = this.currentLang
    },
    displayNavBar() {

    }
  },
  created() {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 400) {
        document.getElementById('navbar').style.opacity = 0
      } else {
        document.getElementById('navbar').style.opacity = 1
      }
    })
  }
};
</script>

<style lang="scss">
@import "./src/assets/styles/variables.scss";

#navbar {
  position: fixed;
  z-index: 20;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  .logo {
    margin: 0 30px;
    img {
        height: 30px;
    }
  }
  .menu {
    margin: 0 30px;
    img {
      margin: 0 10px;
      height: 25px;
      cursor: pointer;
    }
  }
}

.animBar {
  opacity: 1;
  transition: opacity 0.5s;
}
</style>