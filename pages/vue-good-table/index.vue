<template>
  <div>
    <h1>vue-good-table</h1>
    <vue-good-table-form
      :total="getTotal()"
      :data="getData(currentPage)"
      :columns="getColumns()"
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
      currentPage: 1
    }
  },
  methods: {
    getData(currentPage) {
      return api.getData(currentPage);
    },
    getColumns() {
      return api.getColumns();
    },
    getTotal() {
      return api.getTotal()
    },
    setPage(currentPage) {
      this.currentPage = currentPage
      console.log('setPage!')
    },
  },
}

</script>
