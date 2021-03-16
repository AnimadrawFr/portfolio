<template>
  <div id="contact" class="panel">
    <h3>Contact me</h3>
    <div id="inner-container">
      <p>With my socials networks</p>
      <div id="contact-bloc" class="grid-1-4">
        <div class="network-icon">
          <a href="#" class="icon fab fa-facebook-square"></a>
        </div>
        <div class="network-icon">
          <a href="#" class="icon fab fa-instagram"></a>
        </div>
        <div class="network-icon">
          <a href="#" class="icon fab fa-whatsapp"></a>
        </div>
        <div class="network-icon">
          <a href="#" class="icon fab fa-facebook-messenger"></a>
        </div>
      </div>
      <p>or with contact form</p>
      <form id="contact-form" class="grid-1-2">
        <div class="contact-informations">
          <input
            class="input"
            type="text"
            name="name"
            id="name"
            placeholder="NAME"
          />
          <input
            class="input"
            type="email"
            name="email"
            id="email"
            placeholder="EMAIL"
          />
        </div>
        <div class="contact-message">
          <textarea
            class="input"
            name="message"
            id="message"
            placeholder="MESSAGE"
          ></textarea>
          <button class="btn btn-secondary" type="submit">SEND MESSAGE</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./src/assets/styles/variables.scss";

#contact {
  background-color: $white;
  min-height: 50vh;
  #inner-container {
    text-align: center;
    font-family: $medium;
    p {
      margin-bottom: 60px;
    }
    .network-icon {
      text-align: center;
      .icon {
        font-size: 3vw !important;
        @media (max-width: 820px) {
          font-size: 12vw !important;
        }
        color: $black;
        cursor: pointer;
        &.fa-facebook-square:hover {
          color: #3b5998;
        }
        &.fa-instagram:hover {
          color: #da4276;
        }
        &.fa-whatsapp:hover {
          color: #51c85e;
        }
        &.fa-facebook-messenger:hover {
          color: #38d0ff;
        }
      }
    }
  }
  #contact-form {
    .input {
      border: 1px dashed rgb(214, 214, 214);
      background-color: $white;
      color: $black;
      padding: 10px;
    }
    .contact-informations {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      input {
        width: 100%;
        height: 40px;
        margin-bottom: 10px;
      }
    }
    .contact-message {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      #message {
        width: 100% !important;
        height: 150px;
      }
      button {
        margin: 10px 0;
      }
    }
  }
}
</style>