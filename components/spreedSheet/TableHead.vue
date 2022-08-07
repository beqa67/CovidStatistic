<template>
  <thead :class="{'loading': !getLoaded}" >
    <tr>
      <th scope="col">#</th>
      <th scope="col">{{ $t('country') }}</th>
      <th scope="col">
        <div class='d-flex'>
          {{ $t('death') }}
          <SortButton :name="sortFields.DEATHS" @click.native='setSorting(sortFields.DEATHS)' />
        </div>
      </th>
      <th scope="col">
        <div class='d-flex'>
          {{ $t('confirmed') }}
          <SortButton :name="sortFields.CONFIRMED" @click.native='setSorting(sortFields.CONFIRMED)' />
        </div>
      </th>
      <th scope="col">
        <div class='d-flex'>
          {{ $t('recovered') }}
          <SortButton :name="sortFields.RECOVERED" @click.native='setSorting(sortFields.RECOVERED)' />
        </div>
      </th>
    </tr>
  </thead>
</template>

<script>
import { mapGetters } from 'vuex'
import SortButton from '../buttons/SortButton'
import { SORT_FIELDS } from '@/constants'


export default {
  components: {
    SortButton
  },
  computed: {
    ...mapGetters({
      getSortFields: 'filterData/getSortFields',
      getLoaded: 'countriesData/getLoaded',
    }),
    sortFields() {
      return SORT_FIELDS
    }
  },
  methods: {
    setSorting(sortItemName) {
      this.resetSearch()
      const { name,  descending} = this.getSortFields
      const sortFields = {}

      if (name === sortItemName) {
        sortFields.name = name
        sortFields.descending = !descending
      } else {
        sortFields.name = sortItemName
        sortFields.descending = !descending
      }

      this.$store.commit('filterData/setSortFields', sortFields)
    },
    resetSearch() {
      this.$store.commit('filterData/resetSearchFieldValue')
    }
  }
}
</script>

<style lang="scss" scoped></style>
