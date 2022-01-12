<template>
  <div class="skills">
    <h1 class="skills-page-title">skills</h1>
    <div class="item--list">
      <div class="content" v-for="(item, index) in items" :key="index">
        <tr class="row">
          <th class="item-title">{{ item.title }}</th>
          <th class="item-value">{{ item.value }}</th>
        </tr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  components: {},
  data() {
    return {
      items: [
        { title: "C/C++", value: "△" },
        { title: "C#", value: "〇" },
        { title: "VB.net", value: "〇" },
        { title: "Java", value: "〇" },
        { title: "HTML", value: "〇" },
        { title: "CSS", value: "〇" },
        { title: "swift", value: "〇" },
        { title: "JS", value: "〇" },
      ],
    };
  },
};
</script>

<style >
.skills-page-title {
  font-size: 19px;
  font-weight: bold;
  display: table;
}
.skills {
  height: 60rem;
  background-color: #f5f5f5;
}
div.content {
  display: inline-block;
  margin: 5px;
  width: 15%;
 
}
.row {
  
}
.item--list {
  width: 60%;
  
}
.item-value {
  padding-left: 20px;
  
}
.item-title {
  padding-bottom: 10px;
}
</style>