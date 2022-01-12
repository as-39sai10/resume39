<template>
  <div>
    <ul class="tab">
      <li class="tab-list" v-for="(item, index) in items" :key="index">
        <router-link class="tab-list-text" v-bind:to="item.path">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabMenu",
  data() {
    return {
      items: [
        { title: "top", path: "/" },
        { title: "profile", path: "/profile" },
        { title: "skills", path: "/skills" },
        { title: "outputs", path: "/outputs" },
      ],
      open: false,
    };
  },
};
</script>

<style scoped>
.head {
  text-align: right;
}
.tab {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
}

.tab-list {
  width: 140px;

  float: left;
}

li:hover {
  opacity: 0.4;
}

.tab-list-text {
  text-decoration: none;
  color: lightslategray;
  font-weight: bold;
  padding: 20px;
}
@media screen and (max-width: 768px) {
  
}
</style>