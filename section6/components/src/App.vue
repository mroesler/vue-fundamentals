<template>
  <h3>Hey!</h3>
  <!-- Component name can be lower or uppercase, lowercase recommended -->
  <greeting :age="age"></greeting>
  <!-- :{PropertyName in childComponent}="{Name of data property in current component}" -->
  <user :age="age" @age-change="updateAge"></user>
</template>

<script>
// Local import
import Greeting from '@/components/Greeting.vue'
import User from '@/components/User.vue'

export default {
  name: 'App',
  components: {
    // which components to include
    Greeting, User
  },
  data() {
    return {
      age: 20
    }
  },
  methods: {
    updateAge(num) {
      this.age += num
      if(this.age > 130) {
        this.age = 130
      }
    }
  }
}
</script>