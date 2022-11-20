const vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      url: 'https://www.google.com',
      raw_url: '<a href="https://www.google.com" target="_blank">Google</a>',
      age: 20,

      getFirstName() {
        return this.firstName;
      },
      setFirstName(name) {
        this.firstName = name;
      },
      getLastName() {
        return this.lastName;
      },
      setLastName(name) {
        this.lastName = name;
      }
    }
  },
  methods: {
    getFullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`
    },
    increment() {
      this.age++;
    },
    updateLastName(event) {
      this.lastName = event.target.value;
    },
  }
}).mount('#app')

/* setTimeout(() => {
  vm.setFirstName('Bob');
  vm.setLastName('Roesler');
}, 2000) */