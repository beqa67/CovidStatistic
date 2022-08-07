<template>
  <table class="table table-striped">
    <TableHead />
    <tbody>
      <TableRow v-for="(country, index) in filteredData" :key="index + country.code" :country="country" :index="index += 1" />
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex'
import TableHead from '@/components/spreedSheet/TableHead'
import TableRow from '@/components/spreedSheet/TableRow'
import filterData from '@/mixins/filterData'

export default {
  components: {
    TableHead,
    TableRow
  },
  mixins: [filterData],
  data() {
    return {
      dataSummary: {
        confirmed: 0,
        deaths: 0,
        recovered: 0
      }
    }
  },
 computed: {
  ...mapGetters({
    countries: 'countriesData/countries',
    countriesFullDetails: 'countriesData/countriesFullDetails',
    getLoaded: 'countriesData/getLoaded',
  }),
 },
 async mounted() {
   if (!this.getLoaded) {
     this.$store.commit('countriesData/setLoaded', false)
     await this.getCountriesFullData()
     this.$store.commit('summary/setSummaryData', this.dataSummary)
     this.$store.commit('countriesData/setLoaded', true)
   }

 },
 methods: {
   async getCountriesFullData() {
     await Promise.all(this.countries.map((country, index) =>
       this.$store.dispatch('countriesData/fetchCountry', country).then(response => {
         this.setCountriesDetails(country, response, index)
         this.statisticSum(response)
       })
     ));
    },
   setCountriesDetails(country, response, index) {
     const countriesNewInstance = [...this.countriesFullDetails]
     countriesNewInstance[index] = {...country, ...response}
     this.$store.commit('countriesData/setCountriesFullData', countriesNewInstance)
   },
   statisticSum({confirmed, deaths, recovered }) {
     this.dataSummary.confirmed += confirmed
     this.dataSummary.deaths += deaths
     this.dataSummary.recovered += recovered
   }
 }
}
</script>

<style lang="scss" scoped>
.table {
  width: calc(100% - 100px);
  margin: 20px 50px 50px 50px;
}
</style>
