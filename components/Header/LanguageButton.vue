<template>
  <div class='language'>
    <nuxt-link @click.native="resetFilters()" v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')" >
      English
    </nuxt-link>
    <nuxt-link @click.native="resetFilters()" v-if="$i18n.locale !== 'ka'" :to="switchLocalePath('ka')">
      ქართული
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'LanguageButton',
  methods: {
    resetFilters() {
      this.$store.commit('filterData/resetSorting')
      this.$store.commit('filterData/resetSearchFieldValue')
    }
  }
}
</script>

<style scoped>
.language {
  margin: 0 50px;
}
</style>
