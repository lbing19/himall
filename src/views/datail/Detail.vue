<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImgs='topImgs'></detail-swiper>
    <detail-goods-info :goods='goodsDetail'></detail-goods-info>
  </div>
</template>
<script>
import DetailNavBar from './childcomps/DetailNavBar'
import DetailSwiper from './childcomps/DetailSwiper'
import DetailGoodsInfo from './childcomps/DetailGoodsInfo'

import { getDetail, GoodsDetail } from '../../network/detail'

export default {
  name: 'Detail',
  data() {
    return {
      iid: '',
      topImgs: [],
      goodsDetail: {}
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailGoodsInfo
  },
  created() {
    this.iid = this.$route.params.id;

    getDetail(this.iid).then(res => {
      const resData = res.data.result;
      this.topImgs = resData.itemInfo.topImages;
      this.goodsDetail = new GoodsDetail(resData.itemInfo, resData.columns, resData.shopInfo.services)
    })
  }
}
</script>
<style scoped>
</style>