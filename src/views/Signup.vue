<template>
  <div class="about">
    <h1>Registration</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                v-model="username"
              />
              <small id="emailHelp" class="form-text text-muted"
                >We'll never share your email with anyone else.</small
              >
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                v-model="password"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword2"> Repeat password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword2"
                placeholder="Password"
                v-model="passwordRepeat"
              />
            </div>
            <button type="button" @click="signup()" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  color: white;
}
</style>

<script>
import { firebase } from "@/firebase.js";

export default {
  name: "Signuo",
  data() {
    return {
      username: "",
      password: "",
      passwordRepeat: "",
    };
  },
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.username, this.password)
        .then(function () {
          console.log("Uspješna registracija");
        })
        .catch(function (error) {
          console.error("Došlo je do pogreške!", error);
        });
    },
  },
};
</script>
