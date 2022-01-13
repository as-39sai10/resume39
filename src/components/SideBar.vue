--- Sidebar.vue
<template>
  <div class="sidebar-container">
    <div class="my-image-div">
      <img class="my-image" src="../assets/computer_programming_man.png" />
    </div>
    <div>name: y.s</div>
    <div>age: 20's</div>
    <div>residence: tochigi</div>
    <!-- <ul class="side">
      <li class="side-list" v-for="(item, index) in items" :key="index">
        <router-link class="side-list-text" v-bind:to="item.path">
          {{ item.title }}
        </router-link>
      </li>
    </ul> -->
  </div>
</template>
<script>
export default {
  name: "TabMenu",
  data() {
    return {
      items: [
        { title: "top", path: "/resume39" },
        { title: "profile", path: "/resume39/profile" },
        { title: "skills", path: "/resume39/skills" },
        { title: "outputs", path: "/resume39/outputs" },
      ],
      open: false,
    };
  },
};
</script>
<style>
.my-image {
  width: 50%;
  height: 50%;
  border: medium solid #000;
  background-color: #fff;
}
.my-image-div {
  padding-top: 20px;
}
.sidebar-container {
  width: 15%;
  height: 60rem;
  background: #f0f8ff;
  float: left;
}
.sidebar-container h1 {
  padding: 20px 0;
  color: #40b983;
}
ul {
  list-style: none;
}
.side-list {
  padding-top: 20px;
  padding-bottom: 30px;
}
.side-list-text {
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 32px;
}
</style>