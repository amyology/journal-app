<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ blurb }}</p>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'Index',
  data () {
    return {
      title: 'Journal',
      blurb: 'This is a place to jot down your thoughts.'
    }
  }
}
</script>

<style type="text/css" scoped>

</style>
