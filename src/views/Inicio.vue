<template>
  <div class="home">
    <h3>Mensaje de Bienvenida</h3>
    <h3>Menu de opciones</h3>
    <h3>Grafico de poblacion atendida</h3>
    <navinicio/>
  </div>
</template>

<script>
// @ is an alias to /src
import navinicio from '@/components/navinicio.vue'

export default {
  name: 'Inicio',
  components: {
    navinicio
  }
}
</script>
