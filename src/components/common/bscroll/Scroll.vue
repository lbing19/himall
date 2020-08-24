<template>
  <div class='wrapper' ref='wrapper'>
    <div class='content'>
      <slot></slot>
    </div>
  </div>
</template>
<script>

import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
      threshold: 10
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    // new BScroll()
    this.scroll = new BScroll(this.$refs.wrapper, {
      // scrollY: true,
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    });
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp');
    })
  },
  methods: {
    refresh() {
      console.log("---- refresh -----")
      this.$refs.scroll && this.scroll.refresh();
    }
  },
}
</script>
<style scoped>
</style>