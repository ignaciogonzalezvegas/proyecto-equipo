<template>
  <div class="home">
    <h3>Informaciòn institucional</h3>
    <!-- //tajeta de informacón institucional -->
    <b-card class="text-center">
      <div class="bg-secondary text-light">
        <p>
          CÓDIGO DEA: OD19251914
          CÓDIGO ADMINISTRATIVO: 006490428
          CÓDIGO ESTADÍSTICO: 191666

          CORREO ELECTRÓNICO: eisgma20108@gmail.com

          DIRECCIÓN: Av. Miranda, dentro del ETC "Modesto Silva"
        </p>
      </div>
    </b-card>

    <EquipoDatos />

    <PersonalInformacion />
  </div>
</template>

<script>
// @ is an alias to /src
import EquipoDatos from "../components/equipodatos.vue";
import PersonalInformacion from "../components/personalinfo.vue";

export default {
  name: "Inicio",
  components: {
    EquipoDatos,
    PersonalInformacion,
  },
};
</script>

Equipodatos
