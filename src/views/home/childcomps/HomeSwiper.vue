<template>
  <div>
    <swiper>
      <swiper-item v-for='(item, index) in banners' :key='index'>
        <a :href='item.link'>
          <img :src='item.image' />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
//轮播
import { Swiper, SwiperItem } from '../../../components/common/swiper'
export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>
<style scoped>
</style>