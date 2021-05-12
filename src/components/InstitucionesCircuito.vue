<template>
    <div>
<div>
      <b-table striped hover :items="items" small bordered></b-table>
    </div>
    </div>
</template>

<script>
export default {
   name: "instituciones-circuito",
    data() {
    return {
      items: [
        { institucion: "Josefa Joaquina Sànchez", tipo: "CEI", direccion: "Tres Picos" },

      ],
    };
  },
}
</script>