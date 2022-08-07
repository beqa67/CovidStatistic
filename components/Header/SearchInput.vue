<template>
<div class='search'>
  <label class='search__label'>მოძებნე ქვეყანა</label>
  <input v-model="searchFieldValue" @input="resetSorting()" type='text' >
</div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
export default {
  name: 'SearchInput',
   computed: {
     ...mapFields('filterData', ['searchFieldValue']),
   },
  methods: {
    resetSorting() {
      this.$store.commit('filterData/resetSorting')
    }
  }
}
</script>

<style lang='scss' scoped>
.search {
  display: flex;
  flex-direction: column;
  margin: 20px 50px;
  max-width: 300px;
}
</style>
