<template>
  <q-page>
    <q-carousel
      :autoplay="autoplay"
      arrows
      animated
      swipeable
      ref="carousel"
      infinite
      v-model="slide"
      height="100vh"
      width="100%"
      background-color="black"
    >
      <q-carousel-slide
        name="first"
        alt="Photo by x from Pexels"
        :img-src="
        $q.dark.isActive
        ? 'statics/kitten-parallax-dark.jpg'
        : 'statics/kitten-parallax.jpg'
        "
      >
        <div class="absolute-center custom-caption">
          <div class="text-h3" style="padding-bottom: 3%">Pet Partners</div>
          <q-btn
            label="README"
            class="button-1"
            color="green"
            icon="pets"
            to="/pet-partners"
            dense
          />
          <q-btn
            label="GitHub"
            class="button-2"
            color="blue"
            icon="star"
            @click="petPartners()"
            dense
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="second"
        :img-src="
        $q.dark.isActive
        ? 'statics/header-bg-dark.jpg'
        : 'statics/header-bg.jpg'
        "
      >
        <div class="absolute-center custom-caption">
          <br />
          <div class="text-h3" style="padding-bottom: 3%">Venues Production</div>
          <q-btn
            label="README"
            class="button-1"
            color="green"
            icon="movie_filter"
            to="/venues-production"
            dense
          />
          <q-btn
            label="Github"
            class="button-2"
            color="blue"
            icon="star"
            @click="venuesProduction()"
            dense
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="third"
        :img-src="
        $q.dark.isActive
        ? 'statics/nannies-dark-mode.jpg'
        : 'statics/nannies.jpg'
        "
      >
        <div class="absolute-center custom-caption">
          <div class="text-h3" style="padding-bottom: 3%">Omo Cafe</div>
          <q-btn
            label="README"
            class="button-1"
            color="green"
            icon="free_breakfast"
            to="/omo-cafe"
            dense
          />
          <q-btn label="GitHub" class="button-2" color="blue" icon="star" @click="omoCafe()" dense />
        </div>
      </q-carousel-slide>
      <template v-slot:control>
        <q-carousel-control
          position="top-right"
          :offset="[18, 18]"
          class="text-white"
          style="background: rgba(0, 0, 0, .3); padding: 4px 8px 4px 0; border-radius: 4px"
        >
          <q-toggle dense dark color="yellow" v-model="autoplay" label="Auto Play" />
        </q-carousel-control>
      </template>
    </q-carousel>
  </q-page>
</template>

<script>
import { openURL } from "quasar";
export default {
  name: "HomeCarousel",
  data() {
    return {
      slide: "first",
      autoplay: true
    };
  },
  methods: {
    petPartners() {
      openURL(
        "https://github.com/Mary-Tyler-Moore/pet-partners/blob/master/README.md"
      );
    },
    venuesProduction() {
      openURL(
        "https://github.com/Mary-Tyler-Moore/venues-production/blob/master/README.md"
      );
    },
    omoCafe() {
      openURL(
        "https://github.com/Mary-Tyler-Moore/omo-cafe/blob/master/README.md"
      );
    },
    bigStep() {
      openURL(
        "https://github.com/Mary-Tyler-Moore/big-step/blob/master/README.md"
      );
    },
    tylerJs() {
      openURL("https://tylerjs.dev");
    }
  }
};
</script>

<style scoped>
.carousel-light {
  background: linear-gradient(270deg, red, orange);
}
.carousel-dark {
  background: linear-gradient(270deg, purple, teal);
}
.custom-caption {
  text-align: center;
  padding: 30px;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
}
.my-card {
  width: 100%;
  max-width: 10000px;
}
@media only screen and (max-width: 731px) {
  .button-1 {
    margin-top: 1em;
  }
  .button-2 {
    margin-top: 1em;
  }
}
@media only screen and (max-width: 767px) {
  .button-1 {
    transform: scale(0.75);
  }
  .button-2 {
    transform: scale(0.75);
  }
}
@media only screen and (min-width: 768px) {
  .text-h2 {
    font-size: 7em;
    line-height: 1em;
    padding-bottom: 0.2em;
  }
  .custom-caption {
    text-align: center;
    padding: 30px;
    padding-top: 3em;
    width: Auto;
    color: white;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .text-subtitle1 {
    font-size: 2em;
    padding-bottom: 1em;
  }
  .button-1 {
    margin-right: 3em;
  }
  .button-2 {
    margin-left: 3em;
  }
}
.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>