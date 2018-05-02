<template>
  <div>
    <h1>{{ title }}</h1>

    <div v-if="errors && errors.length > 0" class="error">
      <div v-for="error in errors" :key="error">
        {{ error }} <br>
      </div>
    </div>

    <div v-if="data" class="block">
      <span>Title:</span> {{ data.title }} <br>
      <span>Body:</span> {{ data.text }} <br>
      <span>Published:</span> {{ data.published }} <br>
      <span>User:</span> {{ data.UserId }} <br>
      <span>Created:</span> {{ new Date(data.createdAt).toLocaleString() }} <br>
      <span>Updated:</span> {{ new Date(data.updatedAt).toLocaleString() }} <br>

      <a :href="'/entries/' + data.id + '/update'" class="button">Update</a> 
      <a href="#" @click="destroy" class="button red">Delete</a>
    </div>
    <div v-else>
      Entry does not exist.
    </div>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'

export default {
  name: 'Entry',
  data () {
    return {
      title: 'Note',
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
        console.log(err)
        this.errors.push(err)
      }
    )
  },
  methods: {
    destroy () {
      axios.delete('http://localhost:3000/notes/' + this.data.id).then(
        res => {
          this.$router.push('/entries')
        },
        err => {
          this.errors.push(err)
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>

ul {
  width: 50%;
  margin: 0 auto;
  text-align: left;
}

span {
  font-weight: bold;
}

.block {
  width: 20%;
  margin: 0 auto;
  text-align: left;
  a:first-of-type {
    margin-top: 10px;
    margin-bottom: 5px;
  }
}

</style>
