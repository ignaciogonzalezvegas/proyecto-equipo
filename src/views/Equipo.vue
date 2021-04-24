<template>
  <div class="home">
    <h3>Informaciòn institucional</h3>
    <!-- //tajeta de informacón institucional -->
    <b-card class="text-center">
      <div class="bg-secondary text-light">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
          dolor laboriosam suscipit officiis fugit. Alias harum labore, aliquam
          fugiat nisi repellendus nesciunt ullam, eum assumenda consequatur
          perferendis suscipit, at corrupti?
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
