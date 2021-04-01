<template>
  <div id="contact" class="panel">
    <h3>{{ $t("contactTitle") }}</h3>
    <div id="inner-container">
      <p>{{ $t("contactSubtitle") }}</p>
      <div id="contact-bloc" class="grid-1-4">
        <div class="network-icon">
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Abstrakts.fr">
            <i class="icon fab fa-facebook-square"></i>
          </a>
        </div>
        <div class="network-icon">
          <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/abstrakts.fr">
            <i class="icon fab fab fa-instagram"></i>
          </a>
        </div>
        <div class="network-icon">
          <a
            target="_blank"
            rel="noopener noreferrer"
            :href="`https://api.whatsapp.com/send?phone=${phone}`"
            
          >
            <i class="icon fab fa-whatsapp"></i>
          </a>
        </div>
        <div class="network-icon">
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Abstrakts.fr">
            <i class="icon fab fa-facebook-messenger"></i>
          </a>
        </div>
      </div>
      <p>{{ $t("contactSubtitleForm") }}</p>
      <div id="contact-form" class="grid-1-2">
        <div class="contact-informations">
          <input
            class="input"
            type="text"
            name="name"
            id="name"
            :placeholder="$t('contactName')"
            v-model="contact.name"
          />
          <input
            class="input"
            type="text"
            name="email"
            id="email"
            :placeholder="$t('contactEmail')"
            v-model="contact.email"
          />
        </div>
        <div class="contact-message">
          <textarea
            class="input"
            name="message"
            id="message"
            :placeholder="$t('contactMessage')"
            v-model="contact.message"
          ></textarea>
          <span class="errorMessage" v-show="mail.error">{{
            $t("contactError")
          }}</span>
          <span class="successMessage" v-show="mail.sent">{{
            $t("contactSent")
          }}</span>
          <button class="btn btn-secondary" @click="checkForm()">
            {{ $t("contactSend") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      contactApi: "https://enqrwcxyjvhif75.m.pipedream.net",
      contact: {
        name: null,
        email: null,
        message: null,
        mielpot: null,
      },
      phone: "33749217012",
      mail: {
        error: false,
        sent: false,
        regex: /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i,
        headers: new Headers(),
      },
    };
  },
  methods: {
    sendForm() {
      this.mail.sent = true;
      this.mail.error = false;

      if (this.mail.sent) {
        fetch(this.contactApi, {
          method: "POST",
          headers: this.mail.headers,
          mode: "cors",
          body: JSON.stringify({
            name: this.contact.name,
            email: this.contact.email,
            message: this.contact.message,
          }),
        });
      }
    },
    checkForm() {
      if (
        this.contact.name !== null &&
        this.contact.email !== null &&
        this.contact.message !== null
      ) {
        if (this.contact.email.match(this.mail.regex)) {
          this.sendForm();
        } else {
          this.mail.error = true;
          this.mail.sent = false;
        }
      } else {
        this.mail.error = true;
        this.mail.sent = false;
      }
    },
  },
};
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
      .errorMessage {
        color: indianred;
      }
      .successMessage {
        color: green;
      }
      button {
        margin: 10px 0;
      }
    }
  }
}
</style>