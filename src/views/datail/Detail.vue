<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
  </div>
</template>
<script>
import DetailNavBar from './childcomps/DetailNavBar'

import { getDetail } from '../../network/detail'

export default {
  name: 'Detail',
  data() {
    return {
      iid: ''
    }
  },
  components: {
    DetailNavBar
  },
  created() {
    this.iid = this.$route.params.id;

    getDetail(this.iid).then(res => console.log(res.data))
  }
}
</script>
<style scoped>
</style>