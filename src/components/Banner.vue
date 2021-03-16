<template>
  <div id="banner">
    <img class="little-wave-one" src="../assets/SVG/little-wave.svg" alt="" />
    <div id="inner-container">
      <div class="banner-container">
        <div class="content">
          <h3>BANNER TITLE</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus
            ligula semper metus pellentesque mattis. Maecenas volutpat, diam
            enim sagittis quam, id porta quam. Sed id dolor consectetur
            fermentum nibh volutpat, accumsan purus.
          </p>
          <button class="btn btn-primary">contact me</button>
        </div>
        <img class="fusee" src="../assets/fusee.png" alt="" />
      </div>
    </div>
    <img class="little-wave-two" src="../assets/SVG/little-wave.svg" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./src/assets/styles/variables.scss";

#banner {
  background-color: transparent;
  width: 100%;
  color: $white;
  position: relative;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(#000, 0.5);
  .banner-container {
    grid-gap: 0;
    .content {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-left: 5%;
      z-index: 11;
      margin-bottom: 20px;
      opacity: 0;
      transform: scale(0.5);
      @media (max-width: 820px) {
        width: 100%;
        margin-left: 0;
      }
      text-align: center;
    }
    .fusee {
      position: absolute;
      width: 350px;
      right: 8%;
      @media (max-width: 820px) {
        display: none;
      }
      top: -100px;
      z-index: 10;
    }
  }
  .little-wave-one {
    position: absolute;
    top: 0;
  }
  .little-wave-two {
    position: absolute;
    transform: rotate(180deg);
    bottom: -1px;
    width: 100.01%;
  }
  .grid-1-2 {
    .content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    p {
      display: flex;
      align-items: center;
      padding: 0 40px;
      @media (max-width: 820px) {
        text-align: center;
        padding: 20px 40px;
      }
    }
    img {
      @media (max-width: 820px) {
        margin: 20px 0;
      }
    }
  }
}

</style>