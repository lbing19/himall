<template>
  <div class='goods-list-item'>
    <a :href='goodsItem.link'>
      <img :src='goodsItem.show.img' />
    </a>
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
  }
}
</script>
<style scoped>
.goods-list-item {
  padding: 5px;
  width: 50%;
}
.goods-list-item img {
  width: 100%;
  border-radius: 10px;
}
.item-info {
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