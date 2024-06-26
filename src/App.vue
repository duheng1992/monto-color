<template>
  <section class="flex-layout">
    <section class="left">
      <h1 class="main-title">🀄️式色卡</h1>
      <h3 class="main-subtitle">{{ color.name }}</h3>
      <p class="description">
        {{ color.hex }}
        {{ color.R }}
        {{ color.G }}
        {{ color.B }}
      </p>
      <!-- <ColorConvert class="color-convert" /> -->
    </section>
    <section class="right">
      <h1 class="sub-title">
        {{ currentTab.name }}
        <select :onChange="handleSelectColor">
          <optgroup label="中式色卡">
            <option v-for="color in colorList" :label="color.name" :value="color.key">{{ color.name }}</option>
          </optgroup>
        </select>
      </h1>
      <section class="color-panel">
        <ColorPanel class="color-item" v-for="color in currentTab.value" :hex="color.hex" :name="color.name" :R="color.R"
          :G="color.G" :B="color.B" :handleSelect="() => handleSelect(color.hex, color.name, color.R, color.G, color.B)" />
      </section>
    </section>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import ColorConvert from './components/color-convert.vue';
import ColorPanel from './components/color-panel.vue';

import { redColors, yellowColors, greenColors, blueColors, purpleColors, blackAndWhiteColors  } from './util/const';
import { getContrastColor } from './util'

const colorList = [
  { name: '红色系', key: 'red', value: redColors },
  { name: '黄色系', key: 'yellow', value: yellowColors },
  { name: '绿色系', key: 'green', value: greenColors },
  { name: '蓝色系', key: 'blue', value: blueColors },
  { name: '紫色系', key: 'purple', value: purpleColors },
  { name: '黑白系', key: 'baw', value: blackAndWhiteColors },
];

const currentTab = ref(colorList[0]);
const color = ref({});

const handleCopy = (hex) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(hex);
  } else {
    const text = document.createElement('textarea');
    text.value = hex;
    text.style.position = 'absolute';
    text.style.opacity = 0;
    text.style.left = '-999999px';
    text.style.top = '-999999px';
    document.body.appendChild(text);
    text.focus();
    text.select();
    document.execCommand('copy');
    text.remove();
  }
}

const changeBgColor = (hex) => {
  document.querySelector('body').style.setProperty('--bg-color', hex);
  document.querySelector('body').style.setProperty('--font-color', getContrastColor(hex));
}

const handleSelect = (hex, name, R, G, B) => {
  handleCopy(hex);
  changeBgColor(hex);
  color.value = { hex, name, R, G, B };
}

const handleSelectColor = color => {
  const selectedKey = color.target.value;
  currentTab.value = colorList.find(color => color.key === selectedKey);
}
</script>

<style scoped>
.flex-layout {
  display: flex;
  justify-content: space-between;
}

.left {
  min-width: 500px;
  max-width: 500px;
  margin-right: 50px;
  font-weight: 800;
}

.right {
  flex: 1;
}

.main-title {
  font-size: 48px;
  font-weight: bolder;
}

.main-subtitle {
  font-size: 24px;
  padding: 12px;
  font-weight: bolder;
}

.description {
  font-family: 'Times New Roman', Times, serif;
}

.sub-title {
  display: flex;
  align-items: center;
  font-size: 24px;
}

.color-panel {
  display: flex;
  flex-wrap: wrap;
}

.color-item {
  margin-right: 0.8rem;
  margin-bottom: 1rem;
}

/* ::v-slots {

} */

select {
  margin-left: 12px;
}

@media screen and (min-width: 1000px) {
  .flex-layout {
    padding: 100px 50px 100px 50px;
  }
}

@media screen and (max-width: 1000px) {
  .flex-layout {
    padding: 20px;
    flex-direction: column;
  }

  .color-convert {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .left {
    min-width: unset;
    max-width: unset;
  }
}
</style>
