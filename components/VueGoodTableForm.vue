<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="data"
      max-height="300px"
      :line-numbers="true"
      :fixed-header="true"
      @on-sort-change="onSortChange"
      @on-page-change="onPageChange"
      mode="remote"
      :pagination-options="{
        enabled: true,
        perPageDropdownEnabled: false,
      }"
      :totalRows="total"
      styleClass="vgt-table"
    >
    <template slot="table-row" slot-scope="props">
      <span v-if="props.column.field == 'visitors' && props.index == 0">
        <Graph></Graph>
      </span>
      <span v-if="props.column.field == 'sales' && props.index == 0">
        <Graph></Graph>
      </span>
      <span v-if="props.column.field == 'isBargain' && props.index == 0">
        <Graph></Graph>
      </span>
      <span v-if="props.column.field == 'categoryId' && props.index == 0">
        <Graph></Graph>
      </span>
      <span v-if="props.column.field == 'weatherId' && props.index == 0">
        <Graph></Graph>
      </span>
      <span v-else>
        {{props.formattedRow[props.column.field]}}
      </span>
    </template>
    <div slot="table-actions">
      <span>行数：{{ data.length }}</span>
      <span>列数：{{ columns.length }}</span>
    </div>
    </vue-good-table>
  </div>
</template>

<script>
import _ from 'lodash';
import Graph from '@/components/Graph'

export default {
    name: "VueGoodTableForm",
    component: {
        Graph
    },
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
    computed: {
        totalPage() {
            return Math.ceil(this.total / this.per_page);
        },
        columns() {
            const labels = Object.keys(this.data[0]);
            const columnList = _.map(labels, function (value) {
                return {
                    label: value,
                    field: value
                };
            });
            return columnList;
        },
        // ページの先頭のnumberを計算する
        number() {
            return (this.currentPage - 1) * this.per_page + 1;
        },
    },
    methods: {
        onPageChange(data) {
            console.log("onPageChange");
            this.$emit("getData", data.currentPage);
        },
        onSortChange(params) {
            this.$emit("sortData", params[0].field, params[0].type);
        },
    },
    components: { Graph }
};
</script>

<style>
.vgt-table {
  border: 1px solid red !important;
}
.vgt-table th.line-numbers {
  width: 50px !important;
}
</style>
