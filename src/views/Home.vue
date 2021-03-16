<template>
  <div class="home">
    <Navbar />
    <div id="container">
      <Heading />
      <About />
      <Services />
      <Banner />
      <Portfolio />
      <StartProject />
      <Skills />
      <Testimonials />
      <Contact />
      <Foot />
    </div>
  </div>
</template>

<script>
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Services from "../components/Services";
import Banner from "../components/Banner";
import Portfolio from "../components/Portfolio";
import StartProject from "../components/StartProject";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Foot from "../components/Footer.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Home",
  components: {
    Navbar,
    Heading,
    About,
    Services,
    Banner,
    Portfolio,
    StartProject,
    Skills,
    Testimonials,
    Contact,
    Foot,
  },
  data: function () {
    return {
      trigger: null,
    };
  },
  methods: {
    onScroll() {
      gsap.to([".banner-container .content"], 1, {
        scrollTrigger: {
          trigger: ".banner-container",
          start: "top center",
          end: "top 50px",
          scrub: true,
        },
        onStart: () => {
          gsap.to(".banner-container .content", 1, {
            opacity: 1,
            scale: 1,
            onComplete: () => {
              gsap.fromTo(
                ".fusee",
                0.2,
                { x: 2 },
                { x: -2, repeat: -1, yoyo: true }
              );
              setTimeout(() => {
                gsap.to('.fusee', 2, {
                  y: -1000,
                  x: -200,
                  opacity: 0
                })
              }, 500)
            },
          });
        },
      });
    },
    onRefresh() {
      window.onbeforeunload = () => {
        window.scrollTo(0, 0)
      }
    }
  },
  mounted() {
    const containerX = document.body.offsetWidth; // Document width
    const containerY =
      window.innerWidth <= 720
        ? document.body.offsetHeight / 8
        : document.body.offsetHeight / 2; // Document height
    let buildAsteroid;

    function createAsteroid() {
      buildAsteroid = setInterval(() => {
        const scrollY = window.scrollY;
        const sizeRandom =
          window.innerWidth <= 720 ? 1 : `${Math.random() * 2}`;

        const v = document.createElement("div");
        v.className = "meteor__item-img";
        v.style.zIndex = Math.floor(Math.random() * 20);

        const randomX = Math.floor(Math.random() * containerX) + 1;

        v.style.top = `${scrollY - 50}px`;
        v.style.right = `${randomX}px`;
        v.style.transform = "rotate(45deg) scale(" + sizeRandom + ")";

        document.body.appendChild(v);

        gsap.to(v, 5, {
          y: containerY / 2,
          x: -containerX - 50,
          onComplete: () => {
            document.body.removeChild(v);
          },
        });
      }, 3000);
    }

    window.addEventListener("load", () => {
      //createAsteroid(),
      this.onScroll();
      this.onRefresh();
    });

    /*window.addEventListener("focus", () => {
      createAsteroid()
    });

    window.addEventListener("blur", () => {
      console.log("blur");
      clearInterval(buildAsteroid);
    });*/
  },
};
</script>

<style lang="scss">
$rand: random(2);

.meteor__item-img {
  position: fixed;
  background-image: url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/parallax-space/images/meteors-sprite.png);
  background-size: auto 100%;
  height: 200px;
  width: 200px;
  animation: an-frame-animation 3s steps(48) infinite;
}

@-webkit-keyframes an-frame-animation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -28800px 0;
  }
}
</style>
