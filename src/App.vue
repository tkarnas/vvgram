<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="/">
        <img
          src="@/assets/logo.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
          loading="lazy"
        />
        Vvgram
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form
          id="search"
          class="form-inline my-2 my-lg-0 flex-grow-1 d-flex justify-content-center"
        >
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Pretraga"
            aria-label="Search"
            v-model="searchTerm"
          />
        </form>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/signup">Signup</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    background-color: white !important;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import store from "@/store.js";

export default {
  data() {
    return store;
  },
};
</script>
