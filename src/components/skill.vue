<template>
  <div class="skills">
    <div class="item--list">
      <div class="content" v-for="(item, index) in items" :key="index">
        <tr  class="row">
          <th class="item-title">{{ item.title }}</th>
          <td class="item-value">{{ item.value }}</td>
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
  height: 95vh;
  background-color: #f5f5f5;
  margin-top: 5px;
  margin-left: 5px;
}
div.content {
  /* display: inline-block;
  margin: 5px;
  width: 15%; */
 
}
.row {
  
}
.item--list {
  width: 60%;
  
}
.item-value {
  width: 80px;
  border: .5px #000 solid;
}
.item-title {
  text-align: center;  
  width: 80px;
  border: .25px #000 solid;
}
</style>