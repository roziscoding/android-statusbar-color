<template>
  <div>
    <h1 class="title">Pick a color</h1>

    <v-btn
      v-for="colorName in $colors.names"
      :key="colorName"
      :color="$colors.class(colorName)"
      @click="setColor(colorName)">
      {{ colorName }}
    </v-btn>
  </div>
</template>

<script>
export default {
  computed: {
    colors: () => {
      return this.$colors.names
        .map((colorName) => ({ text: colorName, value: this.$colors.base[colorName] }))
    }
  },
  methods: {
    setColor (colorName) {
      const meta = document.querySelector('meta[name="theme-color"]')
      if (!meta) {
        return
      }
      const color = this.$colors.base[colorName]

      meta.content = color
      this.$vuetify.theme.primary = color
    }
  }
}
</script>
