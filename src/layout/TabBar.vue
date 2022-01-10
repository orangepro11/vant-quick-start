<template>
  <div>
    <router-view />

    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item name="Home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="Class" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item name="Other" icon="hot-o">其他</van-tabbar-item>
      <van-tabbar-item name="My" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "Home",
    };
  },
  methods: {
    onChange(e) {
      console.log(e);
      this.$router.push({ name: e });
    },
  },
};
</script>

<style></style>
