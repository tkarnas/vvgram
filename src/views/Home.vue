<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-7">
      <vvgram-card />
      <vvgram-card />
    </div>
    <div class="col-3">... ovdje ide desni stupac!</div>
  </div>
</template>

<script>
// @ is an alias to /src
import VvgramCard from "../components/VvgramCard.vue";

export default {
  name: "Home",
  components: { VvgramCard },
};
</script>
