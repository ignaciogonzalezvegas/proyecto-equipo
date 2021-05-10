<template>
  <div>
    <h3>Tabla del personal</h3>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
export default {
  name: "PersonalInformacion",
  data() {
    return {
      items: [
        
        {
          nombres: "Juan ",
          apellidos: "Perdomo",
          cedula_identidad: 25243655,
          cargo: "docente",
          funcion: "docente",
        },
        {
          nombres: "María ",
          apellidos: "Gómez",
          cedula_identidad: 25243655,
          cargo: "administrativo",
          funcion: "secretaria",
        },
        {
          nombres: "Antonio ",
          apellidos: "Sánchez",
          cedula_identidad: 25243655,
          cargo: "obrero",
          funcion: "aseador",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
