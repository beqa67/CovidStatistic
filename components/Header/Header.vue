<template>
<div class='header'>
  <SearchInput />
  <LanguageButton />
</div>
</template>

<script>
import LanguageButton from '@/components/header/LanguageButton'
import SearchInput from '@/components/header/SearchInput'
export default {
  name: 'HeaderComponent',
  components: {
    LanguageButton,
    SearchInput
  }
}
</script>

<style lang='scss' scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
