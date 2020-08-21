<template>
  <div id='home'>
    <nav-bar class='home-nav'>
      <div slot='center'>嗨购</div>
    </nav-bar>
    <scroll class='content'>
      <home-swiper :banners='banners'></home-swiper>
      <home-recommends :recommends='recommends'></home-recommends>
      <home-fashion></home-fashion>

      <tab-control :titles='["流行","新品","精选"]' @tabClick='tabClick'></tab-control>

      <goods-list :goodsList='goods[currentType].list'></goods-list>
    </scroll>
    <back-top></back-top>
  </div>
</template>
<script>
//导航
import NavBar from '../../components/common/nevbar/NavBar'
//tabcontrol切换
import TabControl from '../../components/content/tabcontrol/TabControl'
import GoodsList from '../../components/content/goods/GoodsList'
import Scroll from '../../components/common/bscroll/Scroll'
//回到顶部
import BackTop from '../../components/content/backtop/BackTop'

//homeswiper轮播图
import HomeSwiper from './childcomps/HomeSwiper'
//homerecommends
import HomeRecommends from './childcomps/HomeRecommends'
//homefashion
import HomeFashion from './childcomps/HomeFashion'

//请求首页数据getMultidata
import { getMultidata, getHomeGoods } from '../../network/home'

export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      currentType: 'pop'
    }
  },
  components: {
    HomeSwiper,
    HomeRecommends,
    HomeFashion,

    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created() {
    getMultidata().then(res => {
      // console.log(res.data)
      this.banners = res.data.data.banner.list
      this.recommends = res.data.data.recommend.list
    });
    //获取商品列表
    this.getGoods('pop');
    this.getGoods('new')
    this.getGoods('sell')
  },
  methods: {
    /**
     * 监听tab点击事件，获取子组件传递的type值
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      // console.log(this.currentType)
    },
    getGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res.data)
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page = page;
      })
    }
  },
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
.content {
  height: calc(100vh - 93px);
}
</style>