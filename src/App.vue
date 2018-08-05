<template>
  <v-app>
    <v-toolbar tabs app dark class="primary">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Android Statusbar Color</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="goFullscreen" icon v-if="isFullscreenSupported">
        <v-icon>{{ isFullscreen ? 'mdi-close' : 'mdi-fullscreen' }}</v-icon>
      </v-btn>
      <v-tabs slot="extension" color="primary" slider-color="accent" dark grow :value="activeTab">
        <v-tab ripple @click="$router.push({ name: 'home' })">Home</v-tab>
        <v-tab ripple @click="$router.push({ name: 'colors' })">Colors</v-tab>
      </v-tabs>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import screenfull from 'screenfull'

export default {
  name: "app",
  data () {
    return {
      isFullscreen: false
    }
  },
  computed: {
    isFullscreenSupported () {
      return screenfull.enabled
    },
    activeTab () {
      return this.$route.meta.tab || 0
    }
  },
  methods: {
    goFullscreen () {
      screenfull.toggle()
    }
  },
  mounted () {
    screenfull.on('change', () => {
      this.isFullscreen = screenfull.isFullscreen
    })
  }
};
</script>
