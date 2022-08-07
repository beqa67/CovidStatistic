<template>
<div class='card'>
  <pre>{{getSummaryData}}</pre>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SummeryCard',
  computed: {
    ...mapGetters({
      getSummaryData: 'summary/getSummaryData',
    })
  }
}
</script>

<style scoped>

</style>
