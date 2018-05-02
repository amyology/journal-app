<template>
  <div>
    <h1>{{ title }}</h1>

    <div v-if="errors && errors.length > 0" class="error">
      <div v-for="error in errors" :key="error">
        {{ error }} <br>
      </div>
    </div>

    <div v-if="loading">Loading...</div>

    <div v-if="data.length" class="list">
      <div v-for="item in data" :key="item.id" class="block">
        <h3><router-link :to="{name: 'entries', params: {id: item.id}}">{{ item.title }}</router-link></h3>
        <p>{{ item.text }}</p>
        <span>Published:</span> {{ item.published }} <br>
        <span>User:</span> {{ item.UserId }} <br>
        <span>Created:</span> {{ new Date(item.createdAt).toLocaleString() }} <br>
        <span>Updated:</span> {{ new Date(item.updatedAt).toLocaleString() }} <br>
      </div>
    </div>
    <div v-else>No entries yet.</div>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'

export default {
  name: 'Entries',
  data () {
    return {
      title: 'Entries',
      data: {},
      loading: false,
      errors: []
    }
  },
  mounted () {
    this.loading = true
    axios.get('http://localhost:3000/notes').then(
      res => {
        this.loading = false
        this.data = res.data
      },
      err => {
        this.loading = false
        this.errors.push(err)
      }
    )
  }
}
</script>

<style lang="scss" scoped>

.list {
  width: 25%;
  margin: 0 auto;
  text-align: left;
}

.block {
  margin-bottom: 20px;
  background-color: #e0e0e0;
  padding: 5px 25px 25px;
  a {
    font-weight: bold;
    text-decoration: none;
  }
}

span {
  font-weight: bold;
}

</style>
