<template>
  <!-- 注意，需要添加v-if，解决出现这个错误的原因其实是Vue在拿到数据之前渲染了dom -->
  <div v-if='Object.keys(goods).length !== 0' class='base-info'>
    <span class='info-title'>{{goods.title}}</span>
    <div class='info-price'>
      <span class='new-price'>{{goods.newPrice}}</span>
      <span class='old-price'>{{goods.oldPrice}}</span>
      <span v-if='goods.discount' class='discount'>{{goods.discount}}</span>
    </div>

    <div class='info-other'>
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>

    <div class='info-service'>
      <span class='info-service-item' v-for='index in goods.services.length-1' :key='index'>
        <img :src='goods.services[index-1].icon' />
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    goods: {
      type: Object,
      default() {
        { }
      }
    }
  }
}
</script>
<style scoped>
.base-info {
  margin-top: 10px;
  padding: 0 10px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.info-title {
  color: #222;
}
.info-price {
  margin-top: 6px;
}
.info-price .new-price {
  font-size: 22px;
  color: var(--color-high-text);
}
.info-price .old-price {
  font-size: 16px;
  margin-left: 8px;
  text-decoration: line-through;
}
.info-price .discount {
  position: relative;
  top: -8px;
  font-size: 12px;
  padding: 2px 10px;
  background-color: var(--color-high-text);
  color: gray;
  border-radius: 8px;
  margin-left: 8px;
}
.info-other {
  /* margin-top: 12px; */
  line-height: 30px;
  font-size: 14px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  display: flex;
  justify-content: space-between;
}
.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 50px;
}
.info-service img {
  vertical-align: middle;
  width: 16px;
  height: 16px;
}
.info-service-item span {
  font-size: 13px;
  color: #333;
  margin-left: 6px;
}
</style>