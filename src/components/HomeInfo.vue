<template>
  <div>
    <q-page
      :style="
        $q.dark.isActive
          ? 'background-image: linear-gradient(to top, #30cfd0 0%, #330867 75%);'
          : 'background: #FFEFBA; background: -webkit-linear-gradient(to bottom, #FFFFFF, #FFEFBA); background: linear-gradient(to bottom, #FFFFFF, #FFEFBA 65%);'
      "
    >
      <div class="column items-center">
        <q-card
          class="title-card"
          :style="
            $q.dark.isActive
              ? 'background-image: linear-gradient(-220deg, #FF057C 0%, #8D0B93 50%, #321575 100%);'
              : 'background-image: linear-gradient(-40deg, #FFC796 0%, #FF6B95 100%)'
          "
        >
          <q-card-section>
            <div class="column items-center text-center">
              <div
                class="text-h2 line-h2"
                style="padding-bottom: 3%; padding-top: 2%"
              >
                📓 README | please 🙏
              </div>
              <div
                class="text-h3 line-h3"
                style="padding-bottom: 3%; padding-top:10px; padding-right: 3%; padding-left: 3%"
              >
                📓 README | please 🙏
              </div>
              <div
                class="text-h4 line-h4"
                style="padding-bottom: 3%; padding-top:10px; padding-right: 3%; padding-left: 3%"
              >
                📓 README | please 🙏
              </div>
              <div
                class="text-h5 line-h5"
                style="padding-bottom: 3%; padding-top:10px; padding-right: 3%; padding-left: 3%"
              >
                📓 README | please 🙏
              </div>
              <div
                class="text-h6"
                style="padding-bottom: 3%; padding-top:10px; padding-right: 3%; padding-left: 3%"
              >
                📓 README | please 🙏
              </div>
            </div>
          </q-card-section>
        </q-card>

        <q-space />
        <div class="space"></div>

        <q-card
          class="my-card"
          :style="
            $q.dark.isActive
              ? 'background-image: linear-gradient(-230deg, #FF057C 0%, #8D0B93 50%, #321575 100%);'
              : 'background-image: linear-gradient(-45deg, #FFC796 0%, #FF6B95 100%)'
          "
        >
          <q-parallax
            :src="
              $q.dark.isActive
                ? 'statics/kitten-parallax-dark.jpg'
                : 'statics/kitten-parallax.jpg'
            "
          >
            <!--
            // This is an optional button. Feel free to try it out.
            <q-btn
              class="absolute-top-right"
              to="/"
              color="white"
              icon="chevron_right"
              label="Puppy Rentals"
              flat
            />
            -->
          </q-parallax>

          <q-card-section>
            <div
              class="text-h4"
              style="padding-bottom: 1%; padding-top:10px; padding-right: 3%; padding-left: 3%"
            >
              Free Content
            </div>
            <div
              class="text-h5"
              style="padding-bottom: 2%; padding-top:10px; padding-right: 3%; padding-left: 3%"
            >
              Follow me on GitHub or Twitter to stay up to date with the free
              content I release. I'm experienced building responsive Single Page
              Apps, SSR Apps, PWAs, Hybrid Mobile Apps and Electron Apps. Please
              contact me if you are stuck or would like a guide on something
              Quasar specific. I'm always happy to help!
            </div>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
  </div>
</template>

<style lang="scss" scoped>
.my-card {
  width: 80%;
  margin-top: 5%;
  margin-bottom: 5%;
}
.title-card {
  width: 80%;
  margin-top: 5%;
  margin-bottom: 5%;
}

@media only screen and (max-width: 788px) {
  .line-h2 {
    display: none;
  }
}

@media only screen and (max-width: 688px) {
  .line-h3 {
    display: none;
  }
}

@media only screen and (max-width: 508px) {
  .line-h4 {
    display: none;
  }
}

@media only screen and (max-width: 368px) {
  .line-h5 {
    display: none;
  }
}
</style>
