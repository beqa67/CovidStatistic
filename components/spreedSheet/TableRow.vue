<template>
  <tr>
    <th class='table-data table-data--index' scope="row">{{ index }}</th>
    <td v-if='country.name' class='table-data table-data--name'>{{ country.name[$i18n.locale] }}</td>
    <td v-if="country.deaths" class='table-data' >{{ country.deaths }}</td>
    <td v-if="country.confirmed" class='table-data' >{{ country.confirmed }}</td>
    <td v-if="country.recovered" class='table-data' >{{ country.recovered }}</td>
  </tr>
</template>

<script>
export default {
props: {
  country: {
    type: Object,
    require: true,
    default: () => {
      return {}
    }
  },
  index: {
    type: Number,
    require: true,
    default: 1
  }
}
}
</script>

<style lang="scss" scoped>
.table-data {
  //width: 50px;

  &--index {
    width: 30px;
  }

  &--name {
    width: 150px;
  }
}
</style>
