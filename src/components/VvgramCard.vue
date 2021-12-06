<template>
  <div class="card text-center">
    <div class="card-header">
      <h4>{{ info.author }}</h4>
      {{ info.title }}
    </div>
    <div class="card-body p-0">
      <img class="card-img-top" :src="info.img" alt="" />
    </div>
    <div class="card-footer text-muted">
      {{ info.time }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Vvgram",
  props: ["info"],
};
</script>

<style lang="scss">
.card {
  margin: 20px 0;
}
</style>
