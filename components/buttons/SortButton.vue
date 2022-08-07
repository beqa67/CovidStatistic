<template>
  <div>
    <img class='arrow' :class="{'arrow--active': active, 'arrow--ascending ': isAscending  }" src='/icons/arrow.svg' alt=''>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SortButton',
  props: {
    name: {
      type: String,
      default: '',
      required: true
    }
  },
  computed: {
    ...mapGetters({
      getSortFields: 'filterData/getSortFields',
    }),
    isAscending() {
      return !this.getSortFields.descending && this.active
    },
    active() {
      console.log("this.name", this.name)
      console.log("this.getSortFields.name", this.getSortFields.name)
      return this.name === this.getSortFields.name
    }
  },
}
</script>

<style lang='scss' scoped>
.arrow {
  width: 15px;
  opacity: 0.5;
  cursor: pointer;
  margin: 0 10px;

  &--active {
    opacity: 1;
  }

  &--ascending  {
    transform: rotate(180deg);
  }
}
</style>
