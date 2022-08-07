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
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      getSortFields: 'filterData/getSortFields',
    }),
    isAscending() {
      return !this.getSortFields.descending && this.name === this.getSortFields.name
    }
  },
}
</script>

<style lang='scss' scoped>
.arrow {
  width: 15px;
  opacity: 0.5;
  cursor: pointer;

  &--active {
    opacity: 1;
  }

  &--ascending  {
    transform: rotate(180deg);
  }
}
</style>
