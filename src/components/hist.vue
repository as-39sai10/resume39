<template>
  <div class="history">
    <el-timeline>
      <el-timeline-item class="hist-ch"
        v-for="(hist, index) in items_hist"
        :key="index"
        :icon="hist.icon"
        :type="hist.type"
        :color="hist.color"
        :size="hist.size"
        :timestamp="hist.year"
        placement="top"
      >
        <el-card class="hist-box">
          <h3>{{ hist.society }}</h3>
        </el-card>
        <el-card class="hist-box2">
          <div>{{ hist.text }}</div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: "History",
  components: {},
  data() {
    return {
      items_hist: [
        {
          society: "F",
          value: 4,
          year: "2020/1 〜 在籍中",
          text: "アイウエオアイウエオアイウエオアイウエオアイウエオアイウエオアイウエオ",
          color: "#0bbd87",
        },
        { society: "P", value: 3, year: "2017/9 〜 2019/12" },
        { society: "K", value: 3, year: "2011/4 〜 2017/2" },
      ],
    };
  },
};
</script>

<style >
.profile-page-title {
  font-size: 24px;
  font-weight: bold;
  float: left;
}
.history {
  height: 95vh;
  background-color: #f3f3f3;
  overflow: hidden;
}
.hist-ch {
  
}
.hist-box {
  
  width: 200px;
  height: 120px;
  margin-right: 0px;
}
.hist-box2 {  
  width: 600px;
  height: 120px;
}
</style>