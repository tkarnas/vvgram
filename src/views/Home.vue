<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-7">
      <vvgram-card v-for="card in filteredCards" :key="card.id" :info="card" />
    </div>
    <div class="col-3"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import VvgramCard from "../components/VvgramCard.vue";
import store from "@/store.js";

// ..API/baza podataka -> sve kartice -> cards

export default {
  name: "Home",
  data() {
    return store;
  },
  computed: {
    filteredCards() {
      return this.cards.filter(
        (card) =>
          card.title.includes(store.searchTerm) ||
          card.author.includes(store.searchTerm)
      );
    },
  },

  components: { VvgramCard },
};
</script>
