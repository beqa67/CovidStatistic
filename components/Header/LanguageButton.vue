<template>
  <div class='language'>
    <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')" >
      English
    </nuxt-link>
    <nuxt-link v-if="$i18n.locale !== 'ka'" :to="switchLocalePath('ka')">
      ქართული
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'LanguageButton'
}
</script>

<style scoped>
.language {
  margin: 0 50px;
}
</style>
