<template>
  <div id="footer" class="panel">
    <p>© Abstrakts.fr 2021</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./src/assets/styles/variables.scss";

#footer {
  //border-top: 1px dashed $black;
  background-color: $white;
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: $medium;
  font-size: 1.2vw;
  @media (max-width: 820px) {
    font-size: 4vw;
  }
}
</style>