<template>
  <el-card class="box-card">
    <div class="slider-demo-block">
      <el-slider v-model="value" range show-stops :max="10" />
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref([4, 8])
</script>
<style scoped>
.slider-demo-block {
  display: flex;
  align-items: center;
}
.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}
</style>

