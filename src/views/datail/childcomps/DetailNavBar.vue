<template>
  <div>
    <nav-bar>
      <div slot='left' class='goback' @click='back'>
        <img src='../../../assets/img/goback.png' />
      </div>
      <div slot='center' class='titles'>
        <div
          class='title-item'
          v-for='(item, index) in titles'
          :key='index'
          :class='{active : currentIndex === index}'
          @click='itemClick(index)'
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from '../../../components/common/nevbar/NavBar'
export default {
  name: 'DetailNavBar',
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick', index)
    },
    back() {
      this.$router.go(-1);
    }
  }

}
</script>
<style scoped>
.titles {
  display: flex;
  font-size: 12px;
}

.title-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}

.goback {
  margin-top: 3px;
}
.goback img {
  height: 16px;
}
</style>