<template>
<div class='card'>
  <h2>{{ $t('summeryTitle') }}</h2>
  <ul>
    <li>
      {{ $t('death') }}
      {{ getSummaryData.deaths }}
    </li>
    <li>
      {{ $t('confirmed') }}
      {{ getSummaryData.confirmed }}
    </li>
    <li>
      {{ $t('recovered') }}
      {{ getSummaryData.recovered }}
    </li>
  </ul>
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

<style lang='scss' scoped>
.card {
  margin: 50px;
  padding: 10px;
}
</style>
