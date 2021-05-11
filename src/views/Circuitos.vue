<template>
  <div>
    <h1>Circuitos</h1>
    <div>
      <b-table striped hover :items="items" small bordered ></b-table>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { Circuito: "01", Nombre: "La llanada", docente: "Marycarmen" },
        { Circuito: "02", Nombre: "Brasil" ,docente: "Liceth"}, 
        { Circuito: "03", Nombre: "Cascajal, Bolivariano" },
        { Circuito: "04", Nombre: "Ezequiel Zamora a Lemus Pérez" },
        { Circuito: "05", Nombre: "Bebedero, Bolivariano" },
        { Circuito: "06", Nombre: "Juan Freites a Ramos Sucre" },
        { Circuito: "07", Nombre: "San Agustín Cumanacoita" },
        { Circuito: "08", Nombre: "Barbacoa, Tacal, Plan de la Meza" },
        { Circuito: "09", Nombre: "Graterol Bolivar a Saluzzo" },
        { Circuito: "10", Nombre: "ETAR de Pesca a Eutimio Rivas" },
        { Circuito: "11", Nombre: "Corazón de Jesus a FVM" },
        { Circuito: "12", Nombre: "Aula Hospitalaria a CEI Especial nº 4" },
        { Circuito: "13", Nombre: "Nueva Andalucia a Carmelitas" },
        { Circuito: "14", Nombre: "María Montessori a Cruz de la Unión" },
        { Circuito: "15", Nombre: "Cantarrana" },
        { Circuito: "16", Nombre: "Candido Ramírez a Barranquín" },
        { Circuito: "17", Nombre: "Cruz Salmerón hasta Silverio Córdova" },
        { Circuito: "18", Nombre: "Modesto Silva a CAI Bicentenario" },
        { Circuito: "19", Nombre: "Angelitos Negros a San Rafael" },
        { Circuito: "20", Nombre: "Nva Esparta" },
        { Circuito: "21", Nombre: "Makro al Peñón" },
        { Circuito: "22", Nombre: "Tres Picos hasta Morochito" },
        { Circuito: "23", Nombre: "Via Cumanacoa" },
        { Circuito: "24", Nombre: "San Juan" },
        { Circuito: "25", Nombre: "Santa Fe" },
        { Circuito: "26", Nombre: "Mochima a Bella Vista" },
        { Circuito: "27", Nombre: "Arapo, Arapito" },
        { Circuito: "28", Nombre: "Turimiquire" },
      ],
    };
  },
};
</script>

