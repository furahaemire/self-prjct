<template>
  <div class="container">
    <h1>Add New Item</h1>
    <form @submit.prevent="addItem">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea id="description" v-model="description" class="form-control"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Add Item</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      description: '',
    };
  },
  methods: {
    async addItem() {
      try {
        const response = await axios.post('http://localhost:5000/api/items', {
          name: this.name,
          description: this.description,
        });
        alert(response.data);
        this.name = '';
        this.description = '';
      } catch (err) {
        console.error('Error adding item:', err);
        alert('There was an error adding the item.');
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 50px auto;
}
</style>
