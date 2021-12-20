<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-7">
      <form @submit.prevent="postNewImage" class="form-inline mb-5">
        <div class="form-group">
          <label for="imageUrl">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            placeholder="Enter the image URL"
            class="form-control ml-2"
            v-model="newImageUrl"
          />
        </div>
        <div class="form-group">
          <label for="imageDescription">Description</label>
          <input
            type="text"
            id="imageDescription"
            placeholder="Enter the image description"
            class="form-control ml-2"
            v-model="newImageDescription"
          />
        </div>
        <button type="submit" class="btn btn-primary">Post image</button>
      </form>
      <vvgram-card v-for="card in filteredCards" :key="card.id" :info="card" />
    </div>
    <div class="col-3">{{ store.searchTerm }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import VvgramCard from "../components/VvgramCard.vue";
import store from "@/store.js";
import { db } from "@/firebase";

// ..API/baza podataka -> sve kartice -> cards

export default {
  name: "Home",
  data() {
    return {
      store,
      cards: [],
      newImageDescription: "",
      newImageUrl: "",
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      console.log("firebase dohvat..");

      db.collection("posts")
        .orderBy("posted_at", "desc")
        .limit(10)
        .get()
        .then((query) => {
          this.cards = [];
          query.forEach((doc) => {
            console.log("ID - ", doc.id);
            console.log("Podaci - ", doc.data());

            const data = doc.data();

            this.cards.push({
              id: doc.id,
              time: data.posted_at,
              description: data.desc,
              url: data.url,
              author: data.author,
            });
          });
        });
    },
    postNewImage() {
      const imageUrl = this.newImageUrl;
      const imageDescription = this.newImageDescription;

      db.collection("posts")
        .add({
          url: imageUrl,
          desc: imageDescription,
          author: store.currentUser,
          posted_at: Date.now(),
        })
        .then((doc) => {
          console.log("Spremljeno", doc);
          this.newImageDescription = "";
          this.newImageUrl = "";
          this.getPosts();
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
  computed: {
    filteredCards() {
      return this.cards.filter(
        (card) =>
          card.description.includes(store.searchTerm) ||
          card.author.includes(store.searchTerm)
      );
    },
  },

  components: { VvgramCard },
};
</script>
