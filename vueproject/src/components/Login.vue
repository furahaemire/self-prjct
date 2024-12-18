<template>
	<div class="container mt-5">
	  <h3>Login</h3>
	  <form @submit.prevent="login">
		<div class="mb-3">
		  <label for="username" class="form-label">Username</label>
		  <input
			v-model="username"
			type="text"
			id="username"
			class="form-control"
			required
		  />
		</div>
		<div class="mb-3">
		  <label for="password" class="form-label">Password</label>
		  <input
			v-model="password"
			type="password"
			id="password"
			class="form-control"
			required
		  />
		</div>
		<button class="btn btn-primary" type="submit">Login</button>
	  </form>
	</div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
	data() {
	  return {
		username: "",
		password: "",
	  };
	},
	methods: {
	  async login() {
		try {
		  const response = await axios.post("http://localhost:5000/login", {
			username: this.username,
			password: this.password,
		  });
		  alert("Login successful!");
		  localStorage.setItem("token", response.data.token);
		} catch (error) {
		  alert(error.response.data);
		}
	  },
	},
  };
  </script>
  