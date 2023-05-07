<template>
  <button type="button" @click="getFlag(); randomIntFromInterval(1, 2);">Toggle</button>

  <transition name="fade">
    <h1 v-if="flag && level === 1">Hello World!</h1>
    <h2 v-else-if="flag && level === 2">Hello World!</h2>
  </transition>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      flag: false,
      level: this.randomIntFromInterval(1, 2),
    }
  },
  methods: {
    randomIntFromInterval(min, max) { // min and max included 
      return this.level = Math.floor(Math.random() * (max - min + 1) + min)
    },
    getFlag() {
      return this.flag = !this.flag
    }
  }
} 
</script>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.25s linear;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  transition: all 0.25s linear;
  opacity: 0;
}
</style>