<template>
  <v-app>
    <v-data-table
      :headers="columns"
      :items="data"
      :items-per-page="per_page"
      :server-items-length="total"
      class="elevation-1"
      @update:page="updatePagination"
      @update:items-per-page="updateItemPerPage"
    ></v-data-table>
  </v-app>
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
    columns() {
      const labels = Object.keys(this.data[0])
      const columnList = _.map(labels, function(value) {
        return { text: value, value: value }
      })
      return columnList
    },
  },
  methods:{
    // pageには前後のページ数が入る
    updatePagination (page) {
      this.$emit('getData', page)
      console.log('update:pagination', page)
    },
    updateItemPerPage() {
      console.log('update:items-per-page')
    }
  }
};
</script>
