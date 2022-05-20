<template>
  <v-data-table
    :headers="columns"
    :items="data"
    :items-per-page="per_page"
    :server-items-length="total"
    class="elevation-1"
    @update:page="updatePagination"
  ></v-data-table>
</template>


<script>
import _ from 'lodash';

export default {
  data(){
    return {
      per_page: 10,
    }
  },
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
  },
  computed: {
    totalPage() {
        return Math.ceil(this.total / this.per_page);
    },
    columns() {
      const labels = Object.keys(this.data[0])
      const columnList = _.map(labels, function(value) {
        return { text: value, value: value }
      })
      return columnList
    },
  },
  methods:{
    updatePagination (pagination) {
      this.$emit('getData', pagination)
      console.log('update:pagination', pagination)
    },
  }
};
</script>
