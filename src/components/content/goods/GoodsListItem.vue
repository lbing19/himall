<template>
  <div class='goods-list-item' @click='itemClick'>
    <img :src='goodsItem.show.img' @load='imgLoad' />
    <div class='item-info'>
      <p>{{goodsItem.title}}</p>
      <span class='price'>{{goodsItem.price}}</span>
      <span class='collect'>{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('itemLoad')
    },
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid);

      // this.$router.push({
      //   path: '/detail',
      //   query: {

      //   }
      // })
    }
  }
}
</script>
<style scoped>
.goods-list-item {
  position: relative;
  padding-bottom: 40px;

  width: 48%;
}
.goods-list-item img {
  width: 100%;
  height: 98%;
  border-radius: 10px;
}
.item-info {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  font-size: 14px;
  text-align: center;
}
.item-info p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 3px;
}
.item-info .price {
  color: var(--color-high-text);
}
.item-info .collect {
  position: relative;
  margin-left: 20px;
}
.item-info .collect::before {
  content: "";
  position: absolute;
  top: 1px;
  left: -15px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/collect.png") 0 0/14px 14px;
}
</style>