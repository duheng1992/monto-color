<template>
    <section class="convert-panel" :style="{ backgroundColor: `${getContrastColor(hex)}` }">
        <input type="number" class="short-input mr-4" v-model="r" placeholder="r" min="0" max="255" />
        <input type="number" class="short-input mr-4" v-model="g" placeholder="g" min="0" max="255" />
        <input type="number" class="short-input mr-4" v-model="b" placeholder="b" min="0" max="255" />
        <button class="button" @click="rgbToHex">RGB 转 HEX</button>
        <input type="text" v-model="hex" />
        <button class="button" @click="hexToRgb">HEX 转 RGB</button>

        <p>{{ result }}</p>
    </section>
</template>
  
<script setup>
import { ref } from 'vue';
import { getContrastColor } from '../util/const';

const r = ref('');
const g = ref('');
const b = ref('');
const hex = ref('');
const result = ref('');

const rgbToHex = () => {
    const componentToHex = (c) => {
        const thex = c.toString(16);
        return thex.length === 1 ? "0" + thex : thex;
    };

    const red = componentToHex(r.value).toUpperCase();
    const green = componentToHex(g.value).toUpperCase();
    const blue = componentToHex(b.value).toUpperCase();

    if (red && green && blue) {
        result.value = "#" + red + green + blue;
    }
}

const hexToRgb = () => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const thex = hex.value.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const tresult = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(thex);
    if (tresult && tresult.length > 3) {
        result.value = `rgb(${parseInt(tresult[1], 16)}, ${parseInt(tresult[2], 16)}, ${parseInt(tresult[3], 16)})`
    }
}
</script>
  
<style scoped>
.convert-panel {
    padding: 36px;
    backdrop-filter: blur(20px);
    opacity: 0.8;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.822); /* 添加白色投影效果 */
}
.short-input {
    width: 50px;
}

.button {
    display: block;
    margin: 12px 0;
}
</style>