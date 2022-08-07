<template>
  <div>
    <Header :class="{'loading': !getLoaded}" :title="loadingTitle" />
    <SpreedSheetTable />
    <SummeryCard :class="{'loading': !getLoaded}" :title="loadingTitle" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SummeryCard from '@/components/summery/SummeryCard'
import SpreedSheetTable from '@/components/spreedSheet/SpreedSheetTable'
import Header from '@/components/Header/Header'

export default {
  name: 'HomePage',
  components: {
    SpreedSheetTable,
    SummeryCard,
    Header
  },
  async asyncData({ store }) {
    try {
      await store.dispatch('countriesData/fetchCountries')
    } catch (e) {}
  },
  computed: {
    ...mapGetters({
      getLoaded: 'countriesData/getLoaded',
    }),
    loadingTitle() {
      return !this.getLoaded ? this.$t('loading') : ''
    }
  },

}
</script>

<style lang='scss'>
.loading {
  opacity: 0.5;
  pointer-events: none;
}
</style>
