<template>
  <div class="home">
    <tabs :options="{ useUrlFragment: false, defaultTabHash: 'tab1' }">
      <tab id="tab1" name="prof"> <prof></prof> </tab>
      <tab id="tab2" name="skill"> <skill></skill> </tab>
      <tab id="tab3" name="out"> <outputs></outputs> </tab>
    </tabs>
  </div>
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
  background-color: #f5f5f5;
  margin-left: 250px;
  margin-top: 0;
  margin-bottom: 0;
}

.tabs-component {
  margin-top: 0;
}
.tabs-component-tabs {
  border: solid 1px #ddd;
  border-radius: 6px;
  margin-bottom: 5px;
}
@media (min-width: 700px) {
  .tabs-component-tabs {
    border: 0;
    align-items: stretch;
    display: flex;
    justify-content: flex-start;
    margin-bottom: -1px;
  }
}
.tabs-component-tab {
  color: #999;
  font-size: 14px;
  font-weight: 600;
  margin-right: 0;
  list-style: none;
}
.tabs-component-tab:not(:last-child) {
  border-bottom: dotted 1px #ddd;
}
.tabs-component-tab:hover {
  color: #666;
}
.tabs-component-tab.is-active {
  color: #000;
}
.tabs-component-tab.is-disabled * {
  color: #cdcdcd;
  cursor: not-allowed !important;
}
@media (min-width: 700px) {
  .tabs-component-tab {
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 3px 3px 0 0;
    margin-right: 0.5em;
    transform: translateY(2px);
    transition: transform 0.3s ease;
  }
  .tabs-component-tab.is-active {
    border-bottom: solid 1px #fff;
    z-index: 2;
    transform: translateY(0);
  }
}
.tabs-component-tab-a {
  align-items: center;
  color: inherit;
  display: flex;
  padding: 0.5em 1em;
  text-decoration: none;
}
.tabs-component-panels {
  height: 90vh;
}
@media (min-width: 700px) {
  .tabs-component-panels {
    border-top-left-radius: 0;
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 0 6px 6px 6px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  }
}
</style>