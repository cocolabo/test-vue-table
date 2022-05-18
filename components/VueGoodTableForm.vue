<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="data"
      max-height="200px"
      :fixed-header="true"
      :line-numbers="true"
    />
    <button @click="back()">back</button>
    <button @click="next()">next</button>
  </div>
</template>

<script>

export default {
  name: 'VueGoodTableForm',
  data(){
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
    },
    columns: {
      type: Array,
      required: true
    }
  },

  methods:{
    back() {
        this.currentPage--;
        this.$emit('setPage', this.currentPage)
    },
    next() {
        this.currentPage++;
        this.$emit('setPage', this.currentPage)
    }
  }
};
</script>
