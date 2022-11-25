<template>
  <button type="button" @click="onClickAge">+</button>
  <p>The user is {{ age }} years old</p>
</template>

<script>
export default {
  name: 'User',
  props: {
    age: {
      type: Number,
      // required: true,
      // default: 20

      //custom validation
      validator(value) {
        // cannot use internal properties because this is executed before it is initialized
        // this.onClickAge()
        return value < 130
      }
    }
  },
  emits: ['age-change'],
  methods: {
    onClickAge() {
      this.$emit('age-change', 1)
    }
  }
}
</script>