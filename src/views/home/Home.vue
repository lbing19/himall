<template>
  <div id='home'>
    <nav-bar class='home-nav'>
      <div slot='center'>嗨购</div>
    </nav-bar>
    <home-swiper :banners='banners'></home-swiper>
    <home-recommends :recommends='recommends'></home-recommends>
    <home-fashion></home-fashion>

    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
<script>
//navbar
import NavBar from '../../components/common/nevbar/NavBar'
//homeswiper
import HomeSwiper from './childcomps/HomeSwiper'
//homerecommends
import HomeRecommends from './childcomps/HomeRecommends'
//homefashion
import HomeFashion from './childcomps/HomeFashion'
//请求首页数据getMultidata
import { getMultidata } from '../../network/home'

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
    HomeSwiper,
    HomeRecommends,
    HomeFashion
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
#home {
  padding-top: 44px;
}
.home-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;

  background-color: var(--color-tint);
  color: #fff;
}
</style>