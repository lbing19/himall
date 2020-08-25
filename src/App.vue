<template>
  <div id='app'>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab-bar>
      <tab-bar-item path='/home' acriveColor='#d4237a'>
        <img slot='item-icon' src='./assets/img/tabbar/tab/home.svg' />
        <img slot='item-icon-active' src='./assets/img/tabbar/tab-active/home.svg' />
        <div slot='item-text'>首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category' acriveColor='#d4237a'>
        <img slot='item-icon' src='./assets/img/tabbar/tab/menu.svg' />
        <img slot='item-icon-active' src='./assets/img/tabbar/tab-active/menu.svg' />
        <div slot='item-text'>分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart' acriveColor='#d4237a'>
        <img slot='item-icon' src='./assets/img/tabbar/tab/cart.svg' />
        <img slot='item-icon-active' src='./assets/img/tabbar/tab-active/cart.svg' />
        <div slot='item-text'>购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile' acriveColor='#d4237a'>
        <img slot='item-icon' src='./assets/img/tabbar/tab/profile.svg' />
        <img slot='item-icon-active' src='./assets/img/tabbar/tab-active/profile.svg' />
        <div slot='item-text'>我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/common/tabbar/TabBar'
import TabBarItem from './components/common/tabbar/TabBarItem'

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
<style>
@import "./assets/css/base.css";
</style>
