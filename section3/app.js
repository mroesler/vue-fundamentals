Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0
    }
  },
  methods: {
    reset() {
      this.perspective = 100;
      this.rotateX = this.rotateY = this.rotateZ = 0;
    },
    async copy() {
      let text = `transform:${this.box.transform};`
      await navigator.clipboard.writeText(text)

      alert("CSS copied to clipboard!")
    }
  },
  computed: {
    box() {
      return {
        transform: `
          perspective(${this.perspective}px)
          rotateX(${this.rotateX}deg)
          rotateY(${this.rotateY}deg)
          rotateZ(${this.rotateZ}deg)
        `
      }
    }
  }
}).mount('#app')