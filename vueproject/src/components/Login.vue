<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input v-model="username" placeholder="Username" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button>Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://localhost:5000/api/login', {
            username: this.username,
            password: this.password,
          });
          alert('Login successful');
          console.log('Token:', response.data.token);
        } catch (error) {
          alert('Invalid credentials');
        }
      },
    },
  };
  </script>
  