<template>
  <div class='wrapper'>
    <div class='content'>
      <slot></slot>
    </div>
  </div>
</template>
<script>

import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    // new BScroll()
    this.scroll = new BScroll('.wrapper', {
      scrollY: true,
      click: true
    })
  }
}
</script>
<style scoped>
</style>