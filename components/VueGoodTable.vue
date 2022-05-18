<template>
  <div>vue-good-table!!!</div>
</template>
<script>
export default {
  name: 'VueGoodTable',
  data() {
    return {
      currentPage: 1,
      per_page: 10,
    }
  },
  props: {
    total: {
      type: Number,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  },
  computed: {
    totalPage() {
        return this.total / this.per_page
    }
  }
}
</script>
