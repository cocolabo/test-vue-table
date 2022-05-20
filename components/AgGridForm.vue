<template>
  <div>
    <div class="example-header">
      <div class="paginate-control">
        <span>行数：{{ data.length }}</span>
        <span>列数：{{ columns.length }}</span>
        <button @click="back()">To Previous</button>
          {{currentPage }}/{{ totalPage}}
        <button @click="next()">To Next</button>
      </div>
    </div>
    <ag-grid-vue
      style="height: 300px"
      class="ag-theme-alpine"
      :columnDefs="columns"
      :rowData="data"
      :pagination="false"
      :suppressPaginationPanel="true"
    >
    </ag-grid-vue>
  </div>
</template>

<script>
import _ from 'lodash';
import { AgGridVue } from '@/node_modules/ag-grid-vue';

export default {
  data() {
    return {
      per_page: 10,
    };
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
  components: {
    AgGridVue,
  },
  computed: {
    totalPage() {
        return Math.ceil(this.total / this.per_page);
    },
    columns() {
      const labels = Object.keys(this.data[0])
      const columnList = _.map(labels, function(value) {
        return {
          field: value,
        }
      })
      columnList.unshift({
        field: 'No',
        valueGetter: 'node.rowIndex +' + this.number,
        cellStyle: {backgroundColor: '#babfc7'},
        width: 80
      });
      return columnList
    },
    // ページの先頭のNoを計算する
    number() {
      return (this.currentPage - 1) * this.per_page + 1
    }
  },
  methods:{
    onSortChange(params) {
      this.$emit('sortData', params[0].field, params[0].type)
    },
    back() {
      console.log('back')
      if (this.currentPage > 1) {
        this.$emit('backPage', this.currentPage)
      }
    },
    next() {
      console.log('next')
      if (this.currentPage < this.totalPage) {
        this.$emit('nextPage', this.currentPage)
      }
    },
  }
};
</script>

<style>
  @import "@/node_modules/ag-grid-community/dist/styles/ag-grid.css";
  @import "@/node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";

  .paginate-control {
    text-align: right;
    margin: 10px;
  }
</style>
