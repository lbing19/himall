<template>
  <div class='detail'>
    <detail-nav-bar class='detail-navbar'></detail-nav-bar>
    <scroll class='content'>
      <detail-swiper :topImgs='topImgs'></detail-swiper>
      <detail-goods-info :goods='goodsDetail'></detail-goods-info>
      <detail-shop-info :shop='shop'></detail-shop-info>
      <detail-imgs-info :imagesInfo='imagesInfo'></detail-imgs-info>
      <detail-params-info :paramInfo='goodsParams'></detail-params-info>
    </scroll>
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
      goodsParams: {}
    }
  },
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailGoodsInfo,
    DetailShopInfo,
    DetailImgsInfo,
    DetailParamsInfo
  },
  created() {
    this.iid = this.$route.params.id;

    getDetail(this.iid).then(res => {
      const resData = res.data.result;
      this.topImgs = resData.itemInfo.topImages;
      this.goodsDetail = new GoodsDetail(resData.itemInfo, resData.columns, resData.shopInfo.services);
      this.shop = new Shop(resData.shopInfo);

      this.imagesInfo = resData.detailInfo
      this.goodsParams = new GoodsParams(resData.itemParams.info, resData.itemParams.rule)

    })
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
  height: calc(100vh - 44px);
}
</style>