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
      :getRowHeight="getRowHeight"
    >
    </ag-grid-vue>
  </div>
</template>

<script>
import _ from 'lodash';
import { AgGridVue } from '@/node_modules/ag-grid-vue';
import Graph2 from '@/components/Graph2'

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
    AgGridVue, Graph2
  },
  computed: {
    totalPage() {
        return Math.ceil(this.total / this.per_page);
    },
    columns() {
      const labels = Object.keys(this.data[0])
      const currentPage = this.currentPage
      const columnList = _.map(labels, this.cellRenderMethod)
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
      return (this.currentPage - 1) * this.per_page
    }
  },
  methods:{
    cellRenderMethod(value) {
      return {
          headerName: value,
          field: value,
          cellRendererSelector: params => {
            if (this.currentPage === 1 && params.rowIndex === 0) {
                return {
                  component: 'Graph2',
                };
            }
            return undefined;
          }
        }
    },
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
    getRowHeight(params) {
      console.log(params)
      if (this.currentPage === 1 && params.node.rowIndex === 0) {
        return 100;
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
