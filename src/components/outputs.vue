<template>
  <div class="output">
    <div class="content" v-for="i in 4" :key=i>
    <h3> {{ name }} </h3>
    <p> {{ text }} </p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Out',
  data () {
    return {
      name: 'だいめいだいめいだいめい',
      text: ' ここが本文。ここが本文。ここが本文。ここが本文。ここが本文。ここが本文。ここが本文。ここが本文。ここが本文。ここが本文。ここが本文。ここが本文。'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-title {
  font-size: 24px;
  font-weight: bold;
}
.output {
  height: 90vh;;
  background-color: #f5f5f5;
} 
div.output {
  text-align: center;
}

div.content {
  background-color: #666;
  display: inline-block;
  float: left;
  margin: 5px;
  width: 30%;
}

h3 {
  color: white;
}

p {
  width: 90%;
  display: inline-block;
  text-align: left;
  color: white;
}

</style>
