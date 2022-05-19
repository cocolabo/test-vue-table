<template>
  <div>
    <h1>ag-grid</h1>
    <ag-grid-form
      :total="total"
      :data="data"
      :currentPage="currentPage"
    ></ag-grid-form>
  </div>
</template>
<script>
import AgGridForm from '@/components/AgGridForm'
import api from '@/api/index.js'

export default {
  component: {
    AgGridForm
  },
  data() {
    return {
      currentPage: 1,
      data: [],
      total: 0,
      sortField: null,
      sortType: null
    }
  },
  methods: {
    getData(currentPage, field=null, type=null) {
      const res = api.getData(currentPage, this.sortField, this.sortType);
      this.data = res.data;
      this.total = res.total;
    },
    sortData(field, type) {
      this.currentPage = 1
      this.sortField = field
      this.sortType = type
      this.getData(this.currentPage, this.sortField, this.sortType);
      console.log('sortData!')
    },
    nextPage() {
      this.currentPage++;
      this.getData(this.currentPage,this.sortField, this.sortType);
      console.log('nextPage')
    },
    backPage() {
      this.currentPage--;
      this.getData(this.currentPage,this.sortField, this.sortType);
      console.log('backPage')
    }
  },
  created() {
    this.getData(this.currentPage)
  }
}

</script>
