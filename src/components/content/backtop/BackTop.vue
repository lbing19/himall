<template>
  <div class='back-top'>
    <img src='../../../assets/img/backtop.png' />
  </div>
</template>
<script>
export default {
  name: 'BackTop',
  data() {
    return {
    }
  },
  methods: {

  },
  components: {

  }
}
</script>
<style scoped>
.back-top {
  position: fixed;
  bottom: 60px;
  right: 10px;
}
.back-top img {
  width: 35px;
  height: 35px;
  opacity: 0.8;
}
</style>