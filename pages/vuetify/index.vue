<template>
  <vuetify-table-form
    :total="total"
    :data="data"
    :currentPage="currentPage"
    @getData="getData"
    class="elevation-1"
  ></vuetify-table-form>
</template>

<script>
import VuetifyTableForm from '@/components/VuetifyTableForm'
import api from '@/api/index.js'

export default {
  component: {
    VuetifyTableForm
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
  },
  created() {
    this.getData(this.currentPage)
  }
};
</script>
