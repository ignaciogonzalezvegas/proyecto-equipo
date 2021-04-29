<template>
  <div>
    <div id="informacionInstitucional">
      <h3>Informaciòn institucional</h3>
      <!-- //informacón institucional -->
      <ul>
        <li>CÓDIGO DEA: OD19251914</li>
        <li>CÓDIGO ADMINISTRATIVO: 006490428</li>
        <li>CÓDIGO ESTADÍSTICO: 191666</li>
        <li>CORREO ELECTRÓNICO: eisgma20108@gmail.com</li>
        <li>DIRECCIÓN: Av. Miranda, dentro del ETC "Modesto Silva"</li>
      </ul>
    </div>
    <PersonalInformacion />
    <detalletrabajador />
  </div>
</template>

<script>
// @ is an alias to /src
import detalletrabajador from "../components/DetalleTrabajador.vue";
import PersonalInformacion from "../components/personalinfo.vue";

export default {
  name: "Inicio",
  components: {
    PersonalInformacion,
    detalletrabajador,
  },
};
</script>
<style>
ul {
  height: auto;
  position: relative;
  display: inline-block;
  padding: 20px;
  text-align: justify;
}
#informacionInstitucional {
  padding: 2px;
}
</style>
