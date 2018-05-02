<template>
  <div>
    <h1>Add Entry</h1>
    <p>New Entry</p>

    <div v-if="errors && errors.length > 0" class="error">
      <div v-for="error in errors" :key="error">
        {{ error }} <br>
      </div>
    </div>
    
    <form>
      <input type="text" placeholder="Title" v-model="title"> <br>
      <textarea placeholder="Text" v-model="text"></textarea> <br>
      <input type="text" placeholder="Published" v-model="published"> <br>
      <input type="text" placeholder="User" v-model="userId"> <br>
      <button @click="submit">Post</button>
    </form>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'

export default {
  name: 'New',
  data () {
    return {
      title: '',
      text: '',
      published: null,
      userId: null,
      errors: []
    }
  },
  methods: {
    submit () {
      axios.post('http://localhost:3000/notes', {
        title: this.title,
        text: this.text,
        published: this.published,
        user_id: this.userId
      }).then(
        res => {
          this.$router.push('/entries/' + res.data.id)
        },
        err => {
          this.errors.push(err)
        }
      )
    }
  }
}
</script>

<style type="text/css" scoped>
form {
  width: 20%;
  margin: 0 auto;
}
</style>
