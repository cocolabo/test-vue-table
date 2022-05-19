<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="data"
      max-height="300px"
      :fixed-header="true"
      @on-sort-change="onSortChange"
    >
    <template slot="table-row" slot-scope="props">
      <span v-if="props.column.field == 'number'">
        {{ number + props.row.originalIndex }}
      </span>
      <span v-else>
        {{props.formattedRow[props.column.field]}}
      </span>
    </template>
    <div slot="table-actions">
      page: {{ currentPage }} / {{ totalPage }}
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
    totalPage() {
        return Math.ceil(this.total / this.per_page);
    },
    columns() {
      const labels = Object.keys(this.data[0])
      const columnList = _.map(labels, function(value) {
        return {
          label: value,
          field: value
        }
      })
      columnList.unshift({label: 'Number', field: 'number'});
      return columnList
    },
    number() {
      return (this.currentPage - 1) * this.per_page + 1
    }
  },

  methods:{
    onSortChange(params) {
      this.$emit('sortData', params[0].field, params[0].type)
    },
    back() {
      if (this.currentPage > 1) {
        this.$emit('backPage', this.currentPage)
      }
    },
    next() {
      if (this.currentPage < this.totalPage) {
        this.$emit('nextPage', this.currentPage)
      }
    }
  }
};
</script>
