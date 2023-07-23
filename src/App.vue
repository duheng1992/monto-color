<template>
  <section class="flex-layout">
    <section>
      中国色卡
      <ColorConvert class="color-convert" />
    </section>
    <section>
      <h1>红色系</h1>
      <section class="color-panel">
        <ColorPanel class="color-item" v-for="color in redColors" :hex="color.hex" :name="color.name" :R="color.R" :G="color.G" :B="color.B" />
      </section>
    </section>
  </section>
</template>

<script setup>
import ColorConvert from './components/color-convert.vue';
import ColorPanel from './components/color-panel.vue';

import { redColors } from './util/const'; 
</script>

<style scoped>

.flex-layout {
  display: flex;

}

.color-panel {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 70vw;;
}

.color-item {
  margin-right: 0.8rem;
  margin-bottom: 1rem;
}


@media screen and (min-width: 1000px) {
  .flex-layout {
    padding: 100px;
    justify-content: space-between;
  }
}

@media screen and (max-width: 1000px) {
  .flex-layout {
    padding: 20px;
    flex-direction: column;
    justify-content: space-between;
  }

  .color-convert {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .color-panel {
    width: 100vw;
  }
}
</style>
