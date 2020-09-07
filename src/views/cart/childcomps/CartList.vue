<template>
  <scroll class='content' ref='scroll'>
    <cart-list-item v-for='item in cartList' :key='item.iid' :itemInfo='item'></cart-list-item>
  </scroll>
</template>

<script>

import Scroll from '../../../components/common/bscroll/Scroll'
import CartListItem from './CartListItem'

export default {
  name: "CartList",
  components: {
    CartListItem,
    Scroll
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  activated() {
    this.$refs.scroll.refresh();
  },
}
</script>

<style scoped>
.content {
  height: calc(100vh - 49px - 44px - 44px);
  overflow: hidden;
}
</style>
