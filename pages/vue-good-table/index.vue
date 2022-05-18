<template>
  <div>
    <h1>vue-good-table</h1>
    <vue-good-table-form
      :total="total"
      :data="data"
      :columns="columns"
      @setPage="setPage"
    ></vue-good-table-form>
  </div>
</template>
<script>
import VueGoodTableForm from '@/components/VueGoodTableForm'
import api from '@/api/index.js'

export default {
  component: {
    VueGoodTableForm
  },
  data() {
    return {
      currentPage: 1,
      data: [],
      columns: [],
      total: 0
    }
  },
  methods: {
    getData(currentPage) {
      const res = api.getData(currentPage);
      this.data = res.data;
      this.columns = res.columnList;
      this.total = res.total;
      // return api.getData(currentPage);
    },
    setPage(currentPage) {
      this.currentPage = currentPage
      this.getData(this.currentPage)
      console.log('setPage!')
    },
  },
  created() {
    this.getData(this.currentPage)
  }
}

</script>
