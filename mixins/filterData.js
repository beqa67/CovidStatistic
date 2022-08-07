import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getSearchFieldValue: 'filterData/getSearchFieldValue',
      getSortFields: 'filterData/getSortFields',
    }),
    filteredData() {
      if (this.getSearchFieldValue) return this.filterBySearchField()

      if (this.getSortFields.name) return this.sortData()
      return this.countriesFullDetails
    }
  },
  methods: {
    filterBySearchField() {
      return this.countriesFullDetails.filter((country) => {
        return country.name[this.$i18n.locale].includes(this.getSearchFieldValue)
      })
    },
    sortData() {
      return [...this.countriesFullDetails].sort((a, b) => {
        const { name, descending } = this.getSortFields
        if (descending) {
          return a[name] - b[name]
        }
        return b[name] -  a[name]
      })
    }
  },
}
