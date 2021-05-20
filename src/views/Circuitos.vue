<template>
  <div>
    <h1>Circuitos</h1>
    <div>
      <b-table striped hover :items="items" small bordered ></b-table>
b-bu
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { Circuito: "01", Nombre: "La llanada", docente: "Marycarmen Salazar" },
        { Circuito: "02", Nombre: "Brasil", docente: "Liceth Villaroel" },
        { Circuito: "03", Nombre: "Cascajal, Bolivariano" },
        { Circuito: "04", Nombre: "Ezequiel Zamora a Lemus Pérez" },
        { Circuito: "05", Nombre: "Bebedero, Bolivariano" }
      ],
    };
  },
};
</script>
