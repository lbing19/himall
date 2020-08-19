<template>
  <div class='recommends'>
    <div class='recommend-item' v-for='(item, index) in recommends' :key='index'>
      <a :href='item.link'>
        <img :src='item.image' />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommends',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style scoped>
.recommends {
  display: flex;
  text-align: center;
  font-size: 13px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 90%;
  margin-bottom: 5px;
}
</style>