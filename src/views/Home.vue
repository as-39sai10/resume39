<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="prof" name="first"> <prof></prof> </el-tab-pane>
    <span slot="label" class="fontClass">prof</span>
    <el-tab-pane label="skill" name="second"> <skill></skill> </el-tab-pane>
    <el-tab-pane label="outputs" name="third"><outputs></outputs> </el-tab-pane>
  </el-tabs>
</template>

<script>
import prof from "../components/prof.vue";
import outputs from "../components/outputs.vue";
import skill from "../components/skill.vue";

export default {
  name: "Home",
  components: {
    prof,
    outputs,
    skill,
  },
  data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
};
</script>

<style >
.home-page-title {
  font-size: 24px;
  font-weight: bold;
  float: left;
}
.home {
  height: 60rem;
  background-color: #fff;
  margin-left: 260px;
  margin-top: 0;
  margin-bottom: 0;
}
.el-tabs {
  margin-left: 260px;
}


</style>