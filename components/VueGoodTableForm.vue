<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="data"
      max-height="300px"
      :fixed-header="true"
      :line-numbers="true"
      @on-sort-change="onSortChange"
    >
    <div slot="table-actions">
      current page: {{ currentPage }}
      <button @click="back()">back</button>
      <button @click="next()">next</button>
    </div>

    </vue-good-table>

  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'VueGoodTableForm',
  data(){
    return {
      // currentPage: 1,
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
    columns() {
      const labels = Object.keys(this.data[0])
      return _.map(labels, function(value) {
        return {
          label: value,
          field: value
        }
      })
    }
  },

  methods:{
    onSortChange(params) {
      this.$emit('sortData', params[0].field, params[0].type)
    },
    back() {
        this.$emit('backPage', this.currentPage)
    },
    next() {
        this.$emit('nextPage', this.currentPage)
    }
  }
};
</script>
