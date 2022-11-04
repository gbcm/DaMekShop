export default {
    props: {
      unit: Object
    },
    emits: ['remove'],
    template: `
    <li>{{unit.text}}<button @click="this.$emit('remove')">Remove</button></li>
    `
  }
  

