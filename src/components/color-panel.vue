<template>
  <section class="color-cell" :style="{ borderLeft: `7px solid ${hex}` }" @click="() => handleClick(hex)" >
    <p class="color-name">{{ name }}</p>
    <div class="color-bar red" :style="`--color: ${R}`"></div>
    <span class="color-bar green" :style="`--color: ${G}`"></span>
    <span class="color-bar blue" :style="`--color: ${B}`"></span>
    <p class="color-hex">{{ hex }}</p>
  </section>
</template>

<script setup>
// import { ref } from 'vue'

defineProps({
  name: String,
  R: Number,
  G: Number,
  B: Number,
  hex: String,
})

const handleClick = (hex) => {
  handleCopy(hex);
  changeBgColor(hex);
}

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
}

</script>

<style scoped>
  .color-cell {
    flex-shrink: 0;
    width: 160px;
    height: 54px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    font-weight: 900;
    border-radius: 1px;
    justify-items: center;
    background-color: #ffffff4d;
    color: #000000b3;
    position: relative;
    cursor: pointer;
    will-change: background, opacity;
    transition: background 1s, opacity 1s;
    padding: 8px 0.8rem 8px 0.8rem;
  }

  .color-cell:hover {
    opacity: .6;
  }

  .color-name {
    margin-bottom: 8px;
  }

  .color-hex {
    margin-top: 4px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
  }

  .color-bar {
    position: relative;
    display: block;
    background-color: #fff6;
    height: 1px;
    width: 80%;
    margin: 2px 0;
  }

  .color-bar::before {
    content: '';
    position: absolute;
    width: calc(var(--color) / 256 * 100%);
    height: 1px;
    top: 0;
    left: 0;
  }
  
  .color-bar.red::before {
    background-color: rgb(255, 150, 150);
  }

  .color-bar.green::before {
    background-color: rgb(78, 209, 38);
  }

  .color-bar.blue::before {
    background-color: rgb(134, 147, 243);
  }
</style>
