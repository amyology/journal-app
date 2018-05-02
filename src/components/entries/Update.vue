<template>
  <div>
    <h1>Update Entry</h1>

    <div v-if="errors && errors.length > 0" class="error">
      <div v-for="error in errors" :key="error">
        {{ error }} <br>
      </div>
    </div>

    <form>
      Title:<br>
      <input type="text" v-model="data.title"> <br>
      Text:<br>
      <textarea v-model="data.text"></textarea> <br>
      Published:<br>
      <input type="text" v-model="data.published"> <br>
      User:<br>
      <input type="text" v-model="data.UserId"> <br>
      <button @click="update">Save</button>
    </form>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'

export default {
  name: 'New',
  data () {
    return {
      data: {},
      errors: []
    }
  },
  mounted () {
    axios.get('http://localhost:3000/notes/' + this.$route.params.id).then(
      res => {
        this.data = res.data
      },
      err => {
        this.errors.push(err)
      }
    )
  },
  methods: {
    update (e) {
      e.preventDefault()
      axios.patch('http://localhost:3000/notes/' + this.data.id,
        {
          title: this.data.title,
          text: this.data.text,
          published: this.data.published,
          user_id: this.data.UserId
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(
        res => {

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
  display: inline-block;
  text-align: left;
  width: 20%;
}
</style>
