<template>
  <div>
    <el-carousel indicator-position='none' arrow='hover'>
      <el-carousel-item v-for='(item, index) in topImgs' :key='index'>
        <!-- <h3>{{ item }}</h3> -->
        <img :src='item' />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

export default {
  name: 'eleDetailSwiper',
  props: {
    topImgs: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-carousel__item img {
  width: 100%;
}
</style>