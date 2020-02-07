<template>
  <q-layout view="lHh Lpr lFf" :style="layoutStyles">
    <q-header elevated>
      <q-toolbar
        style="height: 75px"
        class="shadow-18"
        :style="
          $q.dark.isActive
            ? 'background-image: linear-gradient(to right, #30cfd0 0%, #330867 75%)'
            : 'background-image: linear-gradient(to right, #fa709a 25%, #fee140 100%)'
        "
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title class="absolute-center text-h4"
          >📓 README | please 🙏</q-toolbar-title
        >
        <!-- Dark Mode Toggle -->
        <q-btn
          :icon="$q.dark.isActive ? 'wb_sunny' : 'brightness_3'"
          flat
          class="absolute-right"
          style="margin-right: 2em"
          dense
          round
          @click="$q.dark.isActive ? $q.dark.set(false) : $q.dark.set(true)"
          no-caps
        ></q-btn>
        <!-- Dark Mode Toggle -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      :content-class="$q.dark.isActive ? 'bg-grey-10' : 'bg-grey-2'"
    >
      <q-list>
        <q-item-label
          header
          :style="$q.dark.isActive ? 'color: white' : 'color: black'"
          >Navigation</q-item-label
        >

        <q-item
          :style="$q.dark.isActive ? 'color: white' : 'color: black'"
          exact
          clickable
          to="/"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label
              :style="$q.dark.isActive ? 'color: white' : 'color: black'"
              >Home</q-item-label
            >
            <!--
            <q-item-label>{{ nav.label }}</q-item-label>
            -->
          </q-item-section>
        </q-item>

        <q-item
          :style="$q.dark.isActive ? 'color: white' : 'color: black'"
          exact
          clickable
          to="/pet-partners"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="pets" />
          </q-item-section>
          <q-item-section>
            <q-item-label
              :style="$q.dark.isActive ? 'color: white' : 'color: black'"
              >Pet Partners</q-item-label
            >
          </q-item-section>
        </q-item>

        <q-item
          :style="$q.dark.isActive ? 'color: white' : 'color: black'"
          exact
          clickable
          to="/venues-production"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="movie_filter" />
          </q-item-section>
          <q-item-section>
            <q-item-label
              :style="$q.dark.isActive ? 'color: white' : 'color: black'"
              >Venues Production</q-item-label
            >
          </q-item-section>
        </q-item>

        <q-item
          :style="$q.dark.isActive ? 'color: white' : 'color: black'"
          exact
          clickable
          to="/big-step"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="nature_people" />
          </q-item-section>
          <q-item-section>
            <q-item-label
              :style="$q.dark.isActive ? 'color: white' : 'color: black'"
              >Big Step</q-item-label
            >
          </q-item-section>
        </q-item>

        <q-item
          :style="$q.dark.isActive ? 'color: white' : 'color: black'"
          exact
          clickable
          to="/omo-cafe"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="free_breakfast" />
          </q-item-section>
          <q-item-section>
            <q-item-label
              :style="$q.dark.isActive ? 'color: white' : 'color: black'"
              >Omo Cafe</q-item-label
            >
          </q-item-section>
        </q-item>

        <!--
        <q-item
          :style="$q.dark.isActive ? 'color: white' : 'color: black'"
          exact
          clickable
          to="/lovejs"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="sentiment_satisfied_alt" />
          </q-item-section>
          <q-item-section>
            <q-item-label :style="$q.dark.isActive ? 'color: white' : 'color: black'">LoveJS</q-item-label>
          </q-item-section>
        </q-item>
        -->
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MyLayout",

  data() {
    return {
      leftDrawerOpen: false,
      layoutStyles: {}
    };
  },

  mounted() {
    // get header element
    const header = document.querySelector("header.q-header");
    // define a css variable that contains the header height
    this.layoutStyles["--header-height"] = header
      ? `${header.offsetHeight}px`
      : 0;
  }
};
</script>

<style lang="sass">
// When directly navigating to a url with an anchor, for example:
// http://example.com/contact#Email, and to avoid that the anchor element gets
// hidden by the page header we use the header height to set 'scroll-margin-top'
//  in all anchor elements inside our page (elements with the 'id' attribute).
.q-page-container [id]
  scroll-margin-top: var(--header-height)
</style>
