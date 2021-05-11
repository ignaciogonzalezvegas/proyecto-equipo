<template>
  <div class="detalle">
    <div>
      <h3>Datos personales</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, dolorum
      accusantium voluptatibus est perspiciatis fuga vitae facere cum ipsa totam
      voluptates libero nihil voluptatem cupiditate maxime ducimus odio error
      quis?
    </div>

    <div>
      <h3>Datos laborales</h3>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, dolorum
      accusantium voluptatibus est perspiciatis fuga vitae facere cum ipsa totam
      voluptates libero nihil voluptatem cupiditate maxime ducimus odio error
      quis?
    </div>

    <div>
      <h3>Datos académicos</h3>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, dolorum
      accusantium voluptatibus est perspiciatis fuga vitae facere cum ipsa totam
      voluptates libero nihil voluptatem cupiditate maxime ducimus odio error
      quis?
    </div>
  </div>
</template>

<script>
export default {
  name: "detalletrabajador",
};
</script>

<style scoped>
.detalle {
  display: grid;
  grid-template-columns: 50% 50%;
}
.detalle div {
  background: #ecf0f1;
  padding: 1em;
}
.detalle div:hover {
  border: 1px solid #f1c40f;
}
</style>
