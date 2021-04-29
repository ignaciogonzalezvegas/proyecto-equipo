<template>
  <div>
    <h3>Tabla del personal</h3>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  name: 'PersonalInformacion',
  data() {
      return {
        // Note `isActive` is left out and will not appear in the rendered table
        fields: ['first_name', 'last_name', 'age'],
        items: [
          { isActive: true, age: 40, first_name: 'Jose', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Miguel', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Pedro', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Juan', last_name: 'Carney' }
        ]
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
