<template>
  <div class="about">
    <h1>Población Integrada</h1>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        
        
     
      ],
    };
  },
};
</script>