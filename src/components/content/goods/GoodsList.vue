<template>
  <div class='goods-list'>
    <goods-list-item v-for='(item, index) in goodsList' :key='index' :goodsItem='item'></goods-list-item>
  </div>
</template>
<script>
import GoodsListItem from './GoodsListItem'

export default {
  name: 'GoodsList',
  data() {
    return {
    }
  },
  props: {
    goodsList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>
<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-evenly; */
  padding: 2px;
}
</style>