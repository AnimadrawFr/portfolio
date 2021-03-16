<template>
  <div id="navbar">
    <div class="logo">
      <img src="@/assets/logo.svg" alt="" />
    </div>
    <div class="menu">
      <img src="@/assets/fbIcon.svg" alt="" />
      <img src="@/assets/githubIcon.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
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
    }
  }
}
</style>