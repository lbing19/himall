<template>
  <div id='home'>
    <nav-bar class='home-nav'>
      <div slot='center'>嗨购</div>
    </nav-bar>
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
//navbar
import NavBar from '../../components/common/nevbar/NavBar'
//请求首页数据getMultidata
import { getMultidata } from '../../network/home'
//轮播
import { Swiper, SwiperItem } from '../../components/common/swiper'

export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  components: {
    NavBar,
    Swiper,
    SwiperItem
  },
  created() {
    getMultidata().then(res => {
      // console.log(res.data)
      this.banners = res.data.data.banner.list
      this.recommends = res.data.data.recommend.list
    })
  }
}
</script>
<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>