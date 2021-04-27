<template>
  <div class="home">
    <h3>Mensaje de Bienvenida</h3>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
      dignissimos ad maiores officiis veritatis. Fugiat unde, labore rerum
      delectus earum quidem quasi eveniet at aperiam impedit pariatur explicabo,
      similique sapiente!
    </p>
    <h3>Grafico de poblacion atendida</h3>
    <navinicio />
  </div>
</template>

<script>
import navinicio from "@/components/navinicio.vue";

export default {
  name: "Inicio",
  components: {
    navinicio,
  },
};
</script>

<style>
p{
  height: auto;
  width: 50%;
  background-color: powderblue;
  position: relative;
  display: inline-block;
  padding: 20px
}
</style>
