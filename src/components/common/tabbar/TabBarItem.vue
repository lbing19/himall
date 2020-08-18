<template>
  <div class='tab-bar-item' @click='itemClick'>
    <div v-if='!isActive'>
      <slot name='item-icon'></slot>
    </div>
    <div v-else>
      <slot name='item-icon-active'></slot>
    </div>
    <div :style='activeStyle'>
      <slot name='item-text'></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    acriveColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    isActive() {
      //判断当前路由的path是否和当前item的path相同,indexOf方法，若没有，返回-1
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? { color: this.acriveColor } : {}
    }
  },
  methods: {
    itemClick() {
      // console.log(this.path)
      this.$router.push(this.path)
    }
  }
}
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  /* 去图片下面默认3像素空间 */
  vertical-align: middle;
}

/* .active {
  color: #d4237a;
} */
</style>