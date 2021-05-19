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
        {
          nombres: "Dickerson",
          apellidos: "Macdonald",
          institucion: "kgiygi",
          grado: "jkjh",
          condicion: "retardo",
        },
        {
          nombres: "Dickerson",
          apellidos: "Macdonald",
          institucion: "kgiygi",
          grado: "jkjh",
          condicion: "retardo",
        },
      ],
    };
  },
};
</script>
