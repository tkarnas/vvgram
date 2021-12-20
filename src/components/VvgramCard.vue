<template>
  <div class="card text-center">
    <div class="card-header">
      <h4>{{ info.description }}</h4>
      {{ info.author }}
    </div>
    <div class="card-body p-0">
      <img class="card-img-top" :src="info.url" alt="" />
    </div>
    <div class="card-footer text-muted">
      {{ postedFromNow }}
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Vvgram",
  props: ["info"],
  computed: {
    postedFromNow() {
      return moment(this.info.time).fromNow();
    },
  },
};
</script>

<style lang="scss">
.card {
  margin: 20px 0;
}
</style>
