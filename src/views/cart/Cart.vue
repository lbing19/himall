<template>
  <div class='cart'>
    <nav-bar class='nav-bar'>
      <div slot='center'>购物车({{cartLength}})</div>
    </nav-bar>

    <cart-list :cartList='cartList'></cart-list>

    <bottom-bar></bottom-bar>
  </div>
</template>
<script>

import NavBar from '../../components/common/nevbar/NavBar'
import CartList from './childcomps/CartList'
import BottomBar from './childcomps/BottomBar'

export default {
  name: 'Cart',
  data() {
    return {
    }
  },
  components: {
    NavBar,
    CartList,
    BottomBar,
  },
  computed: {
    cartLength() {
      return this.$store.state.cartList.length
    },
    cartList() {
      return this.$store.state.cartList
    }
  }
}
</script>
<style scoped>
.cart {
  height: 100vh;
}

.nav-bar {
  background-color: var(--color-tint);
}
.nav-bar div {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
}
</style>