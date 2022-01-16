<template>
  <div class="skills">
    <div class="item-list row-possion">
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
          <span class="span-type">言語</span>
          <span class="span-skill">スキル</span>
          <span class="span-year">経験年数</span>
        </div>
        <div class="content" v-for="(item, index) in items_lang" :key="index">
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
    
    <div class="item-list3 row-possion">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="span-type">DB</span>
          <span class="span-skill">スキル</span>
          <span class="span-year">経験年数</span>
        </div>
        <div class="content" v-for="(item, index) in items_db" :key="index">
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
        { title: "Linux", value: 3, year: "2年" },
        { title: "Mac", value: 3, year: "1年" },        
        { title: "iOS", value: 2, year: "1年" },        
      ],
      items_lang: [
        { title: "C/C++", value: 2, year: "1年" },
        { title: "C#", value: 3, year: "1年" },
        { title: "VB.net", value: 4, year: "2年" },
        { title: "Java", value: 3, year: "1年" },
        { title: "HTML", value: 3, year: "2年" },
        { title: "CSS", value: 3, year: "2年" },
        { title: "JavaScript", value: 3, year: "2年" },
        { title: "Swift", value: 3, year: "1年" },
        { title: "Delphi", value: 3, year: "1年" },
      ],
      items_db: [
        { title: "SQLsever", value: 3, year: "4年" },
        { title: "Access", value: 2, year: "1年" },
        { title: "PostgreSQL", value: 2, year: "1年" },        
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
  height: 500px;
}
.row-possion {
  float: left;
  margin-bottom: 10px;
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
.item-list3 {
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
.experience-year {
  width: 80px;  
}
</style>