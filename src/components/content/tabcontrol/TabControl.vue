<template>
  <div class='tab-control'>
    <div
      class='tabcontrol-item'
      v-for='(item, index) in titles'
      :key='index'
      :class='{active: index == currentIndex}'
      @click='itemClick(index)'
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
    }
  }
}
</script>
<style scoped>
.tab-control {
  position: sticky;
  background-color: #fff;
  top: 44px;
  display: flex;
  text-align: center;
  line-height: 40px;
  font-size: 15px;
}
.tabcontrol-item {
  flex: 1;
}
.tabcontrol-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 2px solid var(--color-tint);
}
</style>