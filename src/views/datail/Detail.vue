<template>
  <div class='detail'>
    <detail-nav-bar class='detail-navbar' @titleClick='titleClick' ref='navbar'></detail-nav-bar>
    <scroll @scroll='contentScroll' :probeType='3' class='content' ref='scroll'>
      <detail-swiper :topImgs='topImgs'></detail-swiper>
      <detail-goods-info :goods='goodsDetail'></detail-goods-info>
      <detail-shop-info :shop='shop'></detail-shop-info>
      <detail-imgs-info @imgLoad='imgLoad' :imagesInfo='imagesInfo'></detail-imgs-info>
      <detail-params-info ref='params' :paramInfo='goodsParams'></detail-params-info>
      <detail-comment-info ref='comments' :commentInfo='commentInfo'></detail-comment-info>
    </scroll>
    <detail-bottom-bar @addToCart='addToCart'></detail-bottom-bar>
  </div>
</template>
<script>
import Scroll from '../../components/common/bscroll/Scroll'

import DetailNavBar from './childcomps/DetailNavBar'
import DetailSwiper from './childcomps/DetailSwiper'
import DetailGoodsInfo from './childcomps/DetailGoodsInfo'
import DetailShopInfo from './childcomps/DetailShopInfo'
import DetailImgsInfo from './childcomps/DetailImgsInfo'
import DetailParamsInfo from './childcomps/DetailParamsInfo'
import DetailCommentInfo from './childcomps/DetailCommentInfo'
import DetailBottomBar from './childcomps/DetailBottomBar'

import { getDetail, GoodsDetail, Shop, GoodsParams } from '../../network/detail'

export default {
  name: 'Detail',
  data() {
    return {
      iid: '',
      topImgs: [],
      goodsDetail: {},
      shop: {},
      imagesInfo: {},
      goodsParams: {},
      commentInfo: {},
      themeTopYs: []
    }
  },
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailGoodsInfo,
    DetailShopInfo,
    DetailImgsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailBottomBar
  },
  created() {
    this.iid = this.$route.params.id;

    getDetail(this.iid).then(res => {
      const resData = res.data.result;
      this.topImgs = resData.itemInfo.topImages;
      this.goodsDetail = new GoodsDetail(resData.itemInfo, resData.columns, resData.shopInfo.services);
      this.shop = new Shop(resData.shopInfo);

      this.imagesInfo = resData.detailInfo;
      this.goodsParams = new GoodsParams(resData.itemParams.info, resData.itemParams.rule);

      if (resData.cRate !== 0) {
        this.commentInfo = resData.rate.list[0]
      }
    })

  },
  methods: {
    imgLoad() {
      this.$refs.scroll.scroll.refresh();

      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comments.$el.offsetTop);
      console.log(this.themeTopYs);

    },

    titleClick(index) {
      this.$refs.scroll.scroll.scrollTo(0, -this.themeTopYs[index] + 44, 1000)
    },

    contentScroll(position) {
      const positionY = -position.y + 50;
      for (let i = 0; i < this.themeTopYs.length; i++) {
        if ((i < this.themeTopYs.length - 1 && positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) || (i === this.themeTopYs.length - 1 && positionY > this.themeTopYs[i])) {

          this.$refs.navbar.currentIndex = i;
        }
      }
    },
    addToCart() {
      //获取购物车需要展示信息
      const product = {};
      product.iid = this.iid;
      product.image = this.topImgs[0];
      product.title = this.goodsDetail.title;
      product.desc = this.goodsDetail.desc;
      product.price = this.goodsDetail.realPrice;
      //将商品添加到购物车
      this.$store.dispatch('addCart', product).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style scoped>
.detail {
  position: relative;
  z-index: 1;
  background-color: #fff;
}

.content {
  overflow: hidden;
  height: calc(100vh - 44px - 49px);
}
</style>
