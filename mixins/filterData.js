import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getSearchFieldValue: 'filterData/getSearchFieldValue',
      getSortFields: 'filterData/getSortFields',
    }),
    filteredData() {
      return this.sortData()
    }
  },
  methods: {
    filterBySearchField() {
      return this.countriesFullDetails.filter((country) => {
        return country.name.ka.includes(this.getSearchFieldValue)
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
