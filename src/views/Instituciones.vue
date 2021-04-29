<template>
  <div class="about">
    <h1>Instituciones Integradoras</h1>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { Institución: "", Director: "", Subdirector: "" },
       
      ],
    };
  },
};
</script>
