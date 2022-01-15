<template>
  <div class="skills">
    <div class="item-list2 row-possion">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="span-type">OS</span>
          <span class="span-skill">スキル</span>
          <span class="span-year">経験年数</span>
        </div>
        <div class="content" v-for="(item, index) in items_os" :key="index">
          <h3 class="item-title item-possion">{{ item.title }}</h3>
          <el-rate
            disabled
            v-model="item.value"
            disabled-void-color="#e9e9eb"
            class="item-possion"
          ></el-rate>
          <div class="experience-year item-possion">{{ item.year }}</div>
        </div>
        
      </el-card>
    </div>

    <div class="item-list2 row-possion">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>言語</span>
          <span class="span-year">経験年数</span>
        </div>
        <div class="content" v-for="(item, index) in items_lang" :key="index">
          <h3 class="item-title">{{ item.title }}</h3>
          <el-rate
            disabled
            v-model="item.value"
            disabled-void-color="#e9e9eb"
          ></el-rate>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  components: {},
  data() {
    return {
      items_os: [
        { title: "Windwos", value: 4, year: "5年以上" },
        { title: "Mac", value: 3, year: "1年未満" },
        { title: "Linux", value: 3, year: "2年以上" },
        { title: "iOS", value: 2, year: "1年未満" },        
      ],
      items_lang: [
        { title: "C/C++", value: 2 },
        { title: "C#", value: 3 },
        { title: "VB.net", value: 4 },
        { title: "Java", value: 3 },
        { title: "HTML", value: 3 },
        { title: "CSS", value: 3 },
        { title: "JavaScript", value: 3 },
        { title: "swift", value: 3 },
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
  background-color: #f3f3f3;
  margin-top: 5px;
  margin-left: 5px;
}
.span-type {  
  margin-left: 30px;
}
.span-skill{
  margin-left: 100px;
  margin-right: 70px;
}
.span-year{  
  
}
.box-card {
  width: 450px;
}
.row-possion {
  float: left;
}
.item-possion {
  float: left;
}
.content {
  padding-bottom: 10px;
  height: 30px;
  
}
.item-list2 {
  margin-left: 10px;
}
.item-value {
  width: 150px;
  border: 0.5px #000 solid;
}
.item-title {
  margin: 0;
  width: 150px;
  background-color: #fff;
}
.xperience-year {
  width: 150px;
}
</style>